import { formatCurrency } from '../../utils/helpers';
import styles from './Cart.module.scss';
import Button from '../../ui/Button/Button';

export default function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className={styles.item}>
      <p>
        {quantity}&times; {name}
      </p>
      <p>{formatCurrency(totalPrice)}</p>
      <Button name={'Delete'} ariaLabel={`Delete ${name} from cart`}/>
    </li>
  );
}
