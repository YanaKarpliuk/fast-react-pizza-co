import Header from '../Header/Header';
import CartOverview from '../../features/cart/CartOverview.jsx';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from '../Loader/Loader';

export default function AppLayout() {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'

  return (
      <>
        {isLoading && <Loader/>}
        <Header/>
        <main>
          <Outlet/>
        </main>
        <CartOverview/>
      </>
  )
}
