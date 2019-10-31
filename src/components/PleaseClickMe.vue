<template>
  <div class="pleeease-click-me">
    <button @click="emitGlobalClickEvent">Please Click me</button>
      <span>navigate to new page::</span><router-link to="thekindscript">thekindscript</router-link>
  </div>
</template>

<script>
// Import the EventBus we just created.
import { EventBus } from "./event-bus.js";

export default {
    name:'PleaseClick',
  data() {
    return {
      clickCount: 0
    };
  },
  methods: {
    emitGlobalClickEvent() {
      debugger;
      this.clickCount++;
      // Send the event on a channel (i-got-clicked) with a payload (the click count.)
      EventBus.$emit("i-got-clicked", this.clickCount);
    }
  }
};
</script>

<style scoped>
</style>