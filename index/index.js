var arr = ['12','2','3','4']
arr.sort()
var num = arr[arr.length-1];
console.log(arr);
console.log(num);
rrSort(arr);
function rrSort(arr){
    for(var i=0; i<arr.length; i++){
        console.log(i);
    }
}