<template>
  <div class="picker-box">
    <van-field
      readonly
      clickable
      v-bind="$props"
      class="van-picker"
      @click="showPicker = true"
    ></van-field>
    <van-popup
      v-model="showPicker"
      position="bottom"
    >
      <van-picker
        :value-key="valueKey"
        show-toolbar
        :columns="dataList"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      ></van-picker>
    </van-popup>
  </div>
</template>
<script>
export default {
  name: 'picker',
  props: {
    name: String,
    value: [String, Number],
    label: String,
    placeholder: String,
    valueKey: String,
    dataList: {
      type: Array,
      default() {
        return [];
      }
    },
    rules: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      showPicker: false
    };
  },
  methods: {
    onConfirm(val) {
      this.$emit('input', val[this.valueKey])
      this.$emit('change', val)
      this.showPicker = false;
    }
  }
};

</script>
<style lang="scss">
  .picker-box{
    .van-picker{
      .van-field__value::after{
        position: absolute;
        content: '';
        height: 12px;
        width: 12px;
        border:  solid #666666;
        border-width: 2px 2px 0 0;
        transform: translate(-50%, -50%) rotate(45deg);
        top: 50%;
        right: 10px;
      }
    }
    .van-cell::after {
      position: absolute;
      box-sizing: border-box;
      content: ' ';
      pointer-events: none;
      right: 0;
      bottom: 0;
      left: 0;
      border-bottom: 1px solid #DDDDDD;
      -webkit-transform: scaleY(.5);
      transform: scaleY(.5);
    }
    .van-ellipsis {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      direction: rtl;
    }
    .van-field__control{
      padding-right: 30px;
    }
  }
</style>
