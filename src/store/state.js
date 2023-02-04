export default {
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
  // item details // used to store expanded item's data // changes based on action's value
  expandedItem: {},
  //Regions
  regions: ["Monstadt", "Liyue", "Inazuma"],
  // Elements
  elements: ["Anemo", "Geo", "Hydro", "Pyro", "Cryo", "Dendro"],
  // Weapon types
  weaponTypes: ["Sword", "Polearm", "Bow", "Catalyst"],
};
