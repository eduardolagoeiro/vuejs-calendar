import Vue from 'vue';

import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentYear: (new Date()).getFullYear(),
    currentMonth: (new Date()).getMonth() + 1,
  },
  mutations: {
    setCurrentMonth(state, payload) {
      if (payload == 0) {
        state.currentYear -= 1;
        state.currentMonth = 12;
      } else if(payload == 13) {
        state.currentYear += 1;
        state.currentMonth = 1;
      } else {
        state.currentMonth = payload;
      }
      
    }
  }
});