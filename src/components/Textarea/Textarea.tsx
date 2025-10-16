import styles from './Textarea.module.css'

interface TextareaProps {
    placeholder?: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export function Textarea({placeholder, value, onChange }: TextareaProps) {
    return (
        <textarea
            className={styles.textarea}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
}
