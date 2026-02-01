import styles from './Menu.module.scss'
import { formatCurrency } from '../../utils/helpers.js';
import Button from '../../ui/Button/Button';

export default function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
      <li className={`${styles.menuItem} ${soldOut ? styles.soldOut : ''}`}>
        <img className={styles.image} src={imageUrl} alt={name}/>
        <div className={styles.info}>
          <h2 className={styles.title}>{name}</h2>
          <p className={styles.ingredients}>{ingredients.join(', ')}</p>
          <p className={styles.state}>{!soldOut ? formatCurrency(unitPrice) : 'Sold out'}</p>
        </div>
        <Button
            name={'Add to cart'}
            disabled={soldOut}
            ariaLabel={`Add ${name} to cart`}
        />
      </li>
  );
}
