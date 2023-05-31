import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0b08735130ca484599df6053b6ed5ced",
  },
});
