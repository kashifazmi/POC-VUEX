<template>
  <div>
    <h1>{{pTitle}}</h1>
    <ChildComponent
      cTitle="Welcome to Child Components"
      cAbout="About"
      v-bind:cHome="HomeAddress"
      v-bind:name="author.name"
      v-bind:Desc="author.Desc"
      @setParentComponentDetails="setDetailsForComponent"
    ></ChildComponent>
    <AddressForm @user-details-from="addDetails"></AddressForm>
    <span>=====================================================</span>
    <table>
      <th>Display User Details:</th>
      <tr>
        <td>name</td>
        <td>contact</td>
        <td>rating</td>
        <td>address</td>
      </tr>
      <tr v-for="(item, index) in userDetails" :key="index">
        <td>{{item.name}}</td>
        <td>{{item.contact}}</td>
        <td>{{item.rating}}</td>
        <td>{{item.address}}</td>
      </tr>
    </table>
    {{posts}}
  </div>
</template>

<script>
import { mapState } from "vuex";
import AddressForm from "./AddressForm.vue";
import ChildComponent from "./ChildComponent.vue";
import { CommonApiCall } from "@/services/api/CommonApiCall";
export default {
  name: "ParentComponent",
  data() {
    return {
      pTitle: "Welcome to Parent Component",
      HomeAddress: (Number = 1),
      author: {
        name: "Kashif",
        Desc: "ABC"
      },
      userDetails: []
    };
  },
  components: {
    ChildComponent,
    AddressForm
  },
  methods: {
    addDetails(userDetails) {
      this.userDetails.push(userDetails);
    },
    setDetailsForComponent() {
      debugger;
      // Called by child component
      console.log("Calling from child component");
    }
  },
  computed: {
    ...mapState({
      posts: "CommonApiCall/posts"
    })
  },
  created() {
    this.$store.dispatch("CommonApiCall/Get_List")
    // .then(() => {
    //   console.log('lsit of data inside created');
      
    // });
  }
};
</script>

<style scoped>
</style>
