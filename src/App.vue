<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <Loading :loading="$store.state.pageLoad" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Loading from '@/components/layout/Loading.vue';

@Component({
  components: {
    Loading,
  },
})
export default class App extends Vue {
  public beforeMount() {
    console.log('');
  }
}
</script>

<style lang="less">
</style>
