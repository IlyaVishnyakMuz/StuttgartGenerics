import { Link, NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { templates } from "../../items/templates";

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <div className={styles.logo}>
                <Link to="/">.StuttgartGenerics</Link>
            </div>
            <ul>
                {templates.map((_, index) => {
						const i = index + 1;
						return i === 1 ? (
                            <li key={i}>
                                <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>Template {i}</NavLink>
                            </li>
						) : (
                            <li key={i}>
                                <NavLink to={`/template_${i}/`} className={({ isActive }) => (isActive ? styles.active : "")}>Template {i}</NavLink>
                            </li>
						);
					})}
            </ul>
        </aside>
    )
}
