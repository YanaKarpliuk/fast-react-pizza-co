import { Form } from 'react-router-dom';
import styles from './Form.module.scss';

export default function FormRouter({ method = 'POST', children }) {
  return (
      // React router Form for POST, PATCH, DELETE.
      // No need to write action if it should be the current path.
      <Form method={method} className={styles.form}>
        {children}
      </Form>
  );
}
