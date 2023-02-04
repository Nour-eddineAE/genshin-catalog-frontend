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

// state: {
//   ? where we store data of our app
// },
// getters: {
//   ? allows accessing data in the state
//   ? they allow to perfom extra operations on data(like making some number rounded, returning its sqaure...)
// },
// mutations: {
//   ? methods that can change the data that is in the state
//   ? only allows synchronus code (no async and await here)
// },
// actions: {
//   ? methods that can access data in the state but can't directly change it
//   ? they need a mutation to change the data
//   ? we can use asynchronus code here
//   ? for example retreiving some data, the using a mutation to change the state
// },
// modules: {
//   ? allow to break our store into separate modules,
//   ? for each module we have a state, actions mutations ...
// },
