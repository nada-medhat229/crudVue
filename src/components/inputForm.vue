<template>
  <div class="content rounded d-flex align-items-center justify-content-center">
    <label for="Title" class="px-2">Title: </label>
    <input
      type="text"
      id="Title"
      name="Title"
      class="form-control ms-3"
      v-model="Title"
    />
  </div>
  <div class="content d-flex align-items-start justify-content-center">
    <label for="Content" class="pe-2">Content:</label>
    <textarea
      id="Content"
      name="Content"
      class="form-control"
      v-model="Content"
    ></textarea>
  </div>
  <div class="content d-flex align-items-start justify-content-center">
    <label for="Background" class="pe-2">Background:</label>
    <input
      type="color"
      id="Background"
      name="Background"
      class="form-control"
      v-model="Background"
    />
  </div>
  <div class="w-50 m-auto d-flex justify-content-center align-items-center">
    <Button buttonName="Save" class="editbtn mx-2" @click="saveItem" />
    <Button buttonName="Add" class="addbtn mx-2" @click="addItem" />
  </div>
</template>
<script>
import Button from "@/components/Button.vue";
export default {
  name: "inputForm",
  components: {
    Button,
  },
  created() {
    this.Title = this.getTitle;
    this.Content = this.getContent;
    this.Background = this.getBackground;
  },
  data() {
    return {
      Title: "",
      Content: "",
      Background: "#ffffff",
    };
  },
  computed: {
    getCurrentItem() {
      return this.$store.getters.getCurrentItem;
    },
    getTitle() {
      return this.$store.getters.getCurrentItem.Title;
    },
    getContent() {
      return this.$store.getters.getCurrentItem.Content;
    },
    getBackground() {
      return this.$store.getters.getCurrentItem.Background;
    },
  },
  methods: {
    addItem() {
      const newItem = {
        Title: this.Title,
        Content: this.Content,
        Background: this.Background,
      };
      this.$store.dispatch("addItem", newItem);
    },
    saveItem() {
      const newItem = {
        Title: this.Title,
        Content: this.Content,
        Background: this.Background,
      };
      this.$store.dispatch("editItem", {
        oldItem: this.$store.getters.getCurrentItem,
        newItem,
      });
    },
  },
};
</script>
<style scoped lang="scss">
.content {
  width: 50%;
  margin: auto;
  padding: 10px;
}
@media (max-width: 575.98px) {
  textarea {
    width: 70% !important;
    height: 70px !important;
  }
  .content {
    width: 100%;
  }
}
</style>
