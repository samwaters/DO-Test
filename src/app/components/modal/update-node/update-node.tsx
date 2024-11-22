import {useReactFlow} from "@xyflow/react";
import "./update-node.styles.css"
import {Button} from "@/app/components/ui/button";
import {useModal} from "@/app/contexts/modalcontext";
import {TextInput} from "@/app/components/ui/textinput";
import {ChangeEvent, useState} from "react";

interface Props {
    nodeId: string
}
export const UpdateNode = ({ nodeId }: Props) => {
    const { getNode, updateNodeData } = useReactFlow()
    const { setOpen, setTargetNodeId } = useModal()
    const node = getNode(nodeId)
    const [nodeName, setNodeName] = useState<string | undefined>(node?.data?.label as string)

    const handleCancel = () => {
        setTargetNodeId(null)
        setOpen(false)
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNodeName(e.target.value)
    }

    const handleSave = () => {
        updateNodeData(nodeId, { label: nodeName })
    }

    return <div className="update-node-wrapper">
        <div className="update-node-content">
            <div className="update-node-title">Update Node</div>
            <div className="update-node-field">
                <div className="update-node-label">Name:</div>
                <div className="update-node-input"><TextInput autoFocus onChange={handleNameChange} size="medium" value={nodeName} /></div>
            </div>
        </div>
        <div className="action-bar">
            <Button onClick={handleCancel} size="medium" variant="secondary">Cancel</Button>
            <Button onClick={handleSave} size="medium" variant="primary">Save</Button>
        </div>
    </div>
}