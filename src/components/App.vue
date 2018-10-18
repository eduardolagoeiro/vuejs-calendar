<template>
  <div>
    <div id="header">
      <h1>Vue.js Calendar</h1>
      <current-month />
    </div>
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
  import dateHelper from '../utils/dateHelper';
  import CalendarDay from './CalendarDay.vue';
  import CurrentMonth from './CurrentMonth.vue';


  export default {
    computed: {
      month(){
        return this.$store.state.currentMonth;
      },
      year(){
        return this.$store.state.currentYear;
      },
      days(){
        return dateHelper.getDaysFromMonth(this.month, this.year, this.$moment);
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
      CurrentMonth,
    }
  }
</script>