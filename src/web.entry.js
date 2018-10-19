import './style.scss';
import moment from 'moment-timezone';
moment.tz.setDefault('UTC');

const events = __EVENTS__.map(evt=>Object.assign(evt, { date: moment(evt.date) }));

import VueCalendar from './entry';

VueCalendar(events).$mount('#app');