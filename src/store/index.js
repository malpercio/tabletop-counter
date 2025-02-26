import Vue from "vue";
import Vuex from "vuex";
import global from "@/store/modules";
import { session, wingspan } from "@/store/modules";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence();

Vue.use(Vuex);

export default new Vuex.Store({
  ...global,
  modules: {
    session,
    wingspan
  },
  plugins: [vuexLocal.plugin]
});
