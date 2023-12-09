import Vue from "vue";
import Vuex from "vuex";
import persistedstate from "vuex-persistedstate"
import {
    getHomePageData,
    getHomepageDragonBall,
    loginCellphone,
  } from "@/service";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    blocks: [],
    menus: [],
    auth: {},
    isDark: false,
    songId:[]
  },
  mutations: {
    updateBlocks(state, res) {
      state.blocks = res.data.data.blocks;
    },
    updateMenus(state, res) {
      state.menus = res.data.data;
    },
    updateAuth(state, res) {
      state.auth = res.data;
    },
    //深色模式
    changeDark(state, payload) {
      state.isDark = payload
    },

    // deleteCachedData(state) {
    //   if (confirm('确定退出吗？')) {
    //       state.auth={}s
    //       localStorage.clear()
    //       window.sessionStorage.clear()
    //       // this.$router.push('/longin')
    //   }
    // }
  },
  actions: {
    async requestHomePageData(store) {
      const [err, homePageData] = await getHomePageData();
      if (err) return;
      store.commit("updateBlocks", homePageData);
    },
    async requestHomepageDragonBall() {
      const [err, homepageDragonball] = await getHomepageDragonBall();
      if (err) return;
      store.commit("updateMenus", homepageDragonball);
    },
    async requestLoginCellphone(store, data) {
      const [err, res] = await loginCellphone(data);
      if (err) return alert("请求错误，请稍后再试！");
      store.commit("updateAuth", res);
    },
   
    // async requestoutsend(store,data) {
    //   const [err, res] = await loginCellphone(data);
    //   if (err) return alert(err);
    //   store.commit("deleteCachedData", res);
    // },

  },
  plugins: [persistedstate()],
});

export default store;