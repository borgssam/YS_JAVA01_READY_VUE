<template>
  <div id="app">
    <MixComp1 />
    <MixComp2 />
  </div>
</template>

<script>
import MixComp1 from '@/components/MixComp1.vue';
import MixComp2 from '@/components/MixComp2.vue';

export default {
  name: 'MixView',
  components: {
    MixComp1,
    MixComp2,
  },
};
</script>

<style>
/* 필요한 스타일 추가 */
</style>
