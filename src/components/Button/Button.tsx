import styles from './Button.module.css'

interface ButtonProps {
    text: string,
    onClick?: any
}

export function Button({text, onClick}: ButtonProps) {
    return (
        <button className={styles.button} onClick={onClick}>{text}</button>
    )
}
