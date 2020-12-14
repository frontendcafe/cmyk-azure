import Session from '../models/Session';
import User from '../models/User';
import { getActualUser } from '../services/spotify/user';
import { deleteData, getData, saveData, SESSION } from '../utils/manageData';
import SpotifyToken from '../services/spotify/token';

const useSession = () => {
  const isLogged = (): boolean => {
    const session: Session | null = getSession();

    if (session) {
      const token = SpotifyToken.getActualToken();

      if (token === session?.token) {
        if (session.isValid) return true;
      }
      stopSession();
    }

    return false;
  };

  const getUser = async (): Promise<User | null> => getActualUser();

  const startSession = () => {
    const token = SpotifyToken.getActualToken();
    const session = new Session({ token });
    saveData(SESSION, session);
  };

  const getSession = (): Session | null => {
    const session = getData(SESSION);

    return session ? new Session(session) : null;
  };

  const getToken = () => {
    const session = getSession();
    return session?.token;
  };

  const stopSession = () => {
    deleteData(SESSION);
    SpotifyToken.deleteActualToken();
  };

  return { isLogged, getUser, startSession, stopSession, getToken };
};

export default useSession;
