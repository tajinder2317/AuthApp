import AuthContent from "../components/Auth/AuthContent";
import { useState } from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";
import { login } from "../util/auth";
import { useContext } from "react";
import { AuthContext } from "../store/auth-context";
function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);
  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert("Login failed", "Please Eneter Valid Credentials");
      setIsAuthenticating(false);
    }
  }
  if (isAuthenticating) {
    return <LoadingOverlay message="Loging User ...." />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}
export default LoginScreen;
