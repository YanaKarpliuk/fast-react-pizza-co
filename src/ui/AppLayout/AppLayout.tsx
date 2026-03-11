import Header from '../Header/Header.tsx';
import CartOverview from '../../features/cart/CartOverview.tsx';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from '../Loader/Loader.tsx';

export default function AppLayout() {
  const navigation = useNavigation()
  const isLoading: boolean = navigation.state === 'loading'

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
