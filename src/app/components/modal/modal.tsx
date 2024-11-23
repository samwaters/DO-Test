import { useModal } from "@/app/contexts/modalcontext"
import "./modal.styles.css"
import { useReactFlow } from "@xyflow/react"
import { PropsWithChildren } from "react"
import { IconButton } from "@/app/components/ui/iconbutton"
import { MdOutlineClose } from "react-icons/md"

interface Props extends PropsWithChildren {
    arrow?: boolean
    title: string
}

export const Modal = ({ arrow = true, children, title }: Props) => {
    const { open, setOpen, setTargetNodeId, targetNodeId } = useModal()
    const { flowToScreenPosition, getNode, getZoom } = useReactFlow()
    if (!open || !targetNodeId) return false
    const node = getNode(targetNodeId)
    if (!node) return false
    const position = flowToScreenPosition(node.position)

    const zoom = getZoom() // Zoom goes from 0.5 to 2
    const xPos = position.x + (node.measured?.width ?? 0) * zoom + 16
    const yPos = position.y - 75 + ((node.measured?.height ?? 0) / 2) * zoom

    const handleClose = () => {
        setTargetNodeId(null)
        setOpen(false)
    }

    return (
        <div className="modal-wrapper" style={{ left: xPos, top: yPos }}>
            {arrow && <div className="modal-arrow"></div>}
            <div className="modal-content">
                <div className="modal-header">
                    <div className="modal-title">{title}</div>
                    <div className="modal-actions">
                        <IconButton
                            icon={<MdOutlineClose />}
                            id="modal-close"
                            onClick={handleClose}
                            size="small"
                            tooltip="Close"
                        />
                    </div>
                </div>
                <div className="modal-body">{children}</div>
            </div>
        </div>
    )
}
