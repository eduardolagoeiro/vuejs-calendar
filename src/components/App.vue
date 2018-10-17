<template>
  <div>
    <div v-for="day in days" :key="day">
      {{day}} {{day.day()}}
    </div>
  </div>
</template>

<script>
  import getDaysFromMonth from '../utils/dateHelper';

  export default {
    data() {
      return {
        month: 10,
        year: 2018
      }
    },
    computed: {
      days(){
        return getDaysFromMonth(this.month, this.year, this.$moment);
      }
    }
  }
</script>