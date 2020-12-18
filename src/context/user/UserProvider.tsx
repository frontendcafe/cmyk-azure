import { ReactNode, useEffect, useState } from 'react';
import useSession from '../../hooks/useSession';
import User from '../../models/User';
import UserContext from './UserContext';

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const {
    isLogged,
    startSession,
    getUser,
    suscribe,
    START_SESSION,
    STOP_SESSION,
  } = useSession();

  useEffect(() => {
    suscribe(receiveChanges);
    loadUser();
  }, []);

  const loadUser = () => {
    getUser().then((u: User | null) => setUser(u));
  };

  const receiveChanges = (
    action: typeof START_SESSION | typeof STOP_SESSION
  ) => {
    switch (action) {
      case START_SESSION: {
        loadUser();
        break;
      }
      default:
        setUser(null);
    }
  };

  return (
    <UserContext.Provider value={{ user, isLogged, startSession }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
