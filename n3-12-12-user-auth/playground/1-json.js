// let a ={
//     username: 'nikhil',
//     password :'12357454',
//     address :{
//         state :'telangana',
//         pincode :{
//             country:{
//                 rangareddy: true
//             }
//         }
//     }
// }
// var deepObject = function(a){for(let key in a){
//     if(Object.prototype.toString.call(a[key])=='[object Object]'){
//         console.log(key)

//         deepObject(a[key])// for(let ck in a[key]){
//         // console.log(a[key][ck])
//         // }

//     }
//     else{
//         console.log(key)

//     }

// }
// }
// deepObject(a)
//console.log(a)
// let a = {a:2,b :3 }

// console.log(Object.values(a))
// let res =[]
// for(let key in a){
//         res.push(a[key])
// }
// console.log(res)
// let a='nikhil';

// console.log(a.split('').reverse().join(''))

let a = [1, 2, 3];
a.forEach((a) => console.log(a));
Array.prototype.myReduce = function (fn, init) {
  let current = init;
  for (let i = 0; i < this.length; i++) {
    current = fn(this[i], current);
  }
  return current;
};
Array.prototype.myfor = function (fn) {
  for (i = 0; i < this.length; i++) {
    fn(this[i]);
  }
};
a.myfor((a) => {
  if (a == 1) {
    console.log(a);
  }
});
