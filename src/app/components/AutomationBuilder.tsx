"use client"

import { useCallback, useEffect, useRef, DragEvent, MouseEvent } from "react"
import {
    addEdge,
    Background,
    Controls,
    MiniMap,
    NodeTypes,
    OnConnect,
    ReactFlow,
    useEdgesState,
    useNodesState,
    useReactFlow,
} from "@xyflow/react"

import Sidebar from "./Sidebar"
import { useDnD } from "../contexts/DnDContext"
import { useModal } from "../contexts/modalcontext"

import "@xyflow/react/dist/style.css"
import "./styles.css"
import EmailNode from "./nodes/EmailNode"
import { MenuBar } from "@/app/components/menubar/menubar"
import { UpdateNodeModal } from "@/app/components/modal/update-node/update-node"

let id = 0
const getId = () => `dndnode_${id++}`

// list of possible node types
const nodeTypes: NodeTypes = {
    email: EmailNode,
}

type Node = {
    data: { label: string }
    id: string
    measured: { height: number; width: number }
    position: { x: number; y: number }
    type: string
}

const AutomationBuilder = () => {
    const reactFlowWrapper = useRef(null)
    const { setOpen, setTargetNodeId } = useModal()

    const { screenToFlowPosition } = useReactFlow()
    const { type } = useDnD()

    const [nodes, setNodes, onNodesChange] = useNodesState([])
    const [edges, setEdges, onEdgesChange] = useEdgesState([])

    // we load the data from the server on mount
    useEffect(() => {
        const getData = async () => {
            const data = await fetch("/api/automation")
            const automation = await data.json()
            setNodes(automation.nodes)
            setEdges(automation.edges)
        }
        getData()
    }, [setNodes, setEdges])

    // various callbacks
    const onConnect: OnConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges])

    const onDragOver = useCallback((event: DragEvent) => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "move"
    }, [])

    const onDrop = useCallback(
        (event: DragEvent) => {
            event.preventDefault()

            // check if the dropped element is valid
            if (!type) {
                return
            }

            const position = screenToFlowPosition({
                x: event.clientX,
                y: event.clientY,
            })
            const id = getId()
            const newNode = {
                id,
                type,
                position,
                data: { label: `${type} node` },
            }

            // @ts-expect-error Typing issue
            setNodes((nds) => [...nds, newNode])
            // Small delay to let the node position
            setTimeout(() => {
                setTargetNodeId(id)
                setOpen(true)
            }, 100)
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [screenToFlowPosition, type, setNodes],
    )

    const onClick = useCallback(() => {
        setOpen(false)
        setTargetNodeId(null)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onNodeClick = (e: MouseEvent<Element>, node: Record<string, unknown>) => {
        e.stopPropagation()
        setTargetNodeId((node as Node).id)
        setOpen(true)
    }

    return (
        <div className="container">
            <MenuBar />
            <div className="automation-builder">
                <div className="reactflow-wrapper" ref={reactFlowWrapper}>
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onClick={onClick}
                        onNodeClick={onNodeClick}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        fitView
                        className="overview"
                        onDrop={onDrop}
                        onDragOver={onDragOver}
                        nodeTypes={nodeTypes}
                    >
                        <MiniMap zoomable pannable />
                        <Controls />
                        <Background />
                    </ReactFlow>
                </div>
                <Sidebar />
                <UpdateNodeModal />
            </div>
        </div>
    )
}

export default AutomationBuilder
