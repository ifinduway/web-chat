export default {
  namespaced: true,
  state: {
    user: {
      name: '',
      color: '',
    },
    messages: [],
  },
  mutations: {
    SET_MSG: (state, payload) => {
      state.messages = [...state.messages, payload];
    },
    SET_USER: (state, payload) => {
      state.user.name = payload;
    },
    SET_CLR: (state, payload) => {
      console.log(payload);
      state.user.color = payload;
    },
  },
  getters: {
    GET_MESSAGES: (state) => state.messages,
    GET_USER: (state) => state.user,
  },

  actions: {
    PUSH_MSG({ commit }, payload) {
      commit('SET_MSG', payload);
    },
    PUSH_USER({ commit }, payload) {
      commit('SET_USER', payload);
    },
    PUSH_CLR({ commit }, payload) {
      commit('SET_CLR', payload);
    },
  },
};
