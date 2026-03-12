import styles from './Form.module.scss';
import { ChangeEvent } from 'react';

type Props = {
  id: string;
  label: string;
  type?: 'text' | 'tel' | 'email';
  name: string;
  required?: boolean;
  errorsData?: boolean;
  errorMsg?: string;
  labelHidden?: boolean;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function FormInput({
                                    id,
                                    label,
                                    type = 'text',
                                    name,
                                    required = true,
                                    errorsData,
                                    errorMsg,
                                    labelHidden = false,
                                    placeholder,
                                    value,
                                    handleChange,
                                    defaultValue = '',
                                    disabled = false
                                  }: Props) {
  return (
      <div className={styles.formInput}>
        <label
            htmlFor={id}
            className={labelHidden ? 'sr-only' : ''}
        >
          {label}
        </label>
        <input
            type={type}
            name={name}
            id={id}
            value={value}
            required={required}
            placeholder={placeholder}
            onChange={handleChange}
            defaultValue={defaultValue}
            disabled={disabled}
        />
        {errorsData && errorMsg && <p className={styles.error}>{errorMsg}</p>}
      </div>
  );
}
