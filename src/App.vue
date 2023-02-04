<template>
  <Header />
  <router-view name="operations"></router-view>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss"></style>
