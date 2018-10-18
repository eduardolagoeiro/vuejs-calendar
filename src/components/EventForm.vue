<template>
  <div
    id="event-form"
    :class="{ active: isActive }"
    :style="{ top: top, left: left }">
    <h3>{{dateClicked}}</h3>
    <h4>Add an event</h4>
    <div class="text">
      <p v-show="error.length > 0">{{error}}</p>
      <input
        v-on:keyup.esc="closeEventForm"
        v-on:keyup.enter="create"
        id="desc"
        v-focus
        type="text"
        v-model="description">
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
      error: '',
    }
  },
  computed: {
    dateClicked(){
      this.error = '';
      return this.$store.state.currentDate.format('MMMM, YYYY Do');
    },
    isActive(){
      return this.$store.state.eventFormActive;
    },
    top(){
      return this.$store.state.formTop - 100 +'px';
    },
    left(){
      return this.$store.state.formLeft + 100 +'px';
    }
  },
  watch: {
    description(){
      this.error = '';
    }
  },
  methods: {
    closeEventForm(){
      this.error = '';
      this.$store.commit('closeEventForm');
    },
    create(){
      if(this.description.length === 0){
        this.error = 'Type something.';
        return;
      }
      this.$store.dispatch('addEvent', {
        description: this.description
      });
      this.$store.commit('closeEventForm');
      this.description = '';
    }
  }
}
</script>