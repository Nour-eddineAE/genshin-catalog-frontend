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
      <select
        v-model="item.region.name"
        name="region"
        id="characterRegion"
        @click="info = ''"
      >
        <option value="" hidden>Please select a region</option>
        <option
          v-for="region in $store.state.regions"
          :value="region"
          :selected="item && item.region.name === region ? 'selected' : false"
        >
          {{ region }}
        </option>
      </select>
      <select
        v-model="item.element.name"
        name="element"
        id="characterElement"
        @click="info = ''"
      >
        <option value="" hidden>Please select an element</option>
        <option
          v-for="element in $store.state.elements"
          :value="element"
          :selected="item && item.element.name === element ? 'selected' : false"
        >
          {{ element }}
        </option>
      </select>
      <select
        v-model="item.weaponType.name"
        name="weapon-type"
        id="characterWeaponType"
        @click="info = ''"
      >
        <option value="" hidden>Please select weapon</option>
        <option
          v-for="weaponType in $store.state.weaponTypes"
          :value="weaponType"
          :selected="
            item && item.weaponType.name === weaponType ? 'selected' : false
          "
        >
          {{ weaponType }}
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
        v-model="item.imgSmall"
        placeholder="Thumbnail image link (example: https://paimon.moe/images/characters/albedo.png)"
        @click="info = ''"
      />
      <input
        type="text"
        name="detailImg"
        id="detailImg"
        v-model="item.imgFull"
        placeholder="Detailed image link (example: https://paimon.moe/images/characters/full/albedo.png)"
        @click="info = ''"
      />
      <ul class="errors">
        <li>{{ info }}</li>
      </ul>
      <div class="formCtrl">
        <button @click.prevent="$router.back()" class="formBtn rounded-5 pad-s">
          Cancel
        </button>
        <button @click.prevent="saveCharacter" class="formBtn rounded-5 pad-s">
          Save character
        </button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "character-form",
  data() {
    return {
      item: {},
      info: "",
    };
  },
  computed: {},
  methods: {
    async saveCharacter() {
      const payload = {
        name: this.item.name,
        rarity: this.item.rarity,
        regionName: this.item.region.name,
        elementName: this.item.element.name,
        weaponTypeName: this.item.weaponType.name,
        description: this.item.description,
        imgSmall: this.item.imgSmall,
        imgFull: this.item.imgFull,
      };
      try {
        if (this.$route.fullPath === "/characters/create") {
          await this.$store.dispatch("createItem", payload);
          this.info = "saved";
        } else if (this.$route.fullPath === "/characters/update") {
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
    if (this.$route.fullPath === "/characters/update") {
      this.item = this.$store.state.expandedItem;
    } else if (this.$route.fullPath === "/characters/create") {
      this.item = {
        name: "",
        rarity: 0,
        region: { name: "" },
        element: { name: "" },
        weaponType: { name: "" },
        description: "",
        imgSmall: "",
        imgFull: "",
      };
    }
  },
};
</script>
