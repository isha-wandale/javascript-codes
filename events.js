// let btn1 = document.querySelector("#btn1");
// btn1.onclick =(e)=>{
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);

  
// // }; 
 
// btn1.addEventListener("click",(e)=>{


//     console.log("button was clicked");
//     console.log(e);
//     console.log(e.type)

// });
let modeBtn = document.querySelector("#mode");
let = currmode ="light";

modeBtn.addEventListener("click",()=>{
    if(currmode === "light"){
        currmode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }
    else{
        currmode ="light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currmode);
})