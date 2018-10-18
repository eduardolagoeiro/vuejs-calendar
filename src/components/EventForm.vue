<template>
  <div
    id="event-form"
    :class="{ active: isActive }"
    :style="{ top: top, left: left }">
    <h3>{{dateClicked}}</h3>
    <h4>Add an event</h4>
    <div class="text">
      <input v-on:keyup.enter="create" id="desc" v-focus type="text" v-model="description">
    </div>
    <div class="buttons">
      <button @click="create">Create</button>
    </div>
    <button id="close-button" @click="closeEventForm">&#10005;</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      description: '',
    }
  },
  computed: {
    dateClicked(){
      return this.$store.state.currentDate.format('YYYY-M-D');
    },
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
    },
    create(){
      this.$store.commit('createNewEvent', {
        description: this.description
      });
      this.$store.commit('closeEventForm');
      this.description = '';
    }
  }
}
</script>