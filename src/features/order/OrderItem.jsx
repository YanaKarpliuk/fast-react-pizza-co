import styles from './Order.module.scss';
import { formatCurrency } from '../../utils/helpers.js';

export default function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
      <li className={styles.item}>
        <p>
          {quantity}&times; {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </li>
  );
}
