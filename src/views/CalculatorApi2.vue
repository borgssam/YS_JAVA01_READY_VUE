<template>
  <div class="">
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model="state.num1"> <span>+</span>
      <input type="text" v-model="state.num2"> <span>=</span>
      <span>{{ state.result }}</span>
    </div>
    
  </div>
</template>

<script>
import {reactive, computed } from 'vue'; //reactive추가
export default {
  name: 'CalculatorApi2',
  setup(){
    let state = reactive({
      num1:0,
      num2:0,
      result: computed(() => parseInt(state.num1) + parseInt(state.num2)),
    }
    );

    return {
      state
    }

  },
  data() {
    return ;
  },
  methods: {
  }
};
</script>

<style scoped>

</style>