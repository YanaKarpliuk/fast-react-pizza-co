import styles from './Form.module.scss';
import Button from '../Button/Button.jsx';

export default function FormAction({ name, ariaLabel, value, isSubmitting = false, btnName, btnNameLoading, isRouterAction = false }) {
  return (
      <div className={styles.formAction}>
        {/* Make data available in the action function. */}
        {isRouterAction &&
            <input type="hidden" name={name} value={value}/>
        }
        <Button
            name={isSubmitting ? btnNameLoading : btnName}
            ariaLabel={ariaLabel}
            disabled={isSubmitting}
        />
      </div>
  );
}
