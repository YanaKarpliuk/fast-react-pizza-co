import { formatCurrency } from '../../utils/helpers.ts';
import styles from './Cart.module.scss';
import Button from '../../ui/Button/Button.tsx';
import { useDispatch } from 'react-redux';
import { removeItem } from './cartSlice.ts';
import QuantityButtons from '../../ui/QuantityButtons/QuantityButtons.tsx';

type Pizza = {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

type Props = {
  item: Pizza
}

export default function CartItem({ item }: Props) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  return (
      <li className={styles.item}>
        <p>{quantity}&times; {name}</p>
        <p>{formatCurrency(totalPrice)}</p>
        <QuantityButtons id={pizzaId} quantity={quantity}/>
        <Button
            name={'Delete'}
            ariaLabel={`Delete ${name} from cart`}
            // TODO
            handleClick={() => dispatch(removeItem(pizzaId))}
        />
      </li>
  );
}
