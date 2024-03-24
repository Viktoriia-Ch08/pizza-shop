import { useEffect, useState } from 'react';
import { readData } from '../../../services';
import {
  Card,
  CardSet,
  InfoWrap,
  PizzaImage,
  TextThumb,
  // ToppingImage,
} from './Catalog.styled';

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
        <CardSet>
          {databaseInfo.pizzas.map(
            ({ name, description, type, price, imageUrl, id }) => {
              return (
                <Card key={`${name}${price}${type}`}>
                  <InfoWrap>
                    <PizzaImage src={imageUrl} alt={name} />
                    <TextThumb>
                      <p>{name}</p>
                      <p>{description}</p>
                      <p>{price}$</p>
                    </TextThumb>
                  </InfoWrap>
                  <button type="button" onClick={() => console.log(id)}>
                    Order
                  </button>
                  {/* <div>
                    <ul>
                      {toppings.map(({ name, portion, price, imageUrl }) => {
                        return (
                          <li key={`${name}${portion}${price}`}>
                            <ToppingImage src={imageUrl} alt={name} />
                            <p>{name}</p>
                            <p>{portion}</p>
                            <p>{price}$</p>
                          </li>
                        );
                      })}
                    </ul>
                  </div> */}
                </Card>
              );
            }
          )}
        </CardSet>
      )}
    </>
  );
};

export default Catalog;
