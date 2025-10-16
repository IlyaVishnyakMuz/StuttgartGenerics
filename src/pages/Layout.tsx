import { Outlet } from "react-router";
import { Sidebar } from "../components/Sidebar/Sidebar";
import styles from "./Layout.module.css"

export function Layout() {
    return(
        <div className={styles.layout}>
            <Sidebar />
            <div className={styles.content}>
                <Outlet />
            </div>
        </div>
    )
}
