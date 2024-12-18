import { ChangeEvent, useEffect, useState } from "react"
import { useReactFlow } from "@xyflow/react"
import { Button } from "@/app/components/ui/button"
import { useModal } from "@/app/contexts/modalcontext"
import { TextInput } from "@/app/components/ui/textinput"
import { Modal } from "@/app/components/modal/modal"
import "./update-node.styles.css"

export const UpdateNodeModal = () => {
    const { getNode, updateNodeData } = useReactFlow()
    const { setOpen, targetNodeId, setTargetNodeId } = useModal()
    const node = getNode(targetNodeId ?? "")
    const [nodeName, setNodeName] = useState<string | undefined>("")

    useEffect(() => {
        if (!node) return
        setNodeName(node.data.label as string)
    }, [node])

    const handleCancel = () => {
        setTargetNodeId(null)
        setOpen(false)
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNodeName(e.target.value)
    }

    const handleSave = () => {
        if (!targetNodeId) return
        updateNodeData(targetNodeId, { label: nodeName })
        // Note: Closing the modal here is a deliberate decision
        // Because it is unlikely the user will want to update the name several times
        setTargetNodeId(null)
        setOpen(false)
    }

    return (
        <Modal title="Update Node">
            <div className="update-node-wrapper">
                <div className="update-node-content">
                    <div className="update-node-field">
                        <div className="update-node-label">Name:</div>
                        <div className="update-node-input">
                            <TextInput autoFocus onChange={handleNameChange} fullWidth size="medium" value={nodeName} />
                        </div>
                    </div>
                </div>
                <div className="action-bar">
                    <Button onClick={handleCancel} size="medium" variant="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleSave} size="medium" variant="primary">
                        Save
                    </Button>
                </div>
            </div>
        </Modal>
    )
}
