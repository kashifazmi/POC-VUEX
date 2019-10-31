import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

export const store = new Vuex.Store({
  // declare state of application - data of application 
  state: {
    products: [{
        name: 'IBM',
        marketValue: '10k'
      },
      {
        name: 'Barclays',
        marketValue: '20k'
      },
      {
        name: 'Capgemini',
        marketValue: '40k'
      },
      {
        name: 'TCS',
        marketValue: '80k'
      },
      {
        name: 'CTS',
        marketValue: '80k'
      },
      {
        name: 'Siemens',
        marketValue: '100k'
      }
    ]
  },
  // if sometimes you need to change the state then no need to go each and evry component and change it.
  getters: {
    CategProducts: state => {
      var catP = state.products.map(product => {
        return {
          name: "**" + product.name + "**",
          marketValue: "**" + product.marketValue + '**'
        };
      });
      return catP;
    },
    countOfmarketValue: state => {
      return state.products.filter(item => item.marketValue).length
    },
    countOf80K1: state => (payload) => {
      return state.products.filter(item => item.marketValue === payload).length
    },
    countOf80K: state => {
      return state.products.filter(item => item.marketValue === '80k').length
    }
  },
  // if you want to change the state then need to use below steps
  mutations: {
    changeMarketValue: (state, payload) => {
      state.products.forEach(item => {
        item.marketValue = item.marketValue + '-' + payload.name
      })
    },
    updateActions: (state) => {
      console.log('mutations value', state.products);
    }
  },
  actions: {
    AddAction({
      commit
    }) {
      commit('updateActions');
      console.log('actions called');
    }
  }
})
