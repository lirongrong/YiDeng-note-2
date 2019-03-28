// //类型推断
declare let num: number | string;
num = "1";
console.log(num);
//================================
//自定义的类型推断
type Fruit = "apple" | "orange";
type Color = "red" | "orange";
declare let yideng: Fruit & Color;
yideng = "orange";
console.log(yideng);
//================================
//泛型
function identity<T>(arg: T): T {
  return arg;
}
let output = identity<string>("myString");
console.log(output);
//================================
//数组的泛型
let list: Array<number> = [1, 2, 3];
console.log(list);
//对泛型开启类型推断
//================================
function extend<T, U>(first: T, second: U): T & U {
  let result = <T & U>{};

  for (let id in first) {
    (<any>result)[id] = (<any>first)[id];
  }

  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      (<any>result)[id] = (<any>second)[id];
    }
  }

  return result;
}

class AdvancedTypesClass {
  constructor(public name: string) {}
}

interface LoggerInterface {
  log(): void;
}

class AdvancedTypesLoggerClass implements LoggerInterface {
  log(): void {
    console.log("📚输出日志");
  }
}

var logger = new AdvancedTypesLoggerClass();

var extend1 = extend(
  new AdvancedTypesClass("京程一灯"),
  new AdvancedTypesLoggerClass()
);
var e = extend1.name;
console.log(e);
extend1.log();
