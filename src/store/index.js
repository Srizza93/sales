import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      products: [],
      filters: [],
    };
  },
  mutations: {
    updateProducts(state, data) {
      state.products = data;
    },
    addFilter(state, filter) {
      state.filters.push(filter);
    },
    deleteFilter(state, filter) {
      state.filters.splice(state.filters.indexOf(filter), 1);
    },
  },
  getters: {
    getCategories(state) {
      return state.products.map((product) => product.category.toUpperCase());
    },
  },
  actions: {
    async apiCall({ commit }) {
      try {
        fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((json) => commit("updateProducts", json));
      } catch (error) {
        console.log("Api error: " + error);
      }
    },
  },
});
