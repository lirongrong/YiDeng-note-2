let test = {}
test.install = function (Vue, options) {
  Vue.prototype.$msg = '🍎插件测试成功'
  Vue.prototype.$myMethod = function (arr) {
    console.log("🍌插件方法调试成功");
  }
}
export default test
