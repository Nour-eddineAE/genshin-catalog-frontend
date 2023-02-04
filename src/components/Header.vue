<template>
  <header>
    <router-link @click="reloadCharacters" class="title" to="/characters">
      <h1>{{ $store.state.appName }}</h1>
    </router-link>
  </header>
</template>

<script>
export default {
  name: "app-header",
  methods: {
    async reloadCharacters() {
      // back to characters
      this.$store.commit("setAction", "characters");
      await this.$store.dispatch("loadItems");
    },
  },
};
</script>

<style scoped lang="scss"></style>
