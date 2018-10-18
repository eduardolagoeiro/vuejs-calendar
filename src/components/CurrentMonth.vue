<template>
  <div> 
    <div> {{ formattedDate }} </div>
    <button @click="dec">-</button>
    <button @click="inc">+</button>
  </div>
</template>

<script>
  import dateHelper from '../utils/dateHelper';

  export default {
    methods: {
      inc(){
        alert('inc');
      },
      dec(){
        alert('dec');
      }
    },
    computed: {
      formattedDate(){
        const todaysMonth = dateHelper.formatDate(this.month, this.year, this.$moment);
        return todaysMonth.format('MMMM YYYY');
      },
      month(){
        return this.$store.state.currentMonth;
      },
      year(){
        return this.$store.state.currentYear;
      },
    }
  }
</script>