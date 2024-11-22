import { ReactFlowProvider } from "@xyflow/react";
import AutomationBuilder from "./components/AutomationBuilder";
import { DnDProvider } from "./contexts/DnDContext";
import styles from "./page.module.css";
import {ModalProvider} from "@/app/contexts/modalcontext";

const Home = () => {
  return (
    <div className={styles.main}>
      <ReactFlowProvider>
          <ModalProvider>
            <DnDProvider>
              <AutomationBuilder />
            </DnDProvider>
          </ModalProvider>
      </ReactFlowProvider>
    </div>
  );
};

export default Home;
