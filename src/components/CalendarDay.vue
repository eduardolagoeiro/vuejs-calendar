<template>
  <div :class="classObject" @click="openEventForm">
    {{day | formatDay}}
    <ul class="event-list">
      <li v-for="(event, index) in events" :key="index">{{event.description}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['day'],
    filters: {
      formatDay(raw){
        return raw.format('D');
      }
    },
    methods:{
      openEventForm(evt){
        const { screenX, screenY } = evt;
        this.$store.commit('openEventForm', { screenX, screenY, date: this.day });
      }
    },
    computed: {
      events(){
        const { events } = this.$store.state;
        return events.filter(evt => evt.date.isSame(this.day, 'day'));
      },
      classObject(){
        const isToday = this.day.isSame(this.$moment(), 'day');
        const isTodayOrBefore = this.day.isSameOrBefore(this.$moment(), 'day');
        const { eventFormActive, currentDate } = this.$store.state;
        return {
          day: true,
          today: isToday,
          past: !isToday && isTodayOrBefore,
          active: eventFormActive && currentDate.isSame(this.day)
        }
      }
    }
  }
</script>