import styles from './ChooseImage.module.css'

interface ChooseImageProps {
    title?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function ChooseImage({title, onChange}: ChooseImageProps) {
    return(
        <label className={styles.label}>
            <input
                type="file"
                accept="image/*"
                onChange={onChange}
                className="hidden"
            />
            <span>{title ? title : 'Выбрать картинку'}</span>
        </label>
    )
}
