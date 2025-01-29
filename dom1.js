////
// let x = document.createElement("h1");
// x.innerText = "Dynamic creation of html element from JS";
// x.setAttribute("id" , "demo");
// console.log(x);
// document.body.appendChild(x);
// let image=document.createElement("img");
// image.src="./3606208.jpg"
// console.log(image);
// document.body.appendChild(image);

// //
// let form = document.querySelector("form");
// let name = document.getElementById("uName");
// let mail = document.getElementById("uEmail");
// let psw = document.getElementById("uPsw");

// form.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     let username = name.value;
//     let email = mail.value;
//     let password = psw.value;
//     let userDetails={
//         username:username,
//         email:email,
//         password:password
//     }
//     console.log(userDetails);
//     localStorage.setItem("userData" , JSON.stringify(userDetails))
// })
// localStorage.clear()


//// dynamic elements
// let mainEle = document.createElement("div");
// mainEle.setAttribute("class" , "mainBlock");
// console.log(mainEle);

// let topEle = document.createElement("div");
// topEle.setAttribute("class" , "topBlock");

// let image = document.createElement("img");
// image.src="https://cdn.pixabay.com/photo/2020/11/27/22/07/naruto-5783103_1280.png";
// image.width="300"
// image.height="300"

// let bottomEle = document. createElement("div");
// bottomEle.setAttribute("class" , "bottomBlock");
// let h1=document.createElement("h1");
// h1.innerText="Heading";

// let btn = document.createElement("button");
// btn.innerText="View More";

// bottomEle.appendChild(h1);
// bottomEle.appendChild(btn);
// topEle.appendChild(image)
// mainEle.appendChild(topEle);
// mainEle.appendChild(bottomEle);
// document.body.appendChild(mainEle);

//
let form=document.querySelector("form");
let username = document.getElementById("uName");
let password = document.getElementById("uPass");
let check = document.getElementById("check");
let show = document.getElementById("show");
let gen = document.getElementsByName("gender");

//hiding and showing password
check.addEventListener("click",event=>{
    if(event.target.checked === true){
        password.setAttribute("type","text");
        show.innerText="hide password";
    }else{
        password.setAttribute("type","password");
        show.innerText="show password";
    }
})

form.addEventListener("submit",event=>{
    event.preventDefault();
    let un = username.value;
    let up = password.value;
    let gender = "";
   
   for(let i=0;i<=gen.length-1;i++){
    if(gen[i].checked == true){
        gender += gen[i].value;
    }
   }
let userDetails={
    un,up,gender
};
console.log(userDetails);
})