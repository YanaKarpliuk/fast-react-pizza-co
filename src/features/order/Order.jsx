import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers.ts';
import { getOrder } from '../../services/apiRestaurant.js';
import { useFetcher, useLoaderData } from 'react-router-dom';
import Container from '../../ui/Container/Container.tsx';
import styles from './Order.module.scss';
import OrderItem from './OrderItem';
import { useEffect } from 'react';
import UpdateOrder from './UpdateOrder';

export default function Order() {
  const order = useLoaderData();
  const fetcher = useFetcher();
  // Everyone can search for all orders,
  // so for privacy reasons we're gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  useEffect(() => {
    // Load data from this route on page mount.
    if (!fetcher.data && fetcher.state === 'idle') fetcher.load('/menu');
  }, [fetcher]);

  return (
      <Container narrow={true}>
        <div className={styles.orderOverview}>
          <div className={styles.orderTop}>
            <h1>Order #{id} status</h1>
            <div className={styles.orderLabels}>
              {priority && <div className={`${styles.orderLabel} ${styles.priority}`}>Priority</div>}
              <div className={styles.orderLabel}>{status} order</div>
            </div>
          </div>
          <div className={styles.orderDeliveryStatus}>
            <p className={styles.orderStatus}>
              {deliveryIn >= 0
                  ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
                  : 'Order should have arrived'}
            </p>
            <p className={styles.orderDelivery}>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
          </div>
          <ul className={styles.list}>
            {cart.map(item => (
                <OrderItem
                    key={item.pizzaId}
                    item={item}
                    ingredients={fetcher?.data?.find(el => el.id === item.pizzaId)?.ingredients ?? []}
                    isLoadingIngredients={fetcher?.state === 'loading'}
                />
            ))}
          </ul>
          <div className={styles.pricing}>
            <p>Price pizza: {formatCurrency(orderPrice)}</p>
            {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
            <p className={styles.summary}>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
          </div>
          {!priority && <UpdateOrder order={order}/>}
        </div>
      </Container>
  );
}

// Get order id from url with { params }.
// useParams doesn't work in simple functions.
export async function loader({ params }) {
  return await getOrder(params.orderId);
}
