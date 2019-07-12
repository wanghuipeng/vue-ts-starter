<template>
  <div class="demo-list" @click="toDetail">列表</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class DemoList extends Vue {
  private toDetail() {
    this.$router.push({ name: 'demoDetail' });
  }
}
</script>

<style lang="less" scoped>
</style>
