export default function getCookie(key) {
    const b = document.cookie.match(`(^|;)\\s*${key}\\s*=\\s*([^;]+)`);
    return b ? decodeURIComponent(b.pop()) : "";
  }