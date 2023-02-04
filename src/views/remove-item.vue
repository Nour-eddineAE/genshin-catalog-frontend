<template>
  <section class="content margin-top-d">
    <form action="POST" class="newItem_form pad-d rounded-5">
      <p>{{ info }}</p>
      <div class="formCtrl">
        <button
          @click.prevent="$router.back()"
          type="submit"
          class="formBtn rounded-5 pad-s"
        >
          Cancel
        </button>
        <button @click.prevent="deleteItem" class="formBtn rounded-5 pad-s">
          Delete
        </button>
      </div>
    </form>
  </section>
</template>
<script>
export default {
  name: "remove-item",
  data() {
    return {
      info: `Are you sure you want to delete "${this.$store.state.expandedItem.name}"`,
    };
  },
  methods: {
    async deleteItem() {
      await this.$store.dispatch(
        "deleteItem",
        this.$store.state.expandedItem._id
      );
      this.info = `Deleted "${this.$store.state.expandedItem.name}"`;
    },
  },
};
</script>
