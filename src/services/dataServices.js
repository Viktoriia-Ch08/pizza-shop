import { limitToFirst, onValue, query, ref, set } from "firebase/database";
import { database } from "../../firebase";

export const LIMIT_NUMBER = 3;

export function readData() {
  return new Promise((resolve, reject) => {
    const dataRef = ref(database);
    onValue(
      dataRef,
      (snapshot) => {
        const data = snapshot.val();
        resolve(data);
      },
      (error) => {
        console.log(error.message);
        reject(error.message);
      }
    );
  });
}

export function getData(limit) {
  return new Promise((resolve, reject) => {
    const viewedCards = query(ref(database, "pizzas"), limitToFirst(limit));
    onValue(
      viewedCards,
      (snapshot) => {
        const data = snapshot.val();
        resolve(data);
      },
      (error) => {
        console.log(error.message);
        reject(error.message);
      }
    );
  });
}

export function writeUserData({
  userId,
  name = "none",
  email = "none",
  number = "",
  orders: { id, order },
  favorites = [],
}) {
  try {
    return set(ref(database, "users/" + userId), {
      userId,
      name,
      email,
      number,
      orders: { id, order },
      favorites,
    });
  } catch (error) {
    console.log(error.message);
  }
}
