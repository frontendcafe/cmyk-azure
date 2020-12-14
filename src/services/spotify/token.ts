import Cookies from 'js-cookie';

const getActualToken = (): string | undefined =>
  Cookies.get('spotifyAuthToken');

export default { getActualToken };
