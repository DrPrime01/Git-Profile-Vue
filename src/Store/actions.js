import axios from "axios";
import { profileEndPoint } from "@/Constants/endpoints";
import { reposEndPoint } from "@/Constants/endpoints";

export default {
  async fetchData({ commit }) {
    try {
      const data = await axios.get(profileEndPoint);
      commit("setData", data.data);
    } catch (error) {
      console.log(error);
    }
  },
  async fetchRepos({ commit }) {
    try {
      const data = await axios.get(reposEndPoint);
      commit("setRepos", data.data);
      console.log("setRepos", data.data)
    } catch (error) {
      console.log(error);
    }
  },
};
