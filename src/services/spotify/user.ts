import User from '../../models/User';
import makeRequestAuth from './makeRequestAuth';

/**
 * Obtiene el usuario que se encuentra logueado actualmente
 */
const getActualUser = async (): Promise<User | null> => {
  const response = await makeRequestAuth({ url: 'me' });

  return response ? new User(response) : null;
};

/**
 * Obtiene la informacion de un usuario mediante su id.
 * @param id El id del usuario a obtener
 */
const getUserById = async (id: string): Promise<User | null> => {
  const response = await makeRequestAuth({ url: `users/${id}` });

  return response ? new User(response) : null;
};

export { getActualUser, getUserById };
