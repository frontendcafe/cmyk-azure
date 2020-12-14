import Cookies from 'js-cookie';

const getActualToken = (): string | undefined =>
  Cookies.get('spotifyAuthToken');

const deleteActualToken = () => Cookies.remove('spotifyAuthToken');

export default { getActualToken, deleteActualToken };
