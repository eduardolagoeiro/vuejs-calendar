<template>
  <div :class="classObject" @click="openEventForm">
    {{day | formatDay}}
    <ul class="event-list">
      <li v-for="(event, index) in events" :key="index">Random event</li>
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
        const day = parseInt(evt.target.innerHTML.trim());
        this.$store.commit('openEventForm', { screenX, screenY, day });
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
        return {
          day: true,
          today: isToday,
          past: !isToday && isTodayOrBefore
        }
      }
    }
  }
</script>