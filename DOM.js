// //  document.getElementById("")
// let element = document.getElementById("demo");
// element.innerText = "DOM";
// console.log(element);

////
// let div = document.getElementById("test");
// div.inmerText = "<h1>Header</h1>"
// div.inmerHTML = "<h1>Header</h1>"
// console.log(div);

// //
// let ele = document.getElementsByClassName("test");
// ele[0].style.backgroundColor="yellow"
// let x = [ ... ele];
// console.log(x , Array.isArray(x));
// x.map((element)=>{
//     element.style.backgroundColor="teal";
// })

// let ele = document.querySelectorAll(".test");
// [...ele].map(element=>{
//     console.log(element.innerText);
// })


// // ! events
// let btn = document.getElementById("btn");
// // btn.addEventListener("events" , callbackfn)
// btn.addEventListener("click",()=>{
//     console.log("button clicked");
//     document.body.style.background="dodgerblue"
// })

// let btn = document.getElementById("btn");
// btn.addEventListener("dblclick",()=>{
//     console.log("button is clicked 2 times");
// })

// let btn = document.getElementById("btn");
// btn.addEventListener("mouseover" , ()=>{
//     // alert("mouse over done")
//     document.body.style.background="teal"
// })

// btn.addEventListener("mouseleave" , ()=>{
//     // alert("mouse leave done")
//     document.body.style.background="tomato"
// })


// let inp = document.querySelector("#inp");
// inp.addEventListener("keydown",()=>{
//     console.log("key down");
// })

// inp.addEventListener("keyup",()=>{
//     console.log("key up");
// })

// //
// let bgColor = document.querySelectorAll(".bgColor");
// [...bgColor].map((element)=>{
//     element.addEventListener("mouseover",()=>{
//         element.style.backgroundColor=element.innerText;
//     });
//     element.addEventListener("mouseleave",()=>{
//         element.style.backgroundColor="transparent";
//     })
// })