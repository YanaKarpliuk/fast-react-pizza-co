import styles from './Form.module.scss';

export default function FormSimple({ handleSubmit, children }) {
  return (
      // React router Form for POST, PATCH, DELETE.
      // No need to write action if it should be the current path.
      <form className={styles.form} onSubmit={handleSubmit}>
        {children}
      </form>
  );
}
