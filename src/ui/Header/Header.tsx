import { Link } from 'react-router-dom';
import SearchOrder from '../../features/order/SearchOrder.tsx';
import styles from './Header.module.scss';
import Container from '../Container/Container.tsx';
import { useSelector } from 'react-redux';
import Auth from '../../features/auth/Auth';

export default function Header() {
  const name = useSelector(state => state.user.username);

  return (
      <header className={styles.header}>
        <Container>
          <Link to={'/'} aria-label={'Fast React Pizza Co.'}>Fast React Pizza Co.</Link>
          <SearchOrder/>
          {name && <div className={styles.userName}>{name}</div>}
          <Auth secondary={true}/>
        </Container>
      </header>
  );
}
