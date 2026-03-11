import { formatCurrency } from '../../utils/helpers';
import styles from './Cart.module.scss';
import Button from '../../ui/Button/Button';
import { useDispatch } from 'react-redux';
import { removeItem } from './cartSlice.ts';
import QuantityButtons from '../../ui/QuantityButtons/QuantityButtons.jsx';

export default function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  return (
      <li className={styles.item}>
        <p>
          {quantity}&times; {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
        <QuantityButtons id={pizzaId} quantity={quantity}/>
        <Button
            name={'Delete'}
            ariaLabel={`Delete ${name} from cart`}
            handleClick={() => dispatch(removeItem(pizzaId))}
        />
      </li>
  );
}
