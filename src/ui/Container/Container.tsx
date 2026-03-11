import styles from './Container.module.scss';
import { ReactNode } from 'react';

type Props = {
  narrow?: boolean;
  children: ReactNode;
}

export default function Container({ narrow, children }: Props) {
  return (
      <div className={`${styles.container} ${narrow ? styles.narrow : ''}`}>
        {children}
      </div>
  );
}
