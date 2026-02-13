import { useState } from 'react';
import styles from './User.module.scss';
import FormSimple from '../../ui/Form/FormSimple.jsx';
import FormInput from '../../ui/Form/FormInput.jsx';
import FormAction from '../../ui/Form/FormAction.jsx';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUsername } from './userSlice.js';

export default function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function submitUsername(e) {
    e.preventDefault();
    if (!username) return;
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
            {username &&
                <FormAction
                    btnName={'Start ordering'}
                    ariaLabel={'Start ordering'}
                />
            }
          </FormSimple>
        </div>
      </div>
  );
}
