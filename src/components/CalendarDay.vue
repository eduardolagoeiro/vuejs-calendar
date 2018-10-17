<template>
  <div class="day">
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
    }
  }
</script>