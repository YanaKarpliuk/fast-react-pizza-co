import Container from '../Container/Container.tsx';
import styles from './Home.module.scss';
import CreateUser from '../../features/user/CreateUser.tsx';
import Button from '../Button/Button.tsx';
import { useAuth0 } from '@auth0/auth0-react';

export default function Home() {
  const { isAuthenticated } = useAuth0();

  return (
      <div className={styles.homeWrapper}>
        <Container>
          <h1 className={styles.title}>
            The best pizza.
            <br/>
            <span className={styles.highlighted}>Straight out of the oven, straight to you.</span>
          </h1>
          {!isAuthenticated
              ? <CreateUser/>
              : <Button
                  name={'Continue ordering'}
                  path={'/menu'}
              />}
        </Container>
      </div>
  );
}
