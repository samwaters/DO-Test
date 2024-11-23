import { useNotifications } from "@/app/contexts/notificationcontext"
import "./notifications.styles.css"
import { Notification } from "@/app/components/notifications/notification"

export const Notifications = () => {
    const { notifications } = useNotifications()

    return (
        <div className="notifications-container">
            {notifications.map((n) => (
                <Notification id={n.id} key={n.id} text={n.text} variation={n.variant} />
            ))}
        </div>
    )
}
