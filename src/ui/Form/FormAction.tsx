import styles from './Form.module.scss';
import Button from '../Button/Button.tsx';

type RouterActionData = {
  name: string;
  value: string;
}

type Props = {
  isSubmitting?: boolean;
  isLoading?: boolean;
  btnName: string;
  ariaLabel?: string;
  btnNameLoading?: string;
  routerActionData?: RouterActionData[];
};

export default function FormAction({
                                     isSubmitting = false,
                                     isLoading = false,
                                     btnName,
                                     ariaLabel = btnName,
                                     btnNameLoading,
                                     routerActionData
                                   }: Props) {
  return (
      <div className={styles.formAction}>
        {/* Make data available in the action function. */}
        {/* Used with react-router-dom Form. */}
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
