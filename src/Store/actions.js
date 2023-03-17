import axios from "axios";
import { endPoint } from "@/Constants/endpoints";

export default {
  async fetchData({ commit }) {
    try {
      const data = await axios.get(endPoint);
      commit("setData", data.data);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  },
};
