import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

import { endPoint } from '@/Constants/endpoints';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        data: []
      },
      mutations: {
        setData(state, payload) {
          state.data = payload
        }
      },
      actions: {
        fetchData({ commit }) {
          axios.get(endPoint)
            .then(response => {
              commit('setData', response)
            })
            .catch(error => {
              console.log(error)
            })
        }
      }
})