"use client"

import { createContext, PropsWithChildren, useContext, useState } from "react"
import { useInterval } from "@/app/hooks/interval"

interface Notification {
    closeAt: number
    id: string
    text: string
    variant: "error" | "success"
}

interface NotificationContextProps {
    addNotification: (n: Pick<Notification, "text" | "variant">) => void
    closeNotification: (id: string) => void
    notifications: Notification[]
}

const NotificationContext = createContext<NotificationContextProps>({
    addNotification: () => {},
    closeNotification: () => {},
    notifications: [],
})

const NotificationProvider = ({ children }: PropsWithChildren) => {
    const [notifications, setNotifications] = useState<Notification[]>([])

    const addNotification = ({ text, variant }: Pick<Notification, "text" | "variant">) => {
        const closeAt = new Date().getTime() + 5000
        const id = crypto.randomUUID()
        setNotifications([...notifications, { closeAt, id, text, variant }])
    }

    const closeNotification = (id: string) => {
        setNotifications(notifications.filter((n) => n.id !== id))
    }

    useInterval(() => {
        const now = new Date().getTime()
        setNotifications(notifications.filter((n) => n.closeAt > now))
    }, 1000)

    return (
        <NotificationContext.Provider value={{ addNotification, closeNotification, notifications }}>
            {children}
        </NotificationContext.Provider>
    )
}

const useNotifications = () => useContext(NotificationContext)

export { NotificationContext, NotificationProvider, useNotifications }
