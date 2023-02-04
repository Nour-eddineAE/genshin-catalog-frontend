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
      <input
        type="text"
        name="base_attack"
        id="base_attack"
        v-model="item.base_attack"
        placeholder="Base attack"
        @click="info = ''"
      />
      <input
        type="text"
        name="second_stat"
        id="second_stat"
        v-model="item.second_stat"
        placeholder="Second stat"
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
        v-model="item.weaponType.name"
        name="weapon-type"
        id="characterWeaponType"
        @click="info = ''"
      >
        <option value="" hidden>Please select weapon type</option>
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
        name="passive"
        id="itemPassive"
        cols="30"
        rows="10"
        placeholder="Passive"
        v-model="item.passive"
        @click="info = ''"
      ></textarea>
      <input
        type="text"
        name="profileImg"
        id="profileImg"
        v-model="item.img"
        placeholder="Image link (example: https://paimon.moe/images/weapons/the_catch.png)"
        @click="info = ''"
      />
      <ul class="errors">
        <li>{{ info }}</li>
      </ul>
      <div class="formCtrl">
        <button @click.prevent="$router.back()" class="formBtn rounded-5 pad-s">
          Cancel
        </button>
        <button @click.prevent="saveWeapon" class="formBtn rounded-5 pad-s">
          Save weapon
        </button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "weapon-form",
  data() {
    return {
      item: {},
      info: "",
    };
  },
  computed: {},
  methods: {
    async saveWeapon() {
      const payload = {
        name: this.item.name,
        rarity: this.item.rarity,
        base_attack: this.item.base_attack,
        second_stat: this.item.second_stat,
        weaponTypeName: this.item.weaponType.name,
        passive: this.item.passive,
        img: this.item.img,
      };
      try {
        if (this.$route.fullPath === "/weapons/create") {
          await this.$store.dispatch("createItem", payload);
          this.info = "saved";
        } else if (this.$route.fullPath === "/weapons/update") {
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
    if (this.$route.fullPath === "/weapons/update") {
      this.item = this.$store.state.expandedItem;
    } else if (this.$route.fullPath === "/weapons/create") {
      this.item = {
        name: "",
        rarity: 0,
        base_attack: "",
        second_stat: "",
        weaponType: { name: "" },
        passive: "",
        img: "",
      };
    }
  },
};
</script>
