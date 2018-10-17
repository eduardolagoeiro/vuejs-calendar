<template>
  <div>
    <div id="day-bar">
      <div>Mon</div>
      <div>Tue</div>
      <div>Wed</div>
      <div>Thu</div>
      <div>Fri</div>
      <div>Sat</div>
      <div>Sun</div>
    </div>
    <div id="calendar">
      <div v-for="week in weeks" :key="week" class="calendar-week">
        <calendar-day v-for="day in week" :key="day" :day="day">
          
        </calendar-day>
      </div>
    </div>
  </div>
</template>

<script>
  import getDaysFromMonth from '../utils/dateHelper';
  import CalendarDay from './CalendarDay.vue';

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
    },
    components: {
      CalendarDay,
    }
  }
</script>