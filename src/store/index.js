import Vue from 'vue';
import moment from 'moment-timezone';

import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentYear: (new Date()).getFullYear(),
    currentMonth: (new Date()).getMonth() + 1,
    currentDate: moment(),
    formTop: 0,
    formLeft: 0,
    eventFormActive: false,
    events: [
      { description: 'Event 1', date: moment() },
      { description: 'Event 2', date: moment() },
      { description: 'Event 3', date: moment() }
    ]
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
      state.eventFormActive = true;
      state.currentDate = payload.date;
      state.formTop = payload.screenY;
      state.formLeft = payload.screenX;
    },
    closeEventForm(state){
      state.eventFormActive = false;
    },
    createNewEvent(state, payload){
      state.events.push({
        description: payload.description,
        date: state.currentDate
      });
    }
  }
});