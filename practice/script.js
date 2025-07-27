// const userName = {
//   firstName: "Baiju",
//   lastName: "thomas",
//   age: 30,
//   city: "kerala",
//   education: 16,
//   weight: 80,
//   country: "india",
  
// };

// const newArray = ['apple','mango','banana','lemon'];

// const animal = [0,1,2,3,4]

// const user1 = {
//   firstName: 'Baiju',
//   lastName: 'thomas',
//   age: 30
// }

// const user2 = {...user1,...user1
// }

// let num = 1;
// // debugger
// while(num <= 10){
//   console.log(num);
//   num = num +1;
// }

// const friends = ['aks','byd', 'car', 'jeep', 'was' ,'yoo'];

// let i = 0;

// while(i < friends.length) {
//   console.log(`${i+1}) ${friends[i]}`);
//   i = i+ 1;
// }

// function addTwoNumbers(a,b) {
 
//   return (a+b);
// }

// const number1 = 10;
// const number2 = 0;

// const result = addTwoNumbers(number1,number2);

// console.log(result);



// sayHi();

// const userName = 'baiju';
// const justName = 'Thomas';

// function sayHi() {
//   const a = 12;
//   const b = 14;

//   console.log(a+b);
// }

// const returnValue1 = setTimeout(` console.log("Hi my name is ")
//   console.log("Baiju Thomas")`, 2000);

//   const returnValue2 = setTimeout(` console.log("Hi  ")
//   console.log("Baiju here")`, 2000);

//   clearTimeout(returnValue1)

// console.log('Hello World');

// function a() {
//   console.log('yoo i am a function')
// }

// for(let i = 0;i <=3;i++){
//   console.log("number is " + i);
// }

// a();

// setTimeout(a,0);
// setTimeout(a,1000);
// setTimeout(function () {
//   console.log('anonymous function here ')
// },2000);

// console.log('end')



// const addNumber = (num1,num2) => {
//   return num1+num2;
// } 

// console.log(addNumber(16,20));
//*for each method  */

// const fruits = ['banana','apple','peach','mango','grapes'];

// fruits.forEach(function(fruit) {
//   console.log(fruit);
// })
// console.log('**************')

// fruits.forEach((x) => {
//   console.log(x)
// })

/* map,filter,reduce */

  // const fruits = ['banana','apple','peach','mango','grapes'];
    
  
  // fruits.map((x) => {
  //     console.log(x)
  //     return x.toUpperCase();
  //   })


  // const months = ['January','February','March','April','May','December'];

  // const mon = months.filter((month) => {
  //   console.log(month.toLocaleLowerCase().includes('m'))
  //   return month.toLocaleLowerCase().includes('m');
  // })

  const students = [
    {
      name: 'Akash',
      age: 21,
    },
    {
      name: 'amit',
      age: 19,
    },
    {
      name: 'arun',
      age: 34,
    },
    {
      name: 'vishnu',
      age: 25,
    },
    {
      name: 'charles',
      age: 30,
    },
  ]

  const stud = students.filter((student) => {

    return student.age <=25
  })
  
