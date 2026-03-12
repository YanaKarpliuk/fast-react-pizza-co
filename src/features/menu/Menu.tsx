import { useLoaderData } from 'react-router-dom';
import MenuItem from './MenuItem.tsx';
import styles from './Menu.module.scss';
import Container from '../../ui/Container/Container.tsx';

export default function Menu() {
  // Fetch data when page starts rendering.
  const menu = useLoaderData()

  return (
      <Container narrow={true}>
        <ul className={styles.menuList}>
          {menu.map(item => <MenuItem key={item.id} pizza={item}/>)}
        </ul>
      </Container>
  )
}
