import { encode, decode } from 'js-base64';

export const SESSION = 'SESSION';

const saveData = (key: string, value: any) => {
  if (typeof localStorage !== 'undefined') {
    const data = encode(JSON.stringify(value));
    localStorage.setItem(key, data);
  }
};

const getData = (key: string) => {
  if (typeof localStorage !== 'undefined') {
    let data = localStorage.getItem(key);

    if (data) {
      data = decode(data);
      return JSON.parse(data);
    }
  }
  return null;
};

const deleteData = (key: string) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem(key);
  }
};

export { getData, saveData, deleteData };
