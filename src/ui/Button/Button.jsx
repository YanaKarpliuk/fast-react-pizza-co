import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

export default function Button({
                                 name,
                                 ariaLabel = name,
                                 path,
                                 handleClick,
                                 disabled = false,
                                 type
                               }) {

  function setTypeClass(type) {
    switch (type) {
      case 'secondary':
        return styles.secondary;
      case 'round':
        return styles.round;
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
