import { FormEvent, useState } from 'react';
import styles from './User.module.scss';
import FormSimple from '../../ui/Form/FormSimple.tsx';
import FormInput from '../../ui/Form/FormInput.tsx';
import FormAction from '../../ui/Form/FormAction.tsx';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUsername } from './userSlice.ts';

export default function CreateUser() {
  const [username, setUsername] = useState<string>('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function submitUsername(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!username) return;
    // TODO
    dispatch(updateUsername(username));
    setUsername('');
    navigate('/menu');
  }

  return (
      <div className={styles.userWrapper}>
        <div className={styles.text}>
          Welcome! Please start by telling us your name:
        </div>
        <div className={styles.formWrapper}>
          <FormSimple handleSubmit={submitUsername}>
            <FormInput
                id={'name'}
                name={'name'}
                label={'Your full name'}
                required={false}
                labelHidden={true}
                placeholder={'Your full name'}
                value={username}
                handleChange={(e) => setUsername(e.target.value)}
            />
            {username && <FormAction btnName={'Start ordering'}/>}
          </FormSimple>
        </div>
      </div>
  );
}
