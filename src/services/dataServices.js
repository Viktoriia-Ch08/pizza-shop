import { limitToFirst, onValue, query, ref, set } from "firebase/database";
import { database } from "../../firebase";

export const LIMIT_NUMBER = 3;
let nextLimit = LIMIT_NUMBER + 3;

export function fetchData() {
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

export function fetchLimitedPizzasData() {
  return new Promise((resolve, reject) => {
    const viewedCards = query(
      ref(database, "pizzas"),
      limitToFirst(LIMIT_NUMBER)
    );
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

export function fetchNextPizzasCards() {
  return new Promise((resolve, reject) => {
    const viewedCards = query(ref(database, "pizzas"), limitToFirst(nextLimit));

    nextLimit += 3;

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
  preOrders = [],
  favorite = [],
}) {
  try {
    return set(ref(database, "users/" + uid), {
      uid,
      displayName,
      email,
      phoneNumber,
      preOrders,
      favorite,
    });
  } catch (error) {
    console.log(error.message);
  }
}

export function writeOrdersData({
  id,
  phoneNumber = "",
  isDone = false,
  data = "",
  order = [],
}) {
  try {
    return set(ref(database, "orders/" + id), {
      id,
      phoneNumber,
      isDone,
      data,
      order,
    });
  } catch (error) {
    console.log(error.message);
  }
}
