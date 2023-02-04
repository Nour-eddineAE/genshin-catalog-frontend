<template>
  <router-link
    @click="$store.commit('setExpandedItem', item)"
    :to="`/${this.$store.state.action}/expand`"
    class="card rounded-5"
  >
    <div :class="getStars">
      <img
        :class="getImgClass"
        :src="
          $store.state.action === 'characters'
            ? this.item.imgSmall
            : this.item.img
        "
        :alt="this.item.name"
      />
    </div>
    <p class="card_text rounded-5-bottom pad-s">{{ this.item.name }}</p>
  </router-link>
</template>

<script>
export default {
  name: "app-nav-item",
  props: {
    item: { type: Object },
  },
  computed: {
    getStars() {
      switch (this.item.rarity) {
        case 1:
          return "star_1 card_img rounded-5-top";
        case 2:
          return "star_2 card_img rounded-5-top";
        case 3:
          return "star_3 card_img rounded-5-top";
        case 4:
          return "star_4 card_img rounded-5-top";
        case 5:
          return "star_5 card_img rounded-5-top";
      }
    },
    getImgClass(state) {
      switch (this.$store.state.action) {
        case "characters":
          return "img_character";
        case "weapons":
          return "img_weapon";
        case "artifacts":
          return "img_artifact";
      }
    },
  },
};
</script>
