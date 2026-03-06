import styles from './Form.module.scss';

export default function FormCheckbox({ id, label, value, name, required = true, handleChange }) {
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
