<template>
  <div class="demo-page">
    <LayoutHeader />
    <DemoList />
    <LayoutFooter />
  </div>
</template>

<script lang="ts">
import { findCourseList } from '@/assets/api/demo';
import { Component, Vue } from 'vue-property-decorator';
import LayoutHeader from '@/components/layout/Header.vue';
import DemoList from '@/components/demo/List.vue';
import LayoutFooter from '@/components/layout/Footer.vue';
import { Route } from 'vue-router';

@Component({
  components: {
    LayoutHeader,
    DemoList,
    LayoutFooter,
  },
})
export default class Demo extends Vue {
  public created() {
    this.$store.dispatch('initDemoPage');
  }
  public mounted() {
    this.findCourseList();
  }
  private findCourseList() {
    const params = {
      pageNumber: 1,
      pageSize: 15,
      longitude: 121.4843088996449,
      latitude: 31.33302964169,
    };
    findCourseList(params)
      .then((res) => {
        const { code, data, msg } = res;
        if (code === 10000) {
          console.log('10000');
        } else if (code === 10001) {
          console.log('10001');
        } else if (code === 10002) {
          console.log('网络异常');
        } else if (code === 500) {
          console.log('网络异常');
        } else {
          return false;
        }
      })
      .catch((err) => {
        console.log(err, '网络异常');
      });
  }
}
</script>
<style lang="less" scoped>
.demo-page {
  overflow: hidden;
  height: 100vh;
}
</style>
