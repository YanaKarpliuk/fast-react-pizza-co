import { Form } from 'react-router-dom';
import styles from './Form.module.scss';
import { ReactNode } from 'react';

type Props = {
  method?: 'POST';
  children: ReactNode;
}

export default function FormRouter({ method = 'POST', children }: Props) {
  return (
      // React router Form for POST, PATCH, DELETE.
      // No need to write action if it's the current path.
      <Form method={method} className={styles.form}>
        {children}
      </Form>
  );
}
