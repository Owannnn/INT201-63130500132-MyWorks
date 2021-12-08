//array destructuring assignment + rest parameter

[subject, students, ...listOfStudents] = ['INT201', 50, 'A', 'B', 'C'];

console.log(subject);

console.log(students);

console.log(listOfStudents);

//object destructuring assingment

({ productId, productName } = { productName: 'Coke', productId: 111 });

console.log(productId);

console.log(productName);00


//object destructuring assignment +rest parameter

({ productId, productName, ...rest } = {

    productName: 'Coke',
  
    productId: 111,
  
    productPrice: 10,
  
    productStock: 5
  
  });
  
  console.log(productId);
  
  console.log(productName);
  
  console.log(rest);
  
  rest.productPrice = 200;
  
  console.log(rest);

