<template>
  <section class="content">
    <section class="item_container rounded-5 pad-d">
      <router-link to="/weapons/create" class="card rounded-5">
        <div class="card_img rounded-5-top createItem">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
            />
          </svg>
        </div>
        <p class="card_text rounded-5-bottom pad-s">New</p>
      </router-link>
      <MainMenuItem v-for="item in $store.state.mainMenuItems" :item="item" />
    </section>
  </section>
</template>

<script>
import MainMenuItem from "../components/Main-menu-item.vue";

export default {
  name: "weapons-menu",
  components: {
    MainMenuItem,
  },
};
</script>

<style scoped></style>
