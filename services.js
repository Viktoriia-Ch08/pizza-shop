import { onValue, ref } from 'firebase/database';
import { database } from './firebase';

export function readData() {
  return new Promise((resolve, reject) => {
    const dataRef = ref(database, '/');
    onValue(
      dataRef,
      snapshot => {
        const data = snapshot.val();
        resolve(data);
      },
      error => {
        console.log(error.message);
        reject(error.message);
      }
    );
  });
}
