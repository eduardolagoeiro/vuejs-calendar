import Vue from 'vue';

import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentYear: (new Date()).getFullYear(),
    currentMonth: (new Date()).getMonth() + 1,
    formTop: 500,
    formLeft: 500,
  },
  mutations: {
    setCurrentMonth(state, payload) {
      if (payload < 1) {
        state.currentYear -= 1;
        state.currentMonth = 12;
      } else if(payload > 12) {
        state.currentYear += 1;
        state.currentMonth = 1;
      } else {
        state.currentMonth = payload;
      }
    },
    openEventForm(state, payload){
      state.formTop = payload.screenY;
      state.formLeft = payload.screenX;
    }
  }
});