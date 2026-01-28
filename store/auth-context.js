import { createContext, useState } from "react";
export const AuthContext = createContext({
  token: null,
  userId: null,
  login: (token, userId) => {},
  logout: () => {},
});
function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  function authenticate() {
    setAuthToken(token);
  }
  function Logout() {
    setAuthToken(null);
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    logout: Logout,
    authenticate: authenticate,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export default AuthContextProvider;
