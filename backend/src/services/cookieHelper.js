const jwt_decode = require("jwt-decode");

const getTokenFromCookie = () => {
  const token = getCookie("token");
  return token ? JSON.parse(token) : null;
};

const isUserAuthenticated = () => {
  const token = getTokenFromCookie();
  return !!token;
};

const isUserAdmin = () => {
  const token = getTokenFromCookie();
  return token && jwt_decode(token).role === "ADMIN_ROLE";
};

module.exports = {
  getTokenFromCookie,
  isUserAuthenticated,
  isUserAdmin,
};