import styles from './Form.module.scss';

export default function FormInput({
                                    id,
                                    label,
                                    type = 'text',
                                    name,
                                    required = true,
                                    errorsData,
                                    errorMsg,
                                    labelHidden = false,
                                    placeholder
                                  }) {
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
            required={required}
            placeholder={placeholder}
        />
        {errorsData && errorMsg && <p className={styles.error}>{errorMsg}</p>}
      </div>
  );
}
