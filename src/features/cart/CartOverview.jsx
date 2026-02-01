import { Link } from 'react-router-dom';
import styles from './Cart.module.scss';
import Container from '../../ui/Container/Container';

export default function CartOverview() {
  return (
    <div className={styles.cartOverview}>
      <Container>
        <p>23 pizzas</p>
        <p>$23.45</p>
        <Link to="/cart">Open cart &rarr;</Link>
      </Container>
    </div>
  );
}
