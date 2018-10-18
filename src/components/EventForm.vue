<template>
  <div
    id="event-form"
    :class="{ active: isActive }"
    :style="{ top: top, left: left }">

  </div>
</template>

<script>
export default {
  computed: {
    isActive(){
      return true;
    },
    top(){
      return this.$store.state.formTop +'px';
    },
    left(){
      return this.$store.state.formLeft +'px';
    }
  }
}
</script>