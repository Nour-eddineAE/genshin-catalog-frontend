<template>
  <NavBar />
  <!-- ? for main menu items -->
  <router-view name="gallery"></router-view>
</template>

<script>
import CharactersMenu from "@/views/characters-menu.vue";
import NavBar from "../components/NavBar.vue";

export default {
  name: "app-main-menu",
  components: {
    NavBar,
    CharactersMenu,
  },
};
</script>
