// //without parameters
// function demo(){
//     console.log("Hello world");
// }
// demo();//print 1time func
// demo();//print 2 time...so on

// //with parameters and args
// function add1(a,b){
//     console.log(a+b);
// }
// add1(5,6)

// //add to cart button
// function addToCart(){
//     document.body.style.background="teal";
//     alert("Product is added to cart successfully")
// }


// //palindrome
// function ispalindrome(str)
// {
//     let revstr="";
//     for(let i = str.length-1;i>=0;i--){
//         revStr += str[i];
//     }
//     if(str == revStr){
//         console.log("palindrome");
//     }else{
//         console.log("not a palindrome");
//     }
// }

// ispalindrome("sir");
// ispalindrome("madam");
// ispalindrome("malayalam");

// //function 
// function onemoretime(){
//     console.log("not understood tell me one more time");

// }

// //function expression
// let x=function(){
//     console.log("function expression");
// };
// x();
// x();

// //IIFE
// (
//     function(){
//         console.log("IIFE");
//     }
// )();();

// // Arrow function
// let x = a =>{console.log("a")};
// x(10);
// //Arrow func more parameters
// let x = (a,b) =>console.log("a+b");
// x(10,5);
// //3 parameters
// let x =_=>{console.log("hii");
//            console.log("bye");
//            console.log("ya");   
// }
// x();

// //return-implicit return,explicit return
// function add(a,b){
//     console.log("I am print after return keyword");
//     return a+b;//explicit

// }
// let x = add(5,5);
// console.log(x);
// //
// let x = (a,b) => a+b;
// console.log(X(10,30));//implicit

// let y = (a,b) => {return a+b} //explicit 
// console.log();

// //higher order function
// function hof(a){
//     return a;
// };
// let x = hof(function(){return "This is callback function"});
// console.log(x);

//HOF 2
// function add(callback){
//     return callback();
// };
// let x=add(function(a,b){return a+b});
// console.log(x);

// // user output
// let users = ["Arun" , "s" , "Shashi" , "manish" , "Shiva",]
// let x = users.map((user)=>{
//     return user;
// });
// console.log(x);

// // undefined
// let x = users.forEach((user)=>{
//       return (user);
// });
//  console.log(x);

// //
// var a=10;
// let b=30;
// function x(){
//     var user = "Tony";
//     let company = "Amazon";
//     const sal = 1234567890;
//     console.log(user);
//     console.log(company);
//     console.log(sal);
//     console.log(a,b);
// }
// x();