import Container from '../Container/Container';
import FormEl from '../Form/Form';
import FormInput from '../Form/FormInput';
import styles from './Home.module.scss'

export default function Home() {
  return (
      <Container>
        <h1 className={styles.title}>
          The best pizza.
          <br/>
          <span className={styles.highlighted}>Straight out of the oven, straight to you.</span>
        </h1>
        <div className={styles.text}>
          Welcome! Please start by telling us your name:
        </div>
        <div className={styles.formWrapper}>
          <FormEl>
            <FormInput
                id={'name'}
                name={'name'}
                label={'Your full name'}
                required={false}
                labelHidden={true}
                placeholder={'Your full name'}
            />
          </FormEl>
        </div>
      </Container>
  );
}
