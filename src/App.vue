<template>
  <Header />
  <!-- <MainMenu /> -->
  <router-view name="operations"></router-view>
</template>

<script>
import Header from "./components/Header.vue";
// import MainMenu from "./views/Main-menu.vue";

export default {
  components: {
    Header,
    // MainMenu,
  },
};
</script>

<style lang="scss"></style>
