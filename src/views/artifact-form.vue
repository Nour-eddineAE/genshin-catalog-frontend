<template>
  <section class="content margin-top-d">
    <form class="newItem_form pad-d rounded-5">
      <input
        type="text"
        name="name"
        id="itemName"
        v-model="item.name"
        placeholder="Name"
        @click="info = ''"
      />
      <select
        v-model="item.rarity"
        name="rarity"
        id="itemRarity"
        @click="info = ''"
      >
        <option
          value="0"
          hidden
          :selected="item && item.rarity === 0 ? 'selected' : false"
        >
          Please select a rarity
        </option>
        <option
          v-for="i in 5"
          :value="i"
          :selected="item && item.rarity === i ? 'selected' : false"
        >
          {{ i }} Star
        </option>
      </select>

      <textarea
        name="description"
        id="itemDescription"
        cols="30"
        rows="10"
        placeholder="Description"
        v-model="item.description"
        @click="info = ''"
      ></textarea>
      <input
        type="text"
        name="profileImg"
        id="profileImg"
        v-model="item.img"
        placeholder="Image link (example: https://paimon.moe/images/artifacts/adventurer_flower.png)"
        @click="info = ''"
      />
      <ul class="errors">
        <li>{{ info }}</li>
      </ul>
      <div class="formCtrl">
        <button @click.prevent="$router.back()" class="formBtn rounded-5 pad-s">
          Cancel
        </button>
        <button @click.prevent="saveArtifact" class="formBtn rounded-5 pad-s">
          Save artifact
        </button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "artifact-form",
  data() {
    return {
      item: {},
      info: "",
    };
  },
  computed: {},
  methods: {
    async saveArtifact() {
      const payload = {
        name: this.item.name,
        rarity: this.item.rarity,
        description: this.item.description,
        img: this.item.img,
      };
      try {
        if (this.$route.fullPath === "/artifacts/create") {
          await this.$store.dispatch("createItem", payload);
          this.info = "saved";
        } else if (this.$route.fullPath === "/artifacts/update") {
          await this.$store.dispatch("updateItem", {
            _id: this.item._id,
            payload,
          });
          this.info = "saved";
        }
      } catch (error) {
        if (error.response) {
          this.info = error.response.data;
        } else console.log(error);
      }
    },
  },
  created() {
    // initialize form
    if (this.$route.fullPath === "/artifacts/update") {
      this.item = this.$store.state.expandedItem;
    } else if (this.$route.fullPath === "/artifacts/create") {
      this.item = {
        name: "",
        rarity: 0,
        description: "",
        img: "",
      };
    }
  },
};
</script>
