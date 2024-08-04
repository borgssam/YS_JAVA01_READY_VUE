import{createStore} from 'vuex'

import persistedstate from 'vuex-persistedstate';
const store = createStore(
{

  state(){return{user:{}}},
  mutatations:user(state,data){state.user = data;},
  plugins:[ persistedstate((paths:['user']))]

}

);
export default store;