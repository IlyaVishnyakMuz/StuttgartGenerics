import styles from "./Workspace.module.css"
import type { ReactNode } from "react";

interface WorkspaceProps {
  children?: ReactNode;
}

export function Workspace({children}: WorkspaceProps) {
    return(
        <div className={styles.workspace}>
            {children}
        </div>
    )
}
