// //var,let, const

// var name = 'krati';
// console.log(name);

// //change the value of name
// name = 'pihu';
// console.log(name);


// //Init var
// var greeting;
// console.log(greeting);
// greeting = 'helloo'
// console.log(greeting);

// //variable can start only letters, numbers, _, $
// // can not start with number


// //Multi word vars
// var firstName = 'john'; // Camel Case
// var first_name = 'Sara'; // Underscore
// var FirstName = 'pihi'; // Pascal Case


//LET
// let greeting;
// console.log(greeting);
// greeting = 'helloo'
// console.log(greeting);

// //CONST  always static

// const name = 'krati';
// console.log(name);
// Can not reassign
// name = 'pihu';
// Have to assign a value
  //const greeting; -- show error


// // Object
//     const person = {
//         name: 'krati',
//         age: 32
//     }
//     // we can the values for object also
//     person.name = 'pihu';
//     console.log(person);
//     // we can change the values in object also
       
       
// create a Array
 
// const numbers = [1,2,3,4,5];
// // add the new value in array in last 
// numbers.push(6);
// console.log(numbers);



// Data types in javascript

//PRIMITIVE TYPES

// //String
//  const name = 'pihu';
//  console.log(typeof name);
//  //Number
//   const age = 45;
//   console.log(typeof age);
//   //Boolean
//     const haskids = true;
//     console.log(typeof haskids);
//     //Null
//       const car = null;
//       console.log(typeof car);
//    //Undefined
//       let test;
//       console.log(test);
//    //Symbol
//        const sym = Symbol();
//        console.log(typeof sym);

//Reference type - objects
  //Array
    // const hobbies = ['movies', 'music'];

    // console.log(typeof hobbies);
    // //Object Literal
    //    const address = {
    //      city: 'sydney',
    //      state: 'NSW'
    //    }
    //    console.log(typeof address);
       
    //    const today = new Date();
    //    console.log(today);
    //    console.log(typeof today);


// Type Converstion

   let val;
 //Number to String
  val = String(555);
  val = String(4+4);
  //Bool to String
    val = String(true);
  //Date to String
    val = String(new Date());
  // Array to String
    val = String([1,2,3,4]);


  //toString
   val = (5).toString();
   val = (true).toString();






  //Output
    console.log(val);
    console.log(typeof val);
    console.log(val.length);