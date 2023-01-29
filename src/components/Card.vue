<template>
  <div
    class="card text-white col-lg-3 col-md-6 col-12 m-2 d-inline-block"
    v-for="(item, index) in items"
    :key="index"
    :style="`background:${item.Background}`"
  >
    <div class="card-body">
      <h5 class="card-title">{{ item.Title }}</h5>
      <p class="card-text">{{ item.Content }}</p>
      <div class="d-flex justify-content-between align-items-center">
        <Button
          buttonName="Edit"
          class="editbtn mx-2"
          @click="editItem(item)"
        />
        <Button
          buttonName="Delete"
          class="deletebtn mx-2"
          @click="deleteItem(item)"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Button from "./Button.vue";
export default {
  // vue/multi-word-component-names
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Card",
  components: {
    Button,
  },
  // data() {
  //   // return {
  //   //   items: [
  //   //     {
  //   //       title: "Card one",
  //   //       content: "that is very good",
  //   //       background: "rgb(20 114 138)",
  //   //     },
  //   //     {
  //   //       title: "Card two",
  //   //       content: "thanks for you",
  //   //       background: "rgb(34 91 90)",
  //   //     },
  //   //     {
  //   //       title: "Card three",
  //   //       content: "i will be happy when work with you",
  //   //       background: "rgb(25 107 81)",
  //   //     },
  //   //   ],
  //   // };
  // },
  props: {
    items: {
      type: Array,
      defult() {
        return [];
      },
    },
  },
  computed: {
    getCurrentItem() {
      return this.$store.getters.getCurrentItem;
    },
  },
  methods: {
    deleteItem(item) {
      this.$store.dispatch("deleteItem", item);
    },
    editItem(item) {
      this.$store.dispatch("updateCurrent", item);
      this.$emit("ButtonEditClicked", true);
    },
  },
};
</script>
<style scoped lang="scss"></style>
