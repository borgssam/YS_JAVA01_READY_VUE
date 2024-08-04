<template>
  <div>
    <h2>Second  Component</h2>
    <p>{{ sharedData }}</p>
    <button @click="sharedMethod">공유 메서드 호출</button>
  </div>
</template>

<script>
import { commonMixin } from '@/mixins/commonMixin';

export default {
  name: 'MixComp2',
  mixins: [commonMixin],
};
</script>

<style scoped>
/* 필요한 스타일 추가 */
</style>
