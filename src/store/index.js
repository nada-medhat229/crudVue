import { createStore } from "vuex";
import ItemApi from "@/API/FackApi.js";
const store = createStore({
  state: {
    // message: "hello world",
    items: [],
    currentItem: {
      Title: "",
      Content: "",
      Background: "",
    },
  },
  getters: {
    getCurrentItem(state) {
      return state.currentItem;
    },
    getItems(state) {
      return state.items;
    },
  },
  mutations: {
    // setmessage(state, payload) {
    //   state.message = payload;
    // },
    addItem(state, newItem) {
      state.items.push(newItem);
    },
    updateCurrent(state, payload) {
      state.currentItem = payload;
    },
    deleteItem(state, payload) {
      let index = state.items.findIndex(
        (i) =>
          i.Title === payload.Title &&
          i.Content === payload.Content &&
          i.Background === payload.Background
      );
      if (index > -1) {
        state.items.splice(index, 1);
      }
    },
    editItem(state, { oldItem, newItem }) {
      let index = state.items.findIndex(
        (i) =>
          i.Title === oldItem.Title &&
          i.Content === oldItem.Content &&
          i.Background === oldItem.Background
      );
      if (index > -1) {
        state.items[index] = newItem;
      }
    },
  },
  actions: {
    // setmessage(context, payload) {
    //   const { commit } = context;
    //   commit("setmessage", payload);
    // },
    addItem(context, newItem) {
      const { commit } = context;
      commit("addItem", newItem);
    },
    updateCurrent(context, payload) {
      const { commit } = context;
      commit("updateCurrent", payload);
    },
    deleteItem(context, payload) {
      const { commit } = context;
      commit("deleteItem", payload);
    },
    editItem({ commit }, payload) {
      commit("editItem", payload);
    },
    loadAllItem(context) {
      const { commit } = context;
      ItemApi.fetchAllItem().then((all) => {
        all.forEach((item) => commit("addItem", item));
      });
    },
  },
  modules: {},
});
export default store;
