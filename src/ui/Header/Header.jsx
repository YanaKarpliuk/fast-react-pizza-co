import { Link } from 'react-router-dom';
import SearchOrder from '../../features/order/SearchOrder';
import styles from './Header.module.scss';
import Container from '../Container/Container';
import { useSelector } from 'react-redux';

export default function Header() {
  const name = useSelector(state => state.user.username);
  return (
      <header className={styles.header}>
        <Container grid={'two-col'}>
          <Link to={'/'}>Fast React Pizza Co.</Link>
          <SearchOrder/>
          {name && (
              <div className={styles.userName}>
                {name}
              </div>
          )}
        </Container>
      </header>
  );
}
