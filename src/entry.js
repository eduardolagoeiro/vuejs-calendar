import Vue from 'vue';

Vue.directive('focus', {
  update: function (el) {
    el.focus()
  }
})

import moment from 'moment-timezone';
moment.tz.setDefault('UTC');

import store from './store';

import App from './components/App.vue';

Object.defineProperty(Vue.prototype, '$moment', {
  get(){return this.$root.moment}
});

export default function(events){

  const initialState = Object.assign(store.state, { events });
  store.replaceState(initialState);

  return new Vue({
    data: {
      moment,
    },
    components:{
      App
    },
    store
  });
}