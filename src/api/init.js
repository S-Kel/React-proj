import axios from "axios";
// const AUTH_TOKEN = JSON.parse(window.sessionStorage.getItem("AuthToken")).user.token || '';
// console.log("AUTH_TOKEN\\\\\\\\\\\\\\\\\\", AUTH_TOKEN)
const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://protected-scrubland-68099.herokuapp.com"
      : "http://localhost:3000",
  // : "https://wbgs-server.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${AUTH_TOKEN}`
  },
  proxy: false,
});

// api.defaults.headers.common["Authorization"] = 'Bearer '+  AUTH_TOKEN;

export { api };


//   const token = "27-ShBiueSPGlqvS7zMzS9nvAB6Pv0";
    //   axios({ method: 'get', url: 'your URL', headers: { Authorization: `Bearer ${token}` } })
// headers: {
//   "Accept": "application/json, text/plain, */*",
//     "Authorization": "Bearer 27-ShBiueSPGlqvS7zMzS9nvAB6Pv0",
//       "Content-Type": "application/json;charset=utf-8"
// }
  // :"http://localhost:3000"
  // headers: { "Authorization": `Bearer ${AUTH_TOKEN}`},

  // headers: { "Content-Type": "application/json" }