import { useEffect, useMemo, useState } from 'react';

import { defaultUrl } from '../../assets/constants';
import { FormattedType } from '../../assets/types';
import './Home.css';
// import styles from './Home.module.css';

function App() {
  const [cryptos, setCryptos] = useState<any>();

  useEffect(() => {
    async function getData() {
      try {
        const result = await fetch(defaultUrl);
        const data = await result.json();
        const rawData = data.RAW;
        setCryptos(rawData);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);

  const formattedData: FormattedType = useMemo(() => {
    const parsedData: any[] = [];
    if (typeof cryptos === 'undefined') {
      return [];
    }
    Object.keys(cryptos).forEach((crypto) => {
      parsedData.push({
        key: crypto,
        price: cryptos[crypto]['USD']['PRICE'],
        market_cap: cryptos[crypto]['USD'].MKTCAP,
        circulatingSupply: cryptos[crypto]['USD'].SUPPLY,
        name: cryptos[crypto]['USD']['FROMSYMBOL'],
      });
    });
    return parsedData;
  }, [cryptos]);

  function handleDetails(data: FormattedType[0]) {
    window.location.href = `/details?name=${data.name}&price=${data.price}`;
  }

  return (
    <section className="homeSection">
      <article>
        <label>Filter By</label>
        <select>
          <option>Name</option>
          <option>Price</option>
          <option>Market Cap</option>
          <option>Circulating supply</option>
        </select>
      </article>
      <article>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Market Cap</th>
              <th>Circulating supply</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {formattedData.map((data) => {
              return (
                <tr key={data.key}>
                  <td>Name: {data.name}</td>
                  <td>Price: {data.price}</td>
                  <td>Market Cap: {data.market_cap}</td>
                  <td>Circulating supply: {data.circulatingSupply}</td>
                  <td>
                    <div>
                      <button onClick={() => handleDetails(data)}>Details</button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </article>
    </section>
  );
}

export default App;
