import styles from './Cardarea.module.css'
import type { ReactNode } from "react";

interface CardareaProps {
  children?: ReactNode;
}

export function Cardarea({children}: CardareaProps) {
    return (
        <div className={styles.cardarea}>
            {children}
        </div>
    )
}
