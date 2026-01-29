import AuthContent from "../components/Auth/AuthContent";
import { Alert } from "react-native";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { createUser } from "../util/auth";
import { useContext, useState } from "react";
import { AuthContext } from "../store/auth-context";
function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);
  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert("Signup failed", "Please Eneter Valid Credentials");
    }
    setIsAuthenticating(false);
  }
  if (isAuthenticating) {
    return <LoadingOverlay message="Creating User ...." />;
  }
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
