import styles from './User.module.scss';
import Auth from '../auth/Auth';

export default function CreateUser() {
  return (
      <div className={styles.userWrapper}>
        <div className={styles.text}>
          Welcome! <br/> Please sign up or log in to start ordering our pizzas:
        </div>
        <div className={styles.btnWrapper}>
          <Auth/>
        </div>
      </div>
  );
}
