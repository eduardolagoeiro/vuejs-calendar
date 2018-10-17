<template>
  <div>
    <div v-for="week in weeks" :key="week">
      <div v-for="day in week" :key="day">
        {{day}} {{day.day()}}
      </div>
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
      },
      weeks(){
        const weeks = [];
        for(let i = 0, k = 7; i < this.days.length; i += k){
          weeks.push(this.days.slice(i, i+k));
        }
        return weeks;
      }
    }
  }
</script>