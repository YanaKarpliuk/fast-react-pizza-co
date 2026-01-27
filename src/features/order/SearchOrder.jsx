import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchOrder() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if (!query) return
    navigate(`/order/${query}`)
    setQuery('')
  }

  return (
      <form onSubmit={handleSubmit}>
        <label htmlFor='order'>Search for an order #</label>
        <input
            id='order'
            placeholder="Search for an order #"
            value={query}
            onInput={(e) => setQuery(e.target.value)}
        />
      </form>
  );
}
