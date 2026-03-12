import styles from './Form.module.scss';
import { ChangeEvent } from 'react';

type Props = {
  id: string;
  label: string;
  name: string;
  required?: boolean;
  value?: boolean;
  disabled?: boolean;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function FormCheckbox({ id, label, value, name, required = true, handleChange }: Props) {
  return (
      <div className={styles.formCheckbox}>
        <input
            type="checkbox"
            name={name}
            id={id}
            required={required}
            value={value}
            onChange={handleChange}
        />
        <label htmlFor={id}>{label}</label>
      </div>
  );
}
