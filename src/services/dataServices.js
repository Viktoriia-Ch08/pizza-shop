import { limitToFirst, onValue, query, ref, set } from "firebase/database";
import { database } from "../../firebase";

export const LIMIT_NUMBER = 3;

export function readPizzasData() {
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

export function fetchUserData(uid) {
  const dataRef = ref(database, "users/" + uid);
  return new Promise((resolve, reject) => {
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
  uid,
  displayName = "none",
  email = "none",
  phoneNumber = "",
  orders = [],
  favorites = [],
}) {
  try {
    return set(ref(database, "users/" + uid), {
      uid,
      displayName,
      email,
      phoneNumber,
      orders,
      favorites,
    });
  } catch (error) {
    console.log(error.message);
  }
}
