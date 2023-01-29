<template>
  <Header />
  <div class="container">
    <br />
    <inputForm :key="newKey" />
    <br />
    <div class="row justify-content-center mb-5">
      <Card @ButtonEditClicked="newKey = Math.random()" :items="items" />
    </div>
    <!-- <p>{{ getmessage }}</p>
    <Button buttonName="Adding" @click="changemessage()" class="addbtn mx-2" /> -->
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import inputForm from "@/components/inputForm.vue";
import Card from "@/components/Card.vue";
// import ItemApi from "@/API/FackApi.js";

export default {
  name: "HomeView",
  components: {
    Header,
    inputForm,
    Card,
  },
  created() {
    this.$store.dispatch("loadAllItem");
  },
  data() {
    return {
      newKey: Number,
    };
  },
  computed: {
    // getmessage() {
    //   return this.$store.state.message;
    // },
    items() {
      return this.$store.getters.getItems;
    },
  },
  // items() {
  //   return this.$store.state.items;
  // },
  // methods: {
  //   changemessage() {
  //     this.$store.dispatch("setmessage", "hello1");
  //   },
  // },
};
</script>
<style scoped lang="scss"></style>
