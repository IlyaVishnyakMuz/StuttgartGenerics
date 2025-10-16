import type { ChangeEventHandler } from "react";
import styles from "./Checkbox.module.css";

interface CheckboxProps {
  value: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export function Checkbox({ value, onChange }: CheckboxProps) {
  return (
    <label className={styles.label}>
      <input
        type="checkbox"
        checked={value}
        onChange={onChange}
      />
      <span>Добавить гарантию</span>
    </label>
  );
}
