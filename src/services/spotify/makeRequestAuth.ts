import makeRequest from '../../utils/makeRequest';
import { API_URL } from './config';
import SpotifyToken from './token';

interface Props {
  url: string;
  config?: any;
}

const makeRequestAuth = async ({ url, config }: Props) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${SpotifyToken.getActualToken()}`,
  };
  url = `${API_URL}/${url}`;

  return makeRequest({
    url,
    method: config?.method,
    body: config?.body,
    headers,
  });
};

export default makeRequestAuth;
