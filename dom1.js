var istatus = document.querySelector("h5");
var btn = document.querySelector("#add");
// var removefriend = document.querySelector("#remove");
var flag = 0;

btn.addEventListener(
    "click", ()=>{
    if(flag==0){
        istatus.innerHTML = "Friends"
        istatus.style.color = "green"
        btn.innerHTML = "Remove friend";
        btn.style.color = "black";
        btn.style.backgroundColor ="#dadada";
        flag = 1;
    }
    else{
        istatus.innerHTML = "Stranger";
        istatus.style.color = "red";
        btn.innerHTML = "Add friend";
        btn.style.color = "#fff";
        btn.style.backgroundColor ="cadetblue";
        flag = 0;
    }
    }
)

// removefriend.addEventListener(
//     "click", ()=>{
//     istatus.innerHTML = "Stranger"
//     istatus.style.color = "red"
//     }
// )

