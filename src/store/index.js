import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      products: [],
      filters: [],
      sort: {
        type: "rating",
        sign: "-",
      },
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
    getProducts(state) {
      return state.products.sort((a, b) => {
        if (state.sort.sign === "+") {
          const bridge = a;
          a = b;
          b = bridge;
        }
        if (state.sort.type === "rating") {
          return a[state.sort.type]["rate"] - b[state.sort.type]["rate"];
        }
        return a[state.sort.type] - b[state.sort.type];
      });
    },
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
