// AuthProvider.js
import React, {
  createContext,
  useState,
  useContext,
  useMemo,
  useEffect,
} from "react";
import PropTypes from "prop-types";
import jwt_decode from "jwt-decode";
import { setCookie, getCookie } from "../services/cookieHelper";

export const authContext = createContext();

export default function AuthProvider({ children }) {
  const storedToken = getCookie("token");
  const initialToken = storedToken ? JSON.parse(storedToken) : "";

  const [token, setToken] = useState(initialToken);

  useEffect(() => {
    // Vérifier le token et le mettre à jour si nécessaire
    const verifyAndRefreshToken = async () => {
      if (token) {
        const decodedToken = jwt_decode(token);
        const currentTime = Date.now() / 1000; // Temps actuel en secondes
        if (decodedToken.exp < currentTime) {
          // Le token a expiré, vous pouvez rafraîchir le token ici si nécessaire
          // Exemple : effectuer une requête API pour obtenir un nouveau token rafraîchi
          // Puis, mettez à jour le token dans les cookies et l'état local
          const refreshedToken = await fetchRefreshedToken(); // Fonction pour rafraîchir le token
          if (refreshedToken) {
            updateTokenInCookie(refreshedToken);
          } else {
            // Le rafraîchissement du token a échoué, déconnectez l'utilisateur
            updateTokenInCookie(""); // Supprimer le token expiré
          }
        }
      }
    };

    verifyAndRefreshToken();
  }, [token]);

  const updateTokenInCookie = (newToken) => {
    setToken(newToken);
    setCookie("token", JSON.stringify(newToken), 7); // Stockez le token JWT dans les cookies pour 7 jours (par exemple)
  };

  const isUserAdmin = () => {
    if (!token) return false;
    const decodedToken = jwt_decode(token);
    return decodedToken.role === "ADMIN_ROLE";
  };

  const contextValue = useMemo(
    () => ({
      token,
      isUserAdmin,
      setToken: updateTokenInCookie,
    }),
    [token]
  );

  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  );
}

export const useAuth = () => useContext(authContext);

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
