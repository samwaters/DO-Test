import { ReactFlowProvider } from "@xyflow/react"
import AutomationBuilder from "./components/AutomationBuilder"
import { DnDProvider } from "./contexts/DnDContext"
import styles from "./page.module.css"
import { ModalProvider } from "@/app/contexts/modalcontext"
import { NotificationProvider } from "@/app/contexts/notificationcontext"

const Home = () => {
    return (
        <div className={styles.main}>
            <ReactFlowProvider>
                <NotificationProvider>
                    <ModalProvider>
                        <DnDProvider>
                            <AutomationBuilder />
                        </DnDProvider>
                    </ModalProvider>
                </NotificationProvider>
            </ReactFlowProvider>
        </div>
    )
}

export default Home
