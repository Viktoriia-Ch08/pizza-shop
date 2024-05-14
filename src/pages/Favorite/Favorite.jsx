import { useDispatch, useSelector } from "react-redux";
import { selectFavorite } from "../../redux/user/selectors";
import { deleteFromFavorite } from "../../redux/user/userSlice";

const Favorite = () => {
  const favorite = useSelector(selectFavorite);
  const dispatch = useDispatch();

  const deleteFavorite = (item) => {
    dispatch(deleteFromFavorite(item));
  };

  return (
    <>
      {favorite ? (
        <div>
          <ul>
            {favorite.map(
              ({ name, description, type, price, imageUrl, id }) => {
                return (
                  <li key={`${name}${price}${type}`}>
                    <button
                      onClick={() => {
                        deleteFavorite({
                          name,
                          description,
                          type,
                          price,
                          imageUrl,
                          id,
                        });
                      }}
                    >
                      delete
                    </button>
                    <img src={imageUrl} alt={name} />
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <p>{price}$</p>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      ) : (
        <p>You haven't added favorite pizza yet</p>
      )}
    </>
  );
};

export default Favorite;
