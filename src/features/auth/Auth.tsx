import { useAuth0 } from '@auth0/auth0-react';
import Button from '../../ui/Button/Button';

type Props = {
  secondary?: boolean
}

export default function Auth({ secondary }: Props) {
  const {
    isLoading, // Loading state, the SDK needs to reach Auth0 on load
    isAuthenticated,
    error,
    loginWithRedirect: login, // Starts the login flow
    logout: auth0Logout, // Starts the logout flow
  } = useAuth0();

  const signup = () => {
    login({ authorizationParams: { screen_hint: 'signup' } });
  };

  const logout = () => {
    auth0Logout({ logoutParams: { returnTo: window.location.origin } });
  };

  if (isLoading) return 'Loading...';

  return (
      <>
        {
          isAuthenticated ? (
              <Button name={'Log out'} handleClick={logout} type={secondary ? 'light' : 'primary'}/>
          ) : (
              <>
                {error && <p>Error: {error.message}</p>}
                <Button name={'Sign up'} handleClick={signup} type={secondary ? 'light' : 'primary'}/>
                <Button name={'Log in'} handleClick={login} type={secondary ? 'lightSecondary' : 'secondary'}/>
              </>
          )
        }
      </>
  );
}