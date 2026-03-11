import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Order.module.scss';

export default function SearchOrder() {
  const [query, setQuery] = useState<string>('');
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }

  return (
      <form onSubmit={handleSubmit} className={styles.searchOrder}>
        <label className={'sr-only'} htmlFor="order">Search for an order number</label>
        <input
            id="order"
            placeholder="Search for an order #"
            value={query}
            onInput={(e) => setQuery(e.target.value)}
            className={styles.input}
        />
      </form>
  );
}
