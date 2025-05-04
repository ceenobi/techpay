import { useState } from "react";
import { AuthContext } from ".";
import { useLocalStorage } from "../hooks";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [accessToken, setAccessToken] = useLocalStorage("techPayUserToken", "");
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setAccessToken("");
    setUser(null)
  };
  
  return (
    <AuthContext.Provider
      value={{ accessToken, setAccessToken, handleLogout, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
