import styles from './Menu.module.scss';
import { formatCurrency } from '../../utils/helpers.ts';
import Button from '../../ui/Button/Button.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getCurrentQuantityById, removeItem } from '../cart/cartSlice.ts';
import QuantityButtons from '../../ui/QuantityButtons/QuantityButtons.tsx';

type Pizza = {
  id: number;
  name: string;
  unitPrice: number;
  ingredients: string[];
  soldOut: boolean;
  imageUrl: string;
}

type Props = {
  pizza: Pizza;
}

export default function MenuItem({ pizza }: Props) {
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
    // TODO
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
              />
          }
          {isInCart &&
              <>
                <QuantityButtons id={id} quantity={currentQuantity}/>
                <Button
                    name={'Delete'}
                    ariaLabel={`Remove ${name} from cart`}
                    // TODO
                    handleClick={() => dispatch(removeItem(id))}
                />
              </>
          }
        </div>
      </li>
  );
}
