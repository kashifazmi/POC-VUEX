// import Vuex from 'vuex';

export default {
  namespaced: true,

  state: {
    posts: []
  },

  mutations: {
    SET_POSTS(state, payload) {
      state.posts = payload
    }
  },
  actions: {
    Get_List(context) {
        debugger
      context.commit('SET_POSTS', 'posts')
    }
  }
}
