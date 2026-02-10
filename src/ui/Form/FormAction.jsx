import styles from './Form.module.scss';
import Button from '../Button/Button.jsx';

export default function FormAction({ name, value, isSubmitting, btnName, btnNameLoading }) {
  return (
      <div className={styles.formAction}>
        {/* Make data available in the action function. */}
        <input type="hidden" name={name} value={value}/>
        <Button
            name={isSubmitting ? btnNameLoading : btnName}
            ariaLabel={isSubmitting ? btnNameLoading : btnName}
            disabled={isSubmitting}
        />
      </div>
  );
}
