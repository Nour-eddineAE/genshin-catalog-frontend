import { createRouter, createWebHistory } from "vue-router";

import Characters from "../views/characters-menu.vue";
import Weapons from "../views/weapons-menu.vue";
import Artifacts from "../views/artifacts-menu.vue";
import MainMenu from "../views/Main-menu.vue";
import CharacterExpanded from "../views/character-expanded.vue";
import WeaponExpanded from "../views/weapon-expanded.vue";
import ArtifactExpanded from "../views/artifact-expanded.vue";
import CharacterForm from "../views/character-form.vue";
const routes = [
  {
    path: "/",
    name: "MainMenu",
    components: {
      operations: MainMenu,
    },
    children: [
      {
        path: "/",
        redirect: "/characters",
      },
      {
        // these three components are what we want to render in the router-view named gallery
        path: "/characters",
        name: "Characters",
        components: {
          gallery: Characters,
        },
      },
      {
        path: "/weapons",
        name: "Weapons",
        components: {
          gallery: Weapons,
        },
      },
      {
        path: "/artifacts",
        name: "Artifacts",
        components: {
          gallery: Artifacts,
        },
      },
    ],
  },
  {
    path: "/characters/expand",
    components: {
      operations: CharacterExpanded,
    },
  },
  {
    path: "/weapons/expand",
    components: {
      operations: WeaponExpanded,
    },
  },
  {
    path: "/artifacts/expand",
    components: {
      operations: ArtifactExpanded,
    },
  },
  {
    path: "/characters/create",
    alias: ["/characters/update"],
    components: {
      operations: CharacterForm,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
