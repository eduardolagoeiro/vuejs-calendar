<template>
  <div
    id="event-form"
    :class="{ active: isActive }"
    :style="{ top: top, left: left }">
    <h4>Add an event</h4>
    <button id="close-button" @click="closeEventForm">&#10005;</button>
  </div>
</template>

<script>
export default {
  computed: {
    isActive(){
      return this.$store.state.eventFormActive;
    },
    top(){
      return this.$store.state.formTop +'px';
    },
    left(){
      return this.$store.state.formLeft +'px';
    }
  },
  methods: {
    closeEventForm(){
      this.$store.commit('closeEventForm');
    }
  }
}
</script>