// npm install vuex-persistedstate
// npm install vuex-persistedstate
import { createStore } from 'vuex';
import persistedstate from 'vuex-persistedstate';

const store = createStore({
  state() {
    return {
      user: {}  // 사용자 정보를 저장할 상태
    };
  },
  mutations: {
    setUser(state, data) {
      state.user = data;  // 사용자 데이터를 업데이트하는 mutation
    }
  },
  plugins: [
    persistedstate({
      paths: ['user']  // 로컬 스토리지에 저장할 상태 경로
    })
  ]
});

export default store;
