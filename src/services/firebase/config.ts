import firebase from 'firebase';
import 'firebase/firestore';

interface Instance {
  db: any;
}
let instance: Instance | null = null;

const getInstance = () => {
  if (!instance) {
    firebase.initializeApp({
      apiKey: 'AIzaSyA-1uu9VnBdsC2N2WFUTWkNPEpYHCJArWA',
      authDomain: 'cmyk-azure.firebaseapp.com',
      projectId: 'cmyk-azure',
      storageBucket: 'cmyk-azure.appspot.com',
      messagingSenderId: '995695504161',
      appId: '1:995695504161:web:4a3cd97b9788455334ec60',
    });

    instance = { db: firebase.firestore() };
  }

  return instance;
};

export { getInstance };
