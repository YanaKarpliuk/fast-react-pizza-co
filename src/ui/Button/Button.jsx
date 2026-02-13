import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

export default function Button({
                                 ariaLabel,
                                 name,
                                 path,
                                 handleClick,
                                 link = false,
                                 disabled = false,
                                 secondary = false
                               }) {
  return (
      <>
        {link
            ? <Link className={styles.btn} to={path} aria-label={ariaLabel}>{name}</Link>
            : <button
                className={`${styles.btn} ${secondary ? styles.secondary : ''}`}
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
