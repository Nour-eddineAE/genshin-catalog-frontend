<template>
  <section class="content margin-top-d">
    <section class="item_detail rounded-5 pad-d">
      <div class="img">
        <img :src="item.img" style="width: 90%" />
      </div>
      <div class="info">
        <h3>{{ item.name }}</h3>
        <div class="stars rounded-5">
          <svg
            v-for="i in item.rarity"
            viewBox="0 0 24 24"
            style="width: 1.5rem; height: 1.5rem; fill: currentColor"
            class="svelte-1mzwbk9"
          >
            <path
              d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
            ></path>
          </svg>
        </div>
        <h4>Type :</h4>
        <p>{{ item.weaponType.name }}</p>
        <h4>Base attack:</h4>
        <p>{{ item.base_attack }}</p>
        <h4>Second stat:</h4>
        <p>
          {{ item.second_stat }}
        </p>
        <h4>Passive:</h4>
        <p>
          {{ item.passive }}
        </p>

        <div class="info_controls">
          <router-link to="/weapons/update">Update weapon</router-link>
          <router-link to="/weapons/delete">Delete weapon</router-link>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "weapon-expanded",
  data() {
    return {
      item: this.$store.state.expandedItem,
    };
  },
};
</script>
