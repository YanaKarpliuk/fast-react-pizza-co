import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './ui/Home.jsx';
import Error from './ui/Error/Error.jsx';
import Menu, { loader as menuLoader } from './features/menu/Menu.jsx';
import Cart from './features/cart/Cart.jsx';
import CreateOrder from './features/order/CreateOrder.jsx';
import Order, { loader as orderLoader } from './features/order/Order.jsx';
import AppLayout from './ui/AppLayout/AppLayout';

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
        element: <CreateOrder/>
      },
      {
        path: '/order/:orderId',
        element: <Order/>,
        loader: orderLoader,
        errorElement: <Error/>,
      }
    ]
  }
])

export default function App() {
  return (
      <RouterProvider router={router}/>
  )
}
