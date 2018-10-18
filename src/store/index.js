import Vue from 'vue';
import moment from 'moment-timezone';

import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentYear: (new Date()).getFullYear(),
    currentMonth: (new Date()).getMonth() + 1,
    currentDay: 0,
    formTop: 500,
    formLeft: 500,
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
      state.currentDay = payload.day;
      state.formTop = payload.screenY;
      state.formLeft = payload.screenX;
    },
    closeEventForm(state){
      state.eventFormActive = false;
    },
    createNewEvent(state, payload){
      const { description } = payload;
      const { currentYear, currentMonth, currentDay} = state;
      const date = moment().date(currentDay).month(currentMonth-1).year(currentYear);
      state.events.push({ description, date });
    }
  }
});