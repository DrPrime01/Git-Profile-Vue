import axios from "axios";
import { endPoint } from "@/Constants/endpoints";

export default {
  fetchData({ commit }) {
    axios
      .get(endPoint)
      .then((res) => commit("setData", res))
      .catch((err) => console.log(err));
  },
};
