import { Link } from 'react-router-dom';
import Container from '../../ui/Container/Container';
import CartItem from './CartItem.jsx';
import EmptyCart from './EmptyCart';
import styles from './Cart.module.scss';
import Button from '../../ui/Button/Button';
import { useSelector } from 'react-redux';

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

export default function Cart() {
  const cart = fakeCart;
  const username = useSelector(state => state.user.username)

  return (
      <Container narrow={true}>
        <Link className={styles.breadcrumb} to="/menu">&larr; Back to menu</Link>
        {cart.length > 0 ?
            (
                <div className={styles.cart}>
                  <h1>Your cart, {username}</h1>
                  <ul className={styles.list}>
                    {cart.map(item => <CartItem key={item.pizzaId} item={item}/>)}
                  </ul>
                  <div className={styles.actions}>
                    <Button link={true} name={'Order pizzas'} ariaLabel={'Order pizzas'} path={'/order/new'}/>
                    <Button name={'Clear cart'} ariaLabel={'Clear cart'} secondary={true}/>
                  </div>
                </div>
            ) :
            <EmptyCart/>
        }
      </Container>
  );
}
