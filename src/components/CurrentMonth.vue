<template>
  <div> {{ formattedDate }} </div>
</template>

<script>
  import dateHelper from '../utils/dateHelper';

  export default {
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