<template>
  <div id="loading">
    <van-overlay :show="true">
    </van-overlay>
    <div class="loading-wrapper">
      <van-loading type="spinner" size="32px"></van-loading>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    };
  }
};
</script>
<style lang="scss">
#loading{
  display: none;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  .loading-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    .van-loading{
      z-index: 3;
    }
  }
}
</style>
