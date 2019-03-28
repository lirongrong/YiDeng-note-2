<template>
  <div>
    Home组件
    <hr>
    <input type="text" v-model="info">
  </div>
</template>
<script>
export default {
  data() {
      return {
          info:"缓存组件"
      }
  },
  beforeCreate() {
    console.log("1️⃣Vue实例初始化完成");
  },
  created() {
    console.log("2️⃣Vue实例创建完成");
  },
  beforeMount() {
    console.log("3️⃣挂载准备开始挂载");
  },
  mounted() {
    console.log("4️⃣实例挂载完成");
  },
  beforeUpdate() {
    console.log("数据更新时调用");
  },
  beforeUpdate() {
    console.log("数据更新时调用");
  },
  activated() {
    console.log("5️⃣keep-alive组件已被激活");
  },
  deactivated() {
    console.log("6️⃣keep-alive组件停用");
  },
  beforeDestroy() {
    console.log("组件销毁前");
  },
  destroyed() {
    console.log("销毁完成");
  }
  //errorCaptured错误监听 配合前端性能监控
};
</script>
