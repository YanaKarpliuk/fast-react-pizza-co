import { Link } from 'react-router-dom';
import Container from '../../ui/Container/Container.tsx';
import CartItem from './CartItem.tsx';
import EmptyCart from './EmptyCart.tsx';
import styles from './Cart.module.scss';
import Button from '../../ui/Button/Button.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from './cartSlice.ts';

export default function Cart() {
  const cart = useSelector(state => state.cart.cart);
  const username = useSelector(state => state.user.username);
  const dispatch = useDispatch();

  return (
      <Container narrow={true}>
        <Link className={styles.breadcrumb} aria-label={'Back to menu'} to="/menu">&larr; Back to menu</Link>
        {cart.length > 0 ?
            (
                <div className={styles.cart}>
                  <h1>Your cart, {username}</h1>
                  <ul className={styles.list}>
                    {cart.map(item => <CartItem key={item.pizzaId} item={item}/>)}
                  </ul>
                  <div className={styles.actions}>
                    <Button
                        name={'Order pizzas'}
                        path={'/order/new'}
                    />
                    <Button
                        name={'Clear cart'}
                        type={'secondary'}
                        // TODO
                        handleClick={() => dispatch(clearCart())}
                    />
                  </div>
                </div>
            ) :
            <EmptyCart/>
        }
      </Container>
  );
}
