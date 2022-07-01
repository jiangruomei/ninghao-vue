import { createStore } from 'vuex';

/**
 * 创建 Store
 */
const store = createStore({
  state: {
    name: '',
  },

  getters: {
    name(state) {
      return `🎈 ${state.name}`;
    },
  },

  mutations: {
    setName(state, data) {
      state.name = data;
    },
  },

  actions: {
    getName({commit,dispatch}) {
      const name = '宁皓网';
      commit('setName', name);
      dispatch('preProcess');
      // context.commit('setName', name);
      // console.log(context);
    },
    preProcess(){
      console.log('执行预处理动作...');
    }
  },
});

export default store;
