let arr = [];
console.log(typeof arr);
let obj = {};
console.log(typeof obj);



let arr1 = [10, 'in progress', true, 1];

console.log(arr1[0]); // [integer expression]

console.log(arr1.length);

console.log(arr1 [        arr1[  arr1.length-1    ]          ]  );

let arr = [1, 2, 3, 4];

let arr2 = arr;

arr2[1] = 999;

console.log(arr); //?



function doSomething(temp) {

  //temp=arr

  for (let i = 0; i < temp.length; i++) {

    temp[i] = temp[i] * 2;

  }

}

//[ 1, 999, 3, 4 ]

doSomething(arr);

console.log(arr); //?
