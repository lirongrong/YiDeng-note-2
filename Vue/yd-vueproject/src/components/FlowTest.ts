//类型推断
//类型设置
//泛型
function identity<T>(arg: T): T {
    return arg;
}
let output = identity<string>("myString");  
console.log(output);