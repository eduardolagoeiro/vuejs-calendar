import Vue from 'vue';

import Vuex from 'vuex';
Vue.use(Vuex);

export default {
  state: {
    currentYear: (new Date()).getFullYear(),
    currentMonth: (new Date()).getMonth() + 1,
  }
}