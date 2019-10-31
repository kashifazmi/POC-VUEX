<template>
  <div>
    <div class="nav">
      <span>{{cHome}}</span> |
      <span>{{cAbout}}</span> |
    </div>
    <h2>{{cTitle}}</h2>
    <h3>{{name}} | {{Desc}}</h3>
    <p>
      <input type="submit" value="Submit" @click="callingParentComponentMethod">
      <!-- <input type="submit" value="Submit" v-on:click="callingParentComponentMethod"> -->
    </p>
  </div>
</template>

<script>
export default {
  name: "ChildComponent",
  data() {
    return {
      // cTitle: value
    };
  },
  props: {
    cHome: Number,
    cTitle: String,
    cAbout: String,
    name: String,
    Desc: String
  },
  methods: {
    // This method will call on click on submit button
    callingParentComponentMethod() {
      debugger
      // emit the event and call the parent component
      this.$emit("setParentComponentDetails");
    }
  }
  // props: ["cTitle", "cAbout", "cHome"]
};
</script>

<style scoped>
</style>
