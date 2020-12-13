import fetch from 'node-fetch';
const GET = 'GET';
const POST = 'POST';
const PUT = 'PUT';
const DELETE = 'DELETE';
const methods = [GET, POST, PUT, DELETE];

interface Props {
  url: string;
  method: typeof GET | typeof POST | typeof PUT | typeof DELETE;
  body?: any;
  headers: any;
}

const makeRequest = async ({ url, method = GET, body, headers }: Props) => {
  const config: Props = {
    url: '',
    method: method,
    headers,
  };
  if (method !== 'GET') {
    config.body = JSON.stringify(body);
  }
  const response = await fetch(url, config);

  if (response.status === 200) {
    const jsonResponse = await response.json();
    return jsonResponse;
  }

  return null;
};

export { methods };

export default makeRequest;
