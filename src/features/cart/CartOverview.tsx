import { Link } from 'react-router-dom';
import styles from './Cart.module.scss';
import Container from '../../ui/Container/Container.tsx';
import { useSelector } from 'react-redux';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice.ts';
import { formatCurrency } from '../../utils/helpers.ts';

export default function CartOverview() {
  const totalQuantity = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalCartPrice);

  if (!totalQuantity) return null;

  return (
      <div className={styles.cartOverview}>
        <Container>
          <p>{totalQuantity} {totalQuantity === 1 ? 'pizza' : 'pizzas'}</p>
          <p>{formatCurrency(totalPrice)}</p>
          <Link to="/cart" aria-label={'Open cart'}>Open cart &rarr;</Link>
        </Container>
      </div>
  );
}
