import Button from '../Button/Button.tsx';
import styles from './QuantityButtons.module.scss';
import { useDispatch } from 'react-redux';
import { decreaseItemQuantity, increaseItemQuantity } from '../../features/cart/cartSlice.ts';

type Props = {
  id: number;
  quantity: number;
}

export default function QuantityButtons({ id, quantity }: Props) {
  const dispatch = useDispatch();
  return (
      <div className={styles.quantityBtns}>
        <Button name={'-'}
                ariaLabel={'Decrease the quantity'}
                type={'round'}
            // TODO
                handleClick={() => dispatch(decreaseItemQuantity(id))}
                disabled={quantity === 1}
        />
        <span>{quantity}</span>
        <Button name={'+'}
                ariaLabel={'Increase the quantity'}
                type={'round'}
            // TODO
                handleClick={() => dispatch(increaseItemQuantity(id))}
        />
      </div>
  );
}
