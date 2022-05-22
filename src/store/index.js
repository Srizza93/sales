import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      products: [
        {
          title: "test",
          price: 10,
          description: "loret ipsum",
          image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
          category: "test",
          rating: {
            rate: 2,
            count: 1,
          },
        },
        {
          title: "test2",
          price: 10,
          description: "loret ipsum",
          image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
          category: "test",
          rating: {
            rate: 2,
            count: 1,
          },
        },
        {
          title: "test3",
          price: 10,
          description: "loret ipsum",
          image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
          category: "test",
          rating: {
            rate: 2,
            count: 1,
          },
        },
      ],
      filters: [],
      cartItems: [],
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
    addItemToCart(state, item) {
      item.quantity = 1;
      state.cartItems.push(item);
    },
    deleteItemInCart(state, itemToDelete) {
      state.cartItems.splice(state.cartItems.indexOf(itemToDelete), 1);
    },
  },
  getters: {
    getProducts(state) {
      let products = state.products;
      if (state.filters.length > 0) {
        products = products.filter((product) =>
          Object.values(product).some((value) => {
            return state.filters.some(
              (filter) =>
                filter ===
                (typeof value === "string" ? value.toUpperCase() : value)
            );
          })
        );
      }
      return products.sort((a, b) => {
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
