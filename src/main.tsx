import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './scss/general.scss';
import { Provider } from 'react-redux';
import store from './store.ts';
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Auth0Provider
          domain="dev-wrvhikadqj0j0vvc.us.auth0.com"
          clientId="ZJc7Tdddrye3aQJUfSSU0RLrqKxgPzU0"
          authorizationParams={{ redirect_uri: window.location.origin }}
      >
        <Provider store={store}>
          <App/>
        </Provider>
      </Auth0Provider>
    </StrictMode>
);
