<template>
  <div :class="classObject" @click="openEventForm">
    {{day | formatDay}}
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
        this.$store.commit('openEventForm', { screenX, screenY });
      }
    },
    computed: {
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