<template>
  <div class="demo-detail-page">
    <div class="wrapper">
      <LayoutHeader />
      <Detail />
      <LayoutFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Detail from '@/components/demo/Detail.vue';
import LayoutHeader from '@/components/layout/Header.vue';
import LayoutFooter from '@/components/layout/Footer.vue';
import { Route } from 'vue-router';

@Component({
  components: {
    Detail,
    LayoutHeader,
    LayoutFooter,
  },
})
export default class DemoDetail extends Vue {
  public created() {
    this.$store.dispatch('initDemoDetailPage');
  }
}
</script>
<style lang="less" scoped>
.demo-detail-page {
  overflow: hidden;
  height: 100vh;
}
</style>
