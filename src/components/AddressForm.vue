<template>
  <div>
    <form class="reactive-form">
      <p>
        <label for="name">Name:</label>
        <input v-model="name">
      </p>
      <p>
        <label for="address">Address:</label>
        <textarea v-model="address"></textarea>
      </p>
      <p>
        <label for="contact">Contact:</label>
        <input v-model="contact">
      </p>
      <p>
        <label for="Rating">Rating:</label>
        <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </p>
      <p>
        <input type="submit" value="Submit" @click="SubmitDetails">
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddressForm",
  data() {
    return {
      name: null,
      address: null,
      contact: null,
      rating: null
    };
  },
  methods: {
    SubmitDetails() {
      let userDetails = {
          name: this.name,
          address: this.address,
          contact: this.contact,
          rating: this.rating
      };
      this.$emit('user-details-from', userDetails);
    }
  }
};

</script>

<style scoped>
</style>