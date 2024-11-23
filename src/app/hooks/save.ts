import { useNotifications } from "@/app/contexts/notificationcontext"
import { useReactFlow } from "@xyflow/react"

export const useSave = () => {
    const { addNotification } = useNotifications()
    const { getNodes } = useReactFlow()

    return async () => {
        const nodes = getNodes()
        const response = await fetch("/api/automation/save", {
            body: JSON.stringify({ nodes }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
        })
        const data = await response.json()
        if (data.error) {
            addNotification({ text: "Failed to save, please try again later", variant: "error" })
        } else {
            addNotification({ text: data.message, variant: "success" })
        }
    }
}
