<template>
  <div>
    <div v-for="day in days" :key="day">
      {{day}}
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        month: 10,
        year: 2018
      }
    },
    methods: {
      getDaysFromMonth(){
        let days = []
        let currentDay = this.$moment(
          `${this.year}-${this.month}-1`,
          'YYYY-M-D'
        );
        do {
          days.push(currentDay);
          currentDay = this.$moment(currentDay).add(1, 'days');
        } while(currentDay.month()+1 === this.month);
        return days;
      }
    },
    computed: {
      days(){
        return this.getDaysFromMonth();
      }
    }
  }
</script>