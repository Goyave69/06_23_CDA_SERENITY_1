export const setCookie = (name, value, days) => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);
  const cookieValue =
    encodeURIComponent(value) +
    (days ? `; expires=${expirationDate.toUTCString()}` : "");
  document.cookie = `${name}=${cookieValue}; path=/`;
};

// export const getCookie = (name) => {
//   const cookieName = `${name}=`;
//   const cookies = document.cookie.split(";");
//   for (let i = 0; i < cookies.length; i++) {
//     let cookie = cookies[i];
//     while (cookie.charAt(0) === " ") {
//       cookie = cookie.substring(1);
//     }
//     if (cookie.indexOf(cookieName) === 0) {
//       return decodeURIComponent(
//         cookie.substring(cookieName.length, cookie.length)
//       );
//     }
//   }
//   return null;
// };

export function getCookie(key) {
  const b = document.cookie.match(`(^|;)\\s*${key}\\s*=\\s*([^;]+)`);
  return b ? decodeURIComponent(b.pop()) : "";
}

export const deleteCookie = (name) => {
  setCookie(name, "", -1);
};

export const getTokenFromCookie = () => {
  const token = getCookie("token");
  console.log(token);

  return console.log(token);
};
