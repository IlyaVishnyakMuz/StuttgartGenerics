import type { ChangeEventHandler } from "react";
import styles from "./Radio.module.css";

interface RadioProps {
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
}

export function Radio({ checked, onChange, value }: RadioProps) {
  return (
    <label className={styles.label}>
      <input
        type="radio"
        name="cardType"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span>{value}</span>
    </label>
  );
}
