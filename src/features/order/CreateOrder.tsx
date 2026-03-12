import { useActionData, useNavigation } from 'react-router-dom';
import Container from '../../ui/Container/Container.tsx';
import styles from './Order.module.scss';
import FormInput from '../../ui/Form/FormInput.tsx';
import FormRouter from '../../ui/Form/FormRouter.tsx';
import FormCheckbox from '../../ui/Form/FormCheckbox.tsx';
import FormAction from '../../ui/Form/FormAction.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { getTotalCartPrice } from '../cart/cartSlice.ts';
import { formatCurrency } from '../../utils/helpers.ts';
import { MouseEvent, useState } from 'react';
import Button from '../../ui/Button/Button.tsx';
import { fetchAddress } from '../user/userSlice.ts';

export default function CreateOrder() {
  const [withPriority, setWithPriority] = useState<boolean>(false);
  const { username, status: addressStatus, position, address, error: addressError } = useSelector(state => state.user);
  const isLoadingAddress = addressStatus === 'loading';

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const cart = useSelector(state => state.cart.cart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? Math.round(totalCartPrice * 0.2) : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  const formErrors = useActionData();
  const dispatch = useDispatch();

  function handleFetchAddress(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    // TODO
    dispatch(fetchAddress());
  }

  return (
      <Container narrow={true}>
        <div className={styles.orderForm}>
          <h1>Ready to order? Let's go!</h1>
          <FormRouter>
            <FormInput
                name={'customer'}
                id={'customer'}
                label={'First Name'}
                defaultValue={username}
            />
            <FormInput
                name={'phone'}
                id={'phone'}
                type={'tel'}
                label={'Phone number'}
                errorsData={formErrors}
                errorMsg={formErrors?.phone}
            />
            <div className={styles.advancedInputWrapper}>
              <FormInput
                  name={'address'}
                  id={'address'}
                  label={'Address'}
                  disabled={isLoadingAddress}
                  defaultValue={address}
                  errorsData={addressStatus === 'error'}
                  errorMsg={addressError}
              />
              {!position?.latitude && !position?.longitude &&
                  <Button
                      name={'Get position'}
                      type={'small'}
                      handleClick={handleFetchAddress}
                      disabled={isLoadingAddress}
                  />
              }
            </div>
            <FormCheckbox
                name={'priority'}
                id={'priority'}
                label={'Want to give your order priority?'}
                required={false}
                value={withPriority}
                handleChange={(e) => setWithPriority(e.target.checked)}
            />
            <FormAction
                btnName={`Order now for ${formatCurrency(totalPrice)}`}
                btnNameLoading={'Placing order...'}
                isSubmitting={isSubmitting}
                isLoading={isLoadingAddress}
                routerActionData={[
                  { name: 'cart',
                    value: JSON.stringify(cart)
                  },
                  {
                    name: 'position',
                    value: position?.latitude && position?.longitude ? `${position.latitude},${position.longitude}` : ''
                  }
                ]}
            />
          </FormRouter>
        </div>
      </Container>
  );
}
