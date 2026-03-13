import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './ui/Home/Home.tsx';
import Error from './ui/Error/Error.tsx';
import Menu from './features/menu/Menu.tsx';
import { menuLoader, createOrderAction, orderLoader, updateOrderAction } from './utils/loaders';
import Cart from './features/cart/Cart.tsx';
import CreateOrder from './features/order/CreateOrder.tsx';
import Order from './features/order/Order.tsx';
import AppLayout from './ui/AppLayout/AppLayout.tsx';
import AuthenticationGuard from './features/auth/AuthenticationGuard';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { updateUsername } from './features/user/userSlice';
import { useAuth0 } from '@auth0/auth0-react';

const ProtectedMenu = AuthenticationGuard(Menu);
const ProtectedCart = AuthenticationGuard(Cart);
const ProtectedCreateOrder = AuthenticationGuard(CreateOrder);
const ProtectedOrder = AuthenticationGuard(Order);

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/menu',
        element: <ProtectedMenu/>,
        // Provide data necessary for each page.
        loader: menuLoader,
        // Errors will render instead of components.
        errorElement: <Error/>,
      },
      {
        path: '/cart',
        element: <ProtectedCart/>
      },
      {
        path: '/order/new',
        element: <ProtectedCreateOrder/>,
        // Called when there's a form submission
        action: createOrderAction
      },
      {
        path: '/order/:orderId',
        element: <ProtectedOrder/>,
        loader: orderLoader,
        errorElement: <Error/>,
        action: updateOrderAction
      }
    ]
  }
]);

export default function App() {
  const { isAuthenticated, user } = useAuth0();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(updateUsername(user.username));
    }
  }, [isAuthenticated, dispatch, user]);

  return (
      <RouterProvider router={router}/>
  );
}
