import {useModal} from "@/app/contexts/modalcontext";
import "./modal.styles.css"
import {useReactFlow} from "@xyflow/react";
import {UpdateNode} from "@/app/components/modal/update-node/update-node";

export const Modal = () => {
    const { open, targetNodeId } = useModal()
    const { flowToScreenPosition, getNode } = useReactFlow()
    if(!open || !targetNodeId) return false
    const node = getNode(targetNodeId)
    if(!node) return false
    const position = flowToScreenPosition(node.position)

    const xPos = position.x + ((node.measured?.width ?? 0) * 2) + 16
    const yPos = position.y - 75 + (node.measured?.height ?? 0)

    return <div className="modal-wrapper" style={{ left: xPos, top: yPos }}>
        <div className="modal-arrow"></div>
        <UpdateNode nodeId={targetNodeId}/>
    </div>
}