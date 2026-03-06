import Button from '../Button/Button.jsx';
import styles from './QuantityButtons.module.scss';
import { useDispatch } from 'react-redux';
import { decreaseItemQuantity, increaseItemQuantity } from '../../features/cart/cartSlice.js';

export default function QuantityButtons({ id, quantity }) {
  const dispatch = useDispatch();
  return (
      <div className={styles.quantityBtns}>
        <Button name={'-'}
                ariaLabel={'Decrease the quantity'}
                type={'round'}
                handleClick={() => dispatch(decreaseItemQuantity(id))}
                disabled={quantity === 1}
        />
        <span>{quantity}</span>
        <Button name={'+'} ariaLabel={'Increase the quantity'} type={'round'}
                handleClick={() => dispatch(increaseItemQuantity(id))}/>
      </div>
  );
}
