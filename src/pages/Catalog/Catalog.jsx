import { useEffect, useState } from 'react';
import { readData } from '../../../services';

const Catalog = () => {
  const [databaseInfo, setDatabaseInfo] = useState(null);
  console.log(databaseInfo);
  useEffect(() => {
    const fetchInfoFromDatabase = async () => {
      // if (!auth.currentUser) return;
      setDatabaseInfo(await readData());
    };
    fetchInfoFromDatabase();
  }, []);

  return (
    <>
      <button>Catalog</button>
      {databaseInfo !== null && (
        <ul>
          {databaseInfo.pizzas.map(
            ({ name, description, type, price, imageUrl, toppings }) => {
              return (
                <li key={`${name}${price}${type}`}>
                  <img src={imageUrl} alt={name} width={'150px'} />
                  <p>{name}</p>
                  <p>{description}</p>
                  <p>{price}$</p>
                  <div>
                    <ul>
                      {toppings.map(({ name, portion, price, imageUrl }) => {
                        return (
                          <li key={`${name}${portion}${price}`}>
                            <img src={imageUrl} alt={name} width={'50px'} />
                            <p>{name}</p>
                            <p>{portion}</p>
                            <p>{price}$</p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              );
            }
          )}
        </ul>
      )}
    </>
  );
};

export default Catalog;
