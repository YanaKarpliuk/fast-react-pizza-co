import styles from './Order.module.scss';
import { formatCurrency } from '../../utils/helpers.ts';

export default function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
      <li className={styles.item}>
        <div className={styles.itemWrapper}>
          <p>
            {quantity}&times; {name}
          </p>
          <p>{formatCurrency(totalPrice)}</p>
        </div>
        <p className={styles.ingredients}>
          {isLoadingIngredients ? 'Loading...' : ingredients.join(', ')}
        </p>
      </li>
  );
}
