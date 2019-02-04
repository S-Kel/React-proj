import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://protected-scrubland-68099.herokuapp.com"
      : "http://localhost:3001/"
  // : "http://localhost:3001/" "https://protected-scrubland-68099.herokuapp.com/expression-of-interest
});

export { api };
