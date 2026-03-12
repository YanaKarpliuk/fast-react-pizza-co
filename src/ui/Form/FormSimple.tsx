import styles from './Form.module.scss';
import { FormEvent, ReactNode } from 'react';

type Props = {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
}

export default function FormSimple({ handleSubmit, children }: Props) {
  return (
      <form className={styles.form} onSubmit={handleSubmit}>
        {children}
      </form>
  );
}
