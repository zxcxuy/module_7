const arr = [7,8,1,3,1,4,8,8,9,1,6,5,4,3,2,1];
const set = new Set(arr);
const newArr = Array.from(set);
function mySort(a, b){return a-b}
newArr.sort(mySort);
console.log(newArr)