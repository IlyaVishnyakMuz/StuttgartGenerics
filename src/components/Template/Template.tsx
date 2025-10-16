import type { ReactNode } from "react";
import styles from "./Template.module.css"

interface TemplateProps {
  children?: ReactNode;
}

export function Template({ children }: TemplateProps) {
  return (
    <div className={styles.template}>
        {children}
    </div>
  );
}
