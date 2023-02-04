import { createStore } from "vuex";
import state from "./state";
import actions from "./actions";
import mutations from "./mutations";
import VuexPersistence from "vuex-persist";

// state persistance
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});
export default createStore({
  state: state,
  getters: {},
  mutations: mutations,
  actions: actions,
  modules: {},
  plugins: [vuexLocal.plugin],
});
