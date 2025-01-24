// //  document.getElementById("")
// let element = document.getElementById("demo");
// element.innerText = "DOM";
// console.log(element);

// let div = document.getElementById("test");
// // div.inmerText = "<h1>Header</h1>"
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

let ele = document.querySelectorAll(".test");
[...ele].map(element=>{
    console.log(element.innerText);
})
