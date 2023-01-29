<template>
  <div class="button btn">{{ buttonName }}</div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Button",
  props: {
    buttonName: String,
  },
};
</script>
<style scoped lang="scss">
.button {
  padding: 10px;
  width: 150px;
}
.deletebtn {
  background: red;
  color: #fff;
  &:hover {
    background: red;
    color: #fff;
  }
}
.editbtn {
  background-color: rgb(6, 140, 250);
  color: #fff;
  &:hover {
    background: rgb(6, 140, 250);
    color: #fff;
  }
}
.addbtn {
  background-color: rgb(39, 203, 116);
  color: #fff;
  &:hover {
    background-color: rgb(39, 203, 116);

    color: #fff;
  }
}
</style>
