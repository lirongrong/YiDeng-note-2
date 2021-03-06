[toc]

### 持续集成

**什么是持续集成 Continuous integration（CI）**

在持续集成环境中，开发人员将会频繁的提交代码到主干。这些新提交在最终合并到主线之前，都需要通过编译和自动化测试流进行验证。这样做是基于之前持续集成过程中很重视自动化测试验证结果，以保障所有的提交在合并主干之后的质量问题，对可能出现的一些问题进行预警。

**持续交付 Continuous delivery（CD）**

持续交付就是讲我们的应用发布出去的过程。这个过程可以确保我们尽可能快的实现交付。这就意味着除了自动化测试，我们还需要有自动化的发布流，以及通过一个按键就可以随时随地实现应用的部署上线。

通过持续交付，您可以决定每天，每周，每两周发布一次，这完全可以根据自己的业务进行设置。

但是，如果您真的希望体验持续交付的优势，就需要先进行小批量发布，尽快部署到生产线，以便在出现问题时方便进行故障排除。

**持续部署 Continuous deployment（CD）**

如果我们想更加深入一步的话，就是持续部署了。通过这个方式，任何修改通过了所有已有的工作流就会直接和客户见面。没有人为干预（没有一键部署按钮），只有当一个修改在工作流中构建失败才能阻止它部署到产品线。

持续部署是一个很优秀的方式，可以加速与客户的反馈循环，但是会给团队带来压力，因为不再有“发布日”了。开发人员可以专注于构建软件，他们看到他们的修改在他们
完成工作后几分钟就上线了。基本上，当开发人员在主分支中合并一个提交时，这个分支将被构建、测试，如果一切顺利，则部署到生产环境中。

**持续集成需求**
1. 持续集成是通过平台串联各个开发环节，实现和沉淀工作自动化的方法。

2. 线上代码和代码仓库不同步，影响迭代和团队协作。
3. 静态资源发布依赖人工，浪费开发人力
4. 缺少自动化测试，产品质量得不到保障
5. 文案简单修改上线，需要技术介入

**持续集成工作流程图**

![](https://user-gold-cdn.xitu.io/2019/3/12/169722c09ef6ced9?w=1842&h=1400&f=png&s=889386)

**持续集成核心**
1. 统一代码仓库通过分支管理合并主干git
2. 自动化构建工具，编译、部署、测试、监控、本机开发上线环境。FIS3/Webpack/jdists/package.json/chai/supertest/mocha/selenium-webdriver
3. 持续集成平台。Jenkins、Travis CI
4. 部署工具。rsync、shelljs、yargs
5. 运营同学有权限操作运营页面保存即可上线


### 统一代码仓库
统一代码仓库多分支开发（Subversion Git）

**svn开发阶段图，git也类似**

![](https://user-gold-cdn.xitu.io/2019/3/12/1697242d92950e30?w=1612&h=1038&f=png&s=2689709)


**合成步骤**
1. svn checkout svn地址 --username 用户名
2. svn branch 分支名（add/commit）
3. svn merge 主干svn地址 分支svn地址
4. Beyond Compare -> svn　resolved
5. svn copy 主干SVN地址 /tags/2017

**贴shell的一小段用法**
```
var shell = require("shelljs");
shell.exec("echo hello " + name);
require(‘shelljs/global');
//mkdir(‘-p’, ‘out/Release');
if (exec(‘svn branch xxx').code !== 0) {
    echo('Error:Svn Branch failed');
    exit(1);
}
```

### 前端工程化
Front-end engineering

**前端工程化目标**
- 自动化编译
- 前端模块化
- 定位静态资源
- 前端开发组件化
- 自动化部署测试配合版本库
- 自动化性能优化

#### 自动化编译流程
```
-> 读入foo.es的文件内容，编译成js内容
-> 分析js内容，找到资源定位标记 'foo.scss'
-> 对foo.scss进行编译：
-> 读入foo.scss的文件内容，编译成css内容
-> 分析css内容，找到资源定位标记 ``url(foo.png)``
-> 对 foo.png 进行编译：
-> 读入foo.png的内容
-> 图片压缩
-> 返回图片内容
-> 根据foo.png的最终内容计算md5戳，替换url(foo.png)为url(/static/img/foo_2af0b.png)
-> 替换完毕所有资源定位标记，对css内容进行压缩
-> 返回css内容
-> 根据foo.css的最终内容计算md5戳，替换'foo.scss'为 '/static/scss/foo_bae39.css'
-> 替换完毕所有资源定位标记，对js内容进行压缩
-> 返回js内容
-> 根据最终的js内容计算md5戳，得到foo.coffee的资源url为 '/static/scripts/foo_3fc20.js'
```

#### 前端模块化

前端模块化框架肩负着模块管理、资源加载两项重要的功能，这两项功能与工具、性能、业务、部署等工程环节都有着非常紧密的联系。因此，模块化框架的设计应该最高优先级考虑工程需要。

CommonJS API定义很多普通应用程序（主要指非浏览器的应用）使用的API，从而填补了这个空白。它的终极目标是提供一个类似Python，Ruby和Java标准库,根据这个规范，每个文件就是一个模块，有自己的作用域。在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见

CMD和AMD都是CommonJS的一种规范的实现定义，RequireJS和SeaJS是对应的实践

#### AMD

AMD是一种依赖先行的模块化规范，就是首先定义依赖项，然后再进行编写模块化代码。
```
//AMD(Asynchronous Module Definition)
define(['dep1','dep2'],function(dep1,dep2){
    //内部只能使⽤用指定的模块
    return function(){};
});
```
在代码执行之前，AMD会判断所有需要的依赖，首先请求过来。
```
//1.js
define(['2.js'],function(dep){
    //code
    return;
})
//2.js
define(['3.js'],function(dep){
    //code
    return 2;
})
//3.js
define([],function(){
    return 3;
})
```
上面代码的加载和执行顺序为：

加载顺序：1.js->2.js->3.js

执行顺序：3.js->2.js->1.js

#### CMD
CMD是一种依赖后置的模块加载方式。也就是说按需加载，当需要什么模块的时候，就加载什么模块。
```
define(function(require,exports,module){
    //此处如果需要加载某XX模块，可以引⼊入
    var xx=require(‘XX’);
});
```
看下面的试例
```
//1.js
define(function(require,exports,module){
    var module2 = require('2.js'); 
})
//2.js
define(function(require,exports,module){
    var module3 = require('3.js');
})
//3.js
define(function(require,exports,module){
    return 3;
})
```
首先CMD会解析代码，判断出有使用require，首先把所需要的模块全部都请求过来。然后执行1.js，当执行到require(‘2.js’)的时候，加载2.js,执行2.js中的代码，当执行到require(‘3.js’)的时候，加载3.js，3.js执行完毕返回2.js,2.js执行完毕返回1.js，1.js执行完毕，执行结束。

#### AMD和CMD的优缺点
1. CMD 依赖是就近声明，通过内部require方法进行声明。但是因为是异步模块，加载器需要提前加载这些模块，所以模块真正使用前需要提取模块里面所有的依赖。
2. 不能直接压缩,require局部变量如果替换无法加载资源
3. CMD路径参数不能进行字符串运算。
4. AMD的依赖是提前声明。这种优势的好处就是依赖无需通过静态分析，无论是加载器还是自动化工具都可以很直接的获取到依赖。
5. AMD依赖提前声明在代码书写上不是那么友好。
6. AMD模块内部与 NodeJS 的 Modules 有一定的差异。

#### webpack

1. Webpack执行CommonJS标准,解决了依赖配置和请求流量。
2. 对于Webpack来讲万物都可以是模块，所有的文件都被合并到JS中，最终在浏览器。
3. 兼容AMD与CMD。
4. JS模块化不仅仅为了提高代码复用性，更是为了让资源文件更合理地进行缓存。

#### 静态资源定位
浏览器会对资源进行缓存，更新过css可能没有及时跟新，为了防止资源没有被更新，用版本管理机制，

最早之前用发：?v=1,每次发布都要手动修改版本号，或者加?v=md5

![](https://user-gold-cdn.xitu.io/2019/3/12/1697274edb8918d1?w=1774&h=1258&f=png&s=1786286)
但是还有个问题，同时改动html和css，当发布的时候两者不能保证同时上线，所以把md5戳加在文件夹命名后面，这样之后服务器上会有大量的带有md5的文件，才能发布不会出现错乱。

![](https://user-gold-cdn.xitu.io/2019/3/12/1697279bf9182577?w=1390&h=1012&f=png&s=511852)

#### 资源定位好处
1. 配置超长时间的本地缓存 — 节省带宽，提高性能
2. 采用内容摘要作为缓存更新依据— 精确的缓存控制
3. 静态资源CDN部署—— 优化网络请求
4. 更资源发布路径实现非覆盖式发布 — 平滑升级

#### webpck中资源定位的做法
1. FIS3根据分析好的文件包，利用HOOK插件
//分析下FIS的生成的配置文件
2. Webpack在开发阶段打包，利用插件分析处直接提取。FileLoader&&extract-textwebpack-plugin。
3. 配置publicpath分发到CDN.

#### 开发组件化
1. 每一个前端模块都是一个小项目,配合mock.js可以进行本地的开发测试，package.json是标配产物。经过webpack的环境配置统一进行本地环境、上线环境的编译过程。
2. 由page组装widget,由widget组装WebComponents（X-TAG）。
3. 能够根据路由快速抉择配置SPA或者直出。

#### 开发组件化的核心
1. Custom Elements
2. HTML Imports
3. HTML Templates
4. Shadow DOM

### 自动化部署

自动化部署的工具：
jekins和travis cli

### 更多自动化
More Automation

不把任务交给机器一定是假程序员
1. 自动化运营平台
2. 自动化雪碧图
3. 自动化离线打包
4. 自动化控制缓存级别
5. 自动化处理Inline
6. 自动化根据网速分发版本资源
7. 自动化运维平台
