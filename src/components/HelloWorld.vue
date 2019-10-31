<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span>navigate to parent component</span>::
    <router-link to="parentcomponent">Parent-Component</router-link>
    <span>navigate to new page::</span>
    <router-link to="pleaseclickme">pleaseclickme</router-link>
    <span>countOfmarketValue:</span><strong><span>{{countOf80K}}</span></strong>
    <ul>
      <!-- <li v-bind:v-for="(item, index) in products" :key="index"> -->
      <li v-for="item in productsAlias">
        <span>{{item.name}}</span> ||
        <span>{{item.marketValue}}</span>
      </li>
    </ul>
    <button @click="changeMarketValue">change marketValue</button>
    <button @click="actionMethodPerform">Action Method</button>   
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import CommonApiCall from "@/services/api/CommonApiCall";
import axios from 'axios';
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      msg1: "kashif",
      posts:[]
    };
  },
   // Fetches posts when the component is created.
  created() {
    axios.get(`https://reqres.in/api/users?page=2`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
      console.log(this.posts);
      
    })
    .catch(e => {
      this.errors.push(e)
    })

    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
  },
  // computed: {
  //   products() {
  //     return this.$store.state.products;
  //   },
  //   CategProductsTobeDisplay() {
  //     // var CatProd = this.$store.state.products.map(product => {
  //     //   return {
  //     //     name: "**" + product.name + "**",
  //     //     marketValue: "**" + product.marketValue + '**'
  //     //   };
  //     // });
  //     // return CatProd

  //     //  == name should be same as getter
  //     return this.$store.getters.CategProducts;
  //   }
  // },
  // computed: mapState({
  //   products: state => state.products,
  //   productsAlias: "products",
  //   addValue(state) {
  //     return state.products
  //   }
  // }),
  computed: {
    localcomputedProp() {
      return this.$store.state.products;
    },
    ...mapState({
      productsAlias: "products"
    }),
    ...mapGetters(["countOf80K"]),
    countOfmarketValue() {
      return this.$store.getters.countOf80K("80k");
    }
  },  
  methods: {
    // changeMarketValue() {
    //   this.$store.state.products.forEach(item => {
    //     item.marketValue = item.marketValue + '-' + "URO";
    //   });
    // }

    // ==============OR==============Alternate way===good way to do with debugging in extension tool
    changeMarketValue() {
      this.$store.commit({
        type: "changeMarketValue",
        name: "URO"
      });
      // this.$store.commit("changeMarketValue", 'URO');
    },
    actionMethodPerform() {
      this.$store.dispatch("AddAction");
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
