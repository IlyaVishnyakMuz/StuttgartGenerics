import styles from "./ColorPicker.module.css"
import type { ChangeEventHandler } from "react";

interface ColorPickerProps {
    color: string;
    setColor: ChangeEventHandler<HTMLInputElement>;
}

export function ColorPicker({color, setColor}: ColorPickerProps) {
    return (
        <div className={styles.color_picker}>
            <div>Цвет фона:</div>
            <input
                type="color"
                value={color}
                onChange={setColor}
            />
        </div>
    );
}
