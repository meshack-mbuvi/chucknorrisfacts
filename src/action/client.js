import axios from "axios";

const client = axios.create({
  baseURL: "https://api.chucknorris.io/jokes",
});

client.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  }
);

export default client;
