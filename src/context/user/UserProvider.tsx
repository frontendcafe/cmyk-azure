import { ReactNode, useEffect, useState } from "react"
import useSession from "../../hooks/useSession";
import User from "../../models/User"
import UserContext from "./UserContext"

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const { getUser, suscribe, START_SESSION, STOP_SESSION } = useSession();

  useEffect(() => {
    suscribe(receiveChanges)
  }, []);

  const receiveChanges = (action: typeof START_SESSION | typeof STOP_SESSION) => {
    switch (action) {
      case START_SESSION: {
        getUser().then((u: User | null) => setUser(u));
        break;
      }
      default: setUser(null);
    }
  }


  return <UserContext.Provider value={{ user }}>
    {children}
  </UserContext.Provider>
}