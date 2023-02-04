import Api from "../services/api";

export default {
  async loadItems({ state, commit }) {
    const response = await Api().get(`/api/${state.action}`);
    commit("setItems", await response.data);
  },
  async updateItem({ state }, item) {
    return await Api().put(`/api/${state.action}/${item._id}`, item.payload);
  },
  async createItem({ state }, item) {
    return await Api().post(`/api/${state.action}`, item);
  },
  async deleteItem({ state }, id) {
    return await Api().delete(`/api/${state.action}/${id}`);
  },
};
