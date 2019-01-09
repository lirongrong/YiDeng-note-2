"[Toc]"
### JS与QA测试工程师

#### 配置步骤
1. 生成package配置文件
```
npm init -y
```
2. 装karma(开发的时候用到的依赖--save-dev)
```
npm install karma --save-dev
```
3. 运行karma init, 生成karma.conf.js配置文件
```
npm run test
//Which testing framework do you want to use ?
jasmine
//Do you want to use Require.js ?
no
//Do you want to capture any browsers automatically ?
PhantomJS(无头浏览器)
//What is the location of your source and test files ?
enter
//Should any of the files included by the previous patterns be excluded ?
enter
//Do you want Karma to watch all the files and run the tests on change ?
no
```
4.e2e(端对端)做页面的测试，功能测试

#### 包整理
1. 单元测试jestjs(react推出)
```
https://jestjs.io/docs/zh-Hans/getting-started.html
```
2. 第一个错误 jasmine-core 出错
```
npm install karma-jasmine  jasmine-core --save-dev
```
3. 第二个错误 phantomjs 出错
```
npm install phantom --save-dev
npm install --save-dev karma-phantomjs-launcher
```
4. nightwatch 大型项目 
```
http://nightwatchjs.org/
```
5. rize错误
```
Downloading Chromium r609904 - 82.7 Mb [====================] 0.2% 0.0s
```
科学上网 yarn 
6. 阿里f2etest
```
    https://github.com/alibaba/f2etest
    http://shaofan.org/f2etest/
    http://shaofan.org/ui-recorder/
```
7. https://f2etest.net/
8. ui的自动化测试

### IMG 
![Image text](https://raw.githubusercontent.com/lirongrong/YiDeng-note-2/master/0108_qa/imgs.png)