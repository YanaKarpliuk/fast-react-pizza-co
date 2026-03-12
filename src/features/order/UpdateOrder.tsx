import Button from '../../ui/Button/Button.tsx';
import { useFetcher } from 'react-router-dom';

export default function UpdateOrder() {
  const fetcher = useFetcher();
  return (
      <fetcher.Form method="PATCH">
        <Button name={'Make priority'}/>
      </fetcher.Form>
  );
}
