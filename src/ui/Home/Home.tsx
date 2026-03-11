import Container from '../Container/Container.tsx';
import styles from './Home.module.scss';
import CreateUser from '../../features/user/CreateUser.jsx';
import { useSelector } from 'react-redux';
import Button from '../Button/Button.jsx';

export default function Home() {
  const username: string = useSelector(state => state.user.username);

  return (
      <div className={styles.homeWrapper}>
        <Container>
          <h1 className={styles.title}>
            The best pizza.
            <br/>
            <span className={styles.highlighted}>Straight out of the oven, straight to you.</span>
          </h1>
          {!username
              ? <CreateUser/>
              : <Button
                  name={'Continue ordering'}
                  ariaLabel={'Continue ordering'}
                  path={'/menu'}
              />}
        </Container>
      </div>
  );
}
