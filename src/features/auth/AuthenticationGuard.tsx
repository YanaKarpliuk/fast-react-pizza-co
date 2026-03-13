import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loader from '../../ui/Loader/Loader';
import { ComponentType } from 'react';

export default function AuthenticationGuard(component: ComponentType) {
  return withAuthenticationRequired(component, {
    onRedirecting: () => <Loader />,
  });
}
