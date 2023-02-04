export default {
  // changes the action on navigation item click
  setAction(state, action) {
    state.action = action;
  },
  setItems(state, items) {
    state.mainMenuItems = items;
  },
  setExpandedItem(state, item) {
    state.expandedItem = item;
  },
};
