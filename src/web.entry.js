import Vue from 'vue';
import './style.scss';

Vue.directive('focus', {
  update: function (el) {
    el.focus()
  }
})

import moment from 'moment-timezone';
moment.tz.setDefault('UTC');

import store from './store';
const events = __EVENTS__.map(evt=>Object.assign(evt, { date: moment(evt.date) }));
const initialState = Object.assign(store.state, { events });
store.replaceState(initialState);

import App from './components/App.vue';

Object.defineProperty(Vue.prototype, '$moment', {
  get(){return this.$root.moment}
});

new Vue({
  el: '#app',
  data: {
    moment,
  },
  components:{
    App
  },
  store
});
