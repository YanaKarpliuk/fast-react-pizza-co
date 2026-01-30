import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant.js';
import MenuItem from './MenuItem.jsx';
import styles from './Menu.module.scss';
import Container from '../../ui/Container/Container';

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

export async function loader() {
  return await getMenu()
}
