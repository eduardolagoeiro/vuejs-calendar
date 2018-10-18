<template>
  <div> 
    <div>
      {{ formattedDate }} 
      <button @click="changeMonth(-1)">-</button>
      <button @click="changeMonth(+1)">+</button>
    </div>
  </div>
</template>

<script>
  import dateHelper from '../utils/dateHelper';

  export default {
    methods: {
      changeMonth(num){
        this.$store.commit('setCurrentMonth', this.month + num );
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
    },
    created(){
      console.log('commit', this.$store.commit);
    }
  }
</script>