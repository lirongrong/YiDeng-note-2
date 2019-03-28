/* @flow */

import {
  toArray
} from '../util/index'

export function initUse(Vue: GlobalAPI) {
  // 限制了自定义组件的类型
  Vue.use = function (plugin: Function | Object) {
    //保存注册组件的数组，不存在及创建
    const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
    //保存注册组件的数组，不存在及创建
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }
    // additional parameters
    const args = toArray(arguments, 1)
    //将Vue对象拼接到数组头部
    args.unshift(this)
    //如果组件是对象，且提供install方法，调用install方法将参数数组传入，改变`this`指针为该组件
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args)
      //如果传入组件是函数，这直接调用，但是此时的`this`指针只想为`null` 
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args)
    }
    //在保存注册组件的数组中添加
    installedPlugins.push(plugin)
    return this
  }
}
