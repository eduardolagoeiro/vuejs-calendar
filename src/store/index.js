import Vue from 'vue';
import moment from 'moment-timezone';
moment.tz.setDefault('UTC');
import axios from 'axios';

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
      events: []
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
      state.events.push(payload);
    }
  },
  actions: {
    addEvent(ctx, payload) {
      const obj = {
        description: payload.description,
        date: ctx.state.currentDate
      };
      axios.post('/add_event', obj)
        .then(res => {
          if(res.status == 200){
            ctx.commit('createNewEvent', obj);
          }else{
            console.log('Error');
          }
        })
        .catch(err => console.log(err));
    }
  }
});