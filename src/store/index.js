import Vue from 'vue';
import Vuex from 'vuex';
import { users } from './modules/users';
import { productos } from './modules/productos';
import { caja } from './modules/caja';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userLogged: {
      id: 'otzsbepxm0oj72p',
      username: 'hipolitocoronel',
      name: 'Hipolito Coronel',
    },
  },
  getters: {
    userLogged: state => state.userLogged,
  },
  mutations: {
    setUserLogged(state, user) {
      state.userLogged = user;
    },
  },
  actions: {
    setUserLogged({ commit }, user) {
      commit('setUserLogged', user);
    },
  },
  modules: {
    users,
    productos,
    caja,
  },
  strict: true,
});
