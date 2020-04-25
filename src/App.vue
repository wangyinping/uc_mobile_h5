<template>
  <div id="app">
    <Loading></Loading>
    <router-view></router-view>
  </div>
</template>

<script>
import Loading from '@/components/loading';

export default {
  name: 'app',
  components: {
    Loading
  }
};
</script>

<style>
</style>
