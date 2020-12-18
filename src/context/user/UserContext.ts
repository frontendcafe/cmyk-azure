import { createContext } from 'react';
import User from '../../models/User';

interface Type {
  user: User | null;
  isLogged?: Function;
  startSession?: Function;
}

const UserContext = createContext<Type>({ user: null });

export default UserContext;
