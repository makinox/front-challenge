import { useMemo } from 'react';
import { Link } from 'react-router-dom';

export default function Details() {
  const params = useMemo(() => {
    const url = new URL(window.location.href);
    return {
      name: url.searchParams.get('name'),
      price: url.searchParams.get('price'),
    };
  }, []);

  return (
    <section>
      <div>
        <h2>Details</h2>
      </div>
      <div>
        <article>
          <span>Crypto: {params.name}</span>
          <span>Price: {params.price}</span>
        </article>
      </div>
      <div>
        <Link to="/">To home</Link>
      </div>
    </section>
  );
}
