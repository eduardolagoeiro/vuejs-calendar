<template>
  <div :class="classObject">
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