import styles from './Menu.module.scss'
import { formatCurrency } from '../../utils/helpers.js';

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
        <button
            className={styles.addBtn}
            aria-label={`Add ${name} to cart`}
            disabled={soldOut}
        >
          Add to cart
        </button>
      </li>
  );
}
