import { Link } from 'react-router-dom';
import styles from './Cart.module.scss';
import Container from '../../ui/Container/Container';
import { useSelector } from 'react-redux';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice.js';
import { formatCurrency } from '../../utils/helpers';

export default function CartOverview() {
  const totalQuantity = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalCartPrice);

  if (!totalQuantity) return null;

  return (
      <div className={styles.cartOverview}>
        <Container>
          <p>{totalQuantity} {totalQuantity === 1 ? 'pizza' : 'pizzas'}</p>
          <p>{formatCurrency(totalPrice)}</p>
          <Link to="/cart">Open cart &rarr;</Link>
        </Container>
      </div>
  );
}
