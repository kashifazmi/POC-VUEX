<template>
  <div>
    <p>the kind component {{count}}</p>
  </div>
</template>

<script>
// Import the EventBus.
import { EventBus } from "./event-bus.js";
import Vue from 'vue';

export default {
  name: 'thekindscript',
  data() {
    return {
     count: null
    }
  },
  mounted() {
    debugger
    // Listen for the i-got-clicked event and its payload.
    EventBus.$on("i-got-clicked", clickCount => {
      debugger;
      console.log(`Oh, that's nice. It's gotten ${clickCount} clicks! :)`);
      this.count = clickCount
    });
  }
};
</script>

<style scoped>
</style>