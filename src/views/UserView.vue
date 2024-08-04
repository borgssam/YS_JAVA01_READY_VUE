<template>
  <div>
    <h1>User Profile</h1>
    <div v-if="user">
      <p><strong>Name:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
    </div>
    <div v-else>
      <p>No user data available.</p>
    </div>
    <button @click="fetchUserData">Load User Data</button>
    <button @click="updateUserData">Update User Data</button>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'UserView',
  setup() {
    const store = useStore();

    // Vuex 상태에서 user 데이터 가져오기
    const user = computed(() => store.state.user);

    // 사용자 데이터를 Vuex 스토어에 저장하는 메서드
    const fetchUserData = () => {
      const data = { name: 'John Doe', email: 'john.doe@example.com' };
      store.commit('setUser', data);
    };

    // 사용자 데이터를 업데이트하는 메서드
    const updateUserData = () => {
      const newData = { name: 'Jane Doe', email: 'jane.doe@example.com' };
      store.commit('setUser', newData);
    };

    return {
      user,
      fetchUserData,
      updateUserData
    };
  }
};
</script>

<style scoped>
h1 {
  color: #333;
}
button {
  margin-right: 10px;
}
</style>
