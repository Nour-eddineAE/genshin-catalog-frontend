<template>
  <!-- TODO create a model(two way binding) to collect data into js logic -->
  <section class="content margin-top-d">
    <form action="POST" class="newItem_form pad-d rounded-5">
      <input
        type="text"
        name="name"
        id="itemName"
        :value="item.name"
        placeholder="Name"
      />
      <select name="rarity" id="itemRarity">
        <option value="" hidden>Please select a rarity</option>
        <option
          v-for="i in 5"
          :value="i"
          :selected="item && item.rarity === i ? 'selected' : false"
        >
          {{ i }} Star
        </option>
      </select>
      <select name="region" id="characterRegion">
        <option value="" hidden>Please select a region</option>
        <!-- TODO move regions names, weapons types, and elements to the store and loop through them -->
        <option
          value="5"
          :selected="
            item && item.region.name === 'Monstadt' ? 'selected' : false
          "
        >
          Monstadt
        </option>
        <option
          value="4"
          :selected="
            item && item.region.name === 'Inazuma' ? 'selected' : false
          "
        >
          Inazuma
        </option>
        <option
          value="3"
          :selected="item && item.region.name === 'Liyue' ? 'selected' : false"
        >
          Liyue
        </option>
      </select>
      <select name="element" id="characterElement">
        <option value="" hidden>Please select an element</option>
        <option
          value="anemo"
          :selected="item && item.element.name === 'Anemo' ? 'selected' : false"
        >
          Anemo
        </option>
        <option
          value="geo"
          :selected="item && item.element.name === 'Geo' ? 'selected' : false"
        >
          Geo
        </option>
        <option
          value="hydro"
          :selected="item && item.element.name === 'Hydro' ? 'selected' : false"
        >
          Hydro
        </option>
        <option
          value="pyro"
          :selected="item && item.element.name === 'Pyro' ? 'selected' : false"
        >
          Pyro
        </option>
        <option
          value="cryo"
          :selected="item && item.element.name === 'Cryo' ? 'selected' : false"
        >
          Cryo
        </option>
        <option
          value="dendro"
          :selected="
            item && item.element.name === 'Dendro' ? 'selected' : false
          "
        >
          Dendro
        </option>
      </select>
      <select name="weapon-type" id="characterWeaponType">
        <option value="" hidden>Please select weapon</option>
        <option
          value="sword"
          :selected="
            item && item.weaponType.name === 'Sword' ? 'selected' : false
          "
        >
          Sword
        </option>
        <option
          value="polearm"
          :selected="
            item && item.weaponType.name === 'Polearm' ? 'selected' : false
          "
        >
          Polearm
        </option>
        <option
          value="bow"
          :selected="
            item && item.weaponType.name === 'Bow' ? 'selected' : false
          "
        >
          Bow
        </option>
        <option
          value="catalyst"
          :selected="
            item && item.weaponType.name === 'Catalyst' ? 'selected' : false
          "
        >
          Catalyst
        </option>
      </select>
      <textarea
        name="description"
        id="itemDescription"
        cols="30"
        rows="10"
        placeholder="Description"
        >{{ item.description }}</textarea
      >

      <input
        type="text"
        name="profileImg"
        id="profileImg"
        :value="item.imgSmall"
        placeholder="Thumbnail image link (example: https://paimon.moe/images/characters/albedo.png)"
      />
      <input
        type="text"
        name="detailImg"
        id="detailImg"
        :value="item.imgFull"
        placeholder="Detailed image link (example: https://paimon.moe/images/characters/full/albedo.png)"
      />
      <ul class="errors">
        <li>Eroor</li>
      </ul>
      <button type="submit" class="addItem">Create Item</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "character-form",
  data() {
    return {
      item: this.$store.state.characterFormItem,
    };
  },
};
</script>
