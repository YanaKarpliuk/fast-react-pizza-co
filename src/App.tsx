import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './ui/Home/Home.tsx';
import Error from './ui/Error/Error.tsx';
import Menu from './features/menu/Menu.tsx';
import { menuLoader, createOrderAction, orderLoader, updateOrderAction } from './utils/loaders';
import Cart from './features/cart/Cart.tsx';
import CreateOrder from './features/order/CreateOrder.tsx';
import Order from './features/order/Order.tsx';
import AppLayout from './ui/AppLayout/AppLayout.tsx';

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
        element: <Menu/>,
        // Provide data necessary for each page.
        loader: menuLoader,
        // Errors will render instead of components.
        errorElement: <Error/>,
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: '/order/new',
        element: <CreateOrder/>,
        // Called when there's a form submission
        action: createOrderAction
      },
      {
        path: '/order/:orderId',
        element: <Order/>,
        loader: orderLoader,
        errorElement: <Error/>,
        action: updateOrderAction
      }
    ]
  }
]);

export default function App() {
  return (
      <RouterProvider router={router}/>
  );
}
