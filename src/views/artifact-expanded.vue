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
        <h4>Description:</h4>
        <p>{{ item.description }}</p>

        <div class="info_controls">
          <!-- TODO update and delete artifact -->
          <a href="">Update artifact</a>
          <a href="">Delete artifact</a>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "artifact-expanded",
  data() {
    return {
      item: this.$store.state.expandedItem,
    };
  },
};
</script>
