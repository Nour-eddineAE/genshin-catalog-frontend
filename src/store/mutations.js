export default {
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
  setCharacterFormItem(state, item) {
    state.characterFormItem = item;
  },
};
