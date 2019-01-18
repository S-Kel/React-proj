import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://protected-scrubland-68099.herokuapp.com"
      : "https://protected-scrubland-68099.herokuapp.com"
});

export { api };
