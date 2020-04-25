<!-- 拖拽滑动 -->
<template>
  <div style="touch-action: none;width: 33px;">
    <div
      id="drag_ball"
      @click="goHome"
      @touchstart="start"
      @touchmove="move"
    >
    </div>
  </div>
</template>

<script>
export default {
  name: 'drag',
  data() {
    return {
      position: { x: 0, y: 0 },
      dx: '',
      dy: ''
    };
  },
  methods: {
    goHome() {
      this.$emit('goHome');
    },
    // 实现移动端拖拽
    start(event) {
      const dragElement = document.querySelector('#drag_ball');
      let touch;
      if (event.touches) {
        // eslint-disable-next-line prefer-destructuring
        touch = event.touches[0];
      } else {
        touch = event;
      }
      this.maxW = document.body.clientWidth - dragElement.offsetWidth;
      this.maxH = document.body.clientHeight - dragElement.offsetHeight;

      this.position.x = touch.clientX - dragElement.offsetLeft;
      this.position.y = touch.clientY - dragElement.offsetTop;
    },
    move(event) {
      const dragElement = document.querySelector('#drag_ball');
      let touch;
      if (event.touches) {
        // eslint-disable-next-line prefer-destructuring
        touch = event.touches[0];
      } else {
        touch = event;
      }
      this.dx = touch.clientX - this.position.x;
      this.dy = touch.clientY - this.position.y;

      if (this.dx < 0) {
        this.dx = 0;
      } else if (this.dx > this.maxW) {
        this.dx = this.maxW;
      }

      if (this.dy < 0) {
        this.dy = 0;
      } else if (this.dy >= this.maxH) {
        this.dy = this.maxH;
      }

      dragElement.style.left = `${this.dx}px`;
      dragElement.style.top = `${this.dy}px`;
    }
  }
};
</script>
<style scoped lang="scss">
  #drag_ball {
    width: 33px;
    height: 33px;
    position: fixed;
    z-index: 1;
    bottom: 20px;
    right: 10px;
    background: url('../assets/images/home.png') no-repeat;
    background-size: cover;
  }
</style>
