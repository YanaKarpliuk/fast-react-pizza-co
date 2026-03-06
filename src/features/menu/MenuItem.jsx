import styles from './Menu.module.scss';
import { formatCurrency } from '../../utils/helpers.js';
import Button from '../../ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getCurrentQuantityById, removeItem } from '../cart/cartSlice.js';
import QuantityButtons from '../../ui/QuantityButtons/QuantityButtons.jsx';

export default function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  function addToCart() {
    const newPizza = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice,
    };
    dispatch(addItem(newPizza));
  }

  return (
      <li className={`${styles.menuItem} ${soldOut ? styles.soldOut : ''}`}>
        <img className={styles.image} src={imageUrl} alt={name}/>
        <div className={styles.info}>
          <h2 className={styles.title}>{name}</h2>
          <p className={styles.ingredients}>{ingredients.join(', ')}</p>
          <p className={styles.state}>{!soldOut ? formatCurrency(unitPrice) : 'Sold out'}</p>
        </div>
        <div className={styles.btnWrapper}>
          {!soldOut && !isInCart &&
              <Button
                  name={'Add to cart'}
                  disabled={soldOut}
                  ariaLabel={`Add ${name} to cart`}
                  handleClick={addToCart}
              />}
          {isInCart &&
              <>
                <QuantityButtons id={id} quantity={currentQuantity}/>
                <Button
                    name={'Delete'}
                    ariaLabel={`Remove ${name} from cart`}
                    handleClick={() => dispatch(removeItem(id))}
                />
              </>
          }
        </div>
      </li>
  );
}
