import Api from "../services/api";

export default {
  async loadItems({ state, commit }) {
    const response = await Api().get(`/api/${state.action}`);
    commit("setItems", await response.data);
  },
};
