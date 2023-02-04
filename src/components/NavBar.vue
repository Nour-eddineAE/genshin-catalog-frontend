<template>
  <div class="categories">
    <ul class="category_list">
      <div v-for="item in $store.state.navBarItems" :key="item.id">
        <NavItem
          :fileName="item.fileName"
          :className="
            item.routerLink === $store.state.action
              ? 'category active'
              : 'category'
          "
          :alt="item.alt"
          :routerLink="item.routerLink"
        />
      </div>
    </ul>
  </div>
</template>

<script>
import NavItem from "./NavItem.vue";

export default {
  name: "app-nav-bar",
  components: {
    NavItem,
  },
};
</script>

<style scoped lang="scss"></style>
