<template>
  <!-- ?the classname changes based on the property action that we 
  ? have set when we created the navItem -->
  <li @click="onNavButtonClick" :className="className">
    <router-link :to="link">
      <img v-bind:src="img" :alt="alt" />
    </router-link>
  </li>
</template>

<script>
export default {
  name: "app-nav-item",
  props: {
    routerLink: {
      type: String,
    },
    fileName: {
      type: String,
    },
    alt: {
      type: String,
    },
    className: { type: String },
  },
  data() {
    return {
      img: require("../assets/imgs/icons/" + this.fileName + ".png"),
      link: `/${this.routerLink}`,
    };
  },
  methods: {
    async onNavButtonClick() {
      // changing action
      this.$store.commit("setAction", this.routerLink);
      // reloading the items
      await this.$store.dispatch("loadItems");
    },
  },
};
</script>
