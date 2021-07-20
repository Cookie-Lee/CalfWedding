import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    offsetTop: 0,
  },
  actions: {
    offsetTop(context, payload) {
      context.commit("OFFSETTOP", payload);
    },
  },
  mutations: {
    OFFSETTOP(state, payload) {
      state.offsetTop = payload;
    },
  },
  modules: {},
  getters: {
    offsetTop(state) {
      return state.offsetTop;
    },
  },
});
