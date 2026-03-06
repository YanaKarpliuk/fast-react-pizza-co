import styles from './Form.module.scss';
import Button from '../Button/Button.jsx';

export default function FormAction({ isSubmitting = false, isLoading = false, btnName, ariaLabel = btnName, btnNameLoading, routerActionData }) {
  return (
      <div className={styles.formAction}>
        {/* Make data available in the action function. */}
        {routerActionData && routerActionData.length &&
            routerActionData.map(item => <input type="hidden" key={item.name} name={item.name} value={item.value}/>)
        }
        <Button
            name={isSubmitting ? btnNameLoading : btnName}
            ariaLabel={ariaLabel}
            disabled={isLoading || isSubmitting}
        />
      </div>
  );
}
