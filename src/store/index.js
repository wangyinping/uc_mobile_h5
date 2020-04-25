import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    bankInfo: {
      bankCode: '',
      bankName: ''
    }
  },
  mutations: {
    setBankInfo(state, item) {
      state.bankInfo.bankCode = item.bankCode;
      state.bankInfo.bankName = item.bankName;
    }
  }
})
export default store;
