import { Link } from 'react-router-dom';
import SearchOrder from '../../features/order/SearchOrder';
import styles from './Header.module.scss';
import Container from '../Container/Container';

export default function Header() {
  return (
      <header className={styles.header}>
        <Container grid={'two-col'}>
          <Link to={'/'}>Fast React Pizza Co.</Link>
          <SearchOrder/>
        </Container>
      </header>
  )
}