import Vue from 'vue';

import store from './store';

Vue.directive('focus', {
  update: function (el) {
    el.focus()
  }
})

import moment from 'moment-timezone';
moment.tz.setDefault('UTC');

import App from './components/App.vue';

Object.defineProperty(Vue.prototype, '$moment', {
  get(){return this.$root.moment}
});

export default function(events){

  let initialState = Object.assign(store.state, { events });
  store.replaceState(initialState);

  return new Vue({
    data: {
      moment,
    },
    components:{
      App
    },
    store,
    render(createElement){
      return createElement(
        'div',
        { attrs: { id: 'app' }},
        [
          createElement('app')
        ]
      );
    }
  });
}