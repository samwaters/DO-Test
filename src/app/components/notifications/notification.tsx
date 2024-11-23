import { useNotifications } from "@/app/contexts/notificationcontext"
import { IconButton } from "@/app/components/ui/iconbutton"
import { IoIosCloseCircle } from "react-icons/io"
import { TiTick } from "react-icons/ti"
import { MdOutlineErrorOutline } from "react-icons/md"
import "./notification.styles.css"

interface Props {
    id: string
    text: string
    variation: "error" | "success"
}

export const Notification = ({ id, text, variation }: Props) => {
    const { closeNotification } = useNotifications()

    const handleClose = () => {
        closeNotification(id)
    }

    return (
        <div className="notification">
            <div className="notification-icon">
                {variation === "success" ? <TiTick size={28} /> : <MdOutlineErrorOutline size={28} />}
            </div>
            <div className="notification-text">{text}</div>
            <div className="notification-close">
                <IconButton icon={<IoIosCloseCircle />} id={id} onClick={handleClose} size="small" />
            </div>
        </div>
    )
}
