<template>
  <div>
    <span ref="jsplugin"></span>
  </div>
</template>
<script>
import Vue from "vue";
import test from "../plugins/test";
Vue.use(test);
export default {
  mounted() {
    this.$refs.jsplugin.innerHTML = this.$msg;
    this.$myMethod();
  }
};
</script>
