import { createRouter, createWebHistory } from "vue-router";

import Characters from "../views/characters-menu.vue";
import Weapons from "../views/weapons-menu.vue";
import Artifacts from "../views/artifacts-menu.vue";
import MainMenu from "../views/Main-menu.vue";
import CharacterExpanded from "../views/character-expanded.vue";
import WeaponExpanded from "../views/weapon-expanded.vue";
import ArtifactExpanded from "../views/artifact-expanded.vue";
import CharacterForm from "../views/character-form.vue";
import WeaponForm from "../views/weapon-form.vue";
import ArtifactForm from "../views/artifact-form.vue";
import RemoveItem from "../views/remove-item.vue";
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
  {
    path: "/weapons/create",
    alias: ["/weapons/update"],
    components: {
      operations: WeaponForm,
    },
  },
  {
    path: "/artifacts/create",
    alias: ["/artifacts/update"],
    components: {
      operations: ArtifactForm,
    },
  },
  {
    path: "/characters/delete",
    alias: ["/artifacts/delete", "/weapons/delete"],
    components: {
      operations: RemoveItem,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
