import { createStore } from "vuex";

import module from "./modules/index.js";

const store = createStore({
  modules: {
    module,
  },
});

export default store;
