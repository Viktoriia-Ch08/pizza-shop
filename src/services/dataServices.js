import { limitToFirst, onValue, query, ref } from "firebase/database";
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
