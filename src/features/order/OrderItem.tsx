import styles from './Order.module.scss';
import { formatCurrency } from '../../utils/helpers.ts';

type Pizza = {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

type Props = {
  item: Pizza;
  isLoadingIngredients: boolean;
  ingredients: string[];
}

export default function OrderItem({ item, isLoadingIngredients, ingredients }: Props) {
  const { quantity, name, totalPrice } = item;

  return (
      <li className={styles.item}>
        <div className={styles.itemWrapper}>
          <p>{quantity}&times; {name}</p>
          <p>{formatCurrency(totalPrice)}</p>
        </div>
        <p className={styles.ingredients}>
          {isLoadingIngredients ? 'Loading...' : ingredients.join(', ')}
        </p>
      </li>
  );
}
