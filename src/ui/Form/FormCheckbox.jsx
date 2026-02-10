import styles from './Form.module.scss';

export default function FormCheckbox({ id, label, name, required = true }) {
  return (
      <div className={styles.formCheckbox}>
        <input
            type="checkbox"
            name={name}
            id={id}
            required={required}
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
        />
        <label htmlFor={id}>{label}</label>
      </div>
  );
}
