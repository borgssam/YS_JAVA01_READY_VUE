<template>
  <div>
    <h2>First Component</h2>
    <p>{{ sharedData }}</p>
    <button @click="sharedMethod">공유 메서드 호출</button>
  </div>
</template>

<script>
import { commonMixin } from '@/mixins/commonMixin';

export default {
  name: 'MixComp1',
  mixins: [commonMixin],
};
</script>

<style scoped>
/* 필요한 스타일 추가 */
</style>
