import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import { MouseEvent } from 'react';

type Props = {
  name: string;
  ariaLabel?: string;
  path?: string;
  handleClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: 'primary' | 'secondary' | 'round' | 'small' | 'light' | 'lightSecondary';
}

export default function Button({
                                 name,
                                 ariaLabel = name,
                                 path,
                                 handleClick,
                                 disabled = false,
                                 type
                               }: Props) {

  function setTypeClass(type) {
    switch (type) {
      case 'secondary':
        return styles.secondary;
      case 'round':
        return styles.round;
      case 'small':
        return styles.small;
      case 'light':
        return styles.light;
      case 'lightSecondary':
        return styles.lightSecondary;
      default:
        return '';
    }
  }

  return (
      <>
        {path
            ? <Link className={styles.btn} to={path} aria-label={ariaLabel}>{name}</Link>
            : <button
                className={`${styles.btn} ${setTypeClass(type)}`}
                aria-label={ariaLabel}
                disabled={disabled}
                onClick={handleClick}
            >
              {name}
            </button>
        }
      </>
  );
}
