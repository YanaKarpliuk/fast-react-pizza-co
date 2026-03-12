import { useNavigate, useRouteError } from 'react-router-dom';
import Container from '../Container/Container';

export default function Error() {
  const navigate = useNavigate();
  const error = useRouteError()

  return (
    <Container narrow={true}>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </Container>
  );
}
