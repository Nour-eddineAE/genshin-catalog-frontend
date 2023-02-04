import { createStore } from "vuex";
import Api from "../services/api";

export default createStore({
  state: {
    // header
    appName: "Genshin catalog",
    // navigation
    navBarItems: [
      {
        fileName: "cat_characters",
        alt: "characters",
        routerLink: "characters",
      },
      {
        fileName: "cat_weapons",
        alt: "weapons",
        routerLink: "weapons",
      },
      {
        fileName: "cat_artifacts",
        alt: "artifacts",
        routerLink: "artifacts",
      },
    ],
    // main menu
    action: "characters",
    mainMenuItems: [],
    // item details
    expandedItem: {},
  },
  getters: {},
  mutations: {
    // changes the action on navigation item click
    setAction(state, action) {
      state.action = action;
    },
    setItems(state, items) {
      state.mainMenuItems = items;
    },
    getImgClass(state) {
      switch (state.action) {
        case "characters":
          return "img_character";
        case "weapons":
          return "img_weapon";
        case "artifacts":
          return "img_artifact";
      }
    },
    setExpandedItem(state, item) {
      state.expandedItem = item;
    },
  },
  actions: {
    async loadItems({ state, commit }) {
      const response = await Api().get(`/api/${state.action}`);
      commit("setItems", await response.data);
    },
  },
  modules: {},
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
