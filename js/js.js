let selector=document.querySelectorAll(".sellector h4");
let dropSelector = document.querySelectorAll(".dropdown-menu li a")
let courses=document.querySelectorAll(".courses-all .showc")

let item =document.querySelectorAll(".navbar .nav-item")

selector.forEach((h4)=>{
    h4.addEventListener("click",removeActive)
    h4.addEventListener("click",select)
})

function removeActive(){
    selector.forEach((h4)=>{
        h4.classList.remove("active")
        this.classList.add("active")
    })
}
function select(){
    courses.forEach((cours)=>{
        cours.style.display="none";
    })
    document.querySelectorAll(this.dataset.sel).forEach((el)=>{
        el.style.display="block";
    })
}

// for dropdown
dropSelector.forEach((h4)=>{
    h4.addEventListener("click",dropRemove)
    h4.addEventListener("click",select)
})

function dropRemove(){
    dropSelector.forEach((li)=>{
        li.classList.remove("active")
        this.classList.add("active")
    })
}
function select(){
    courses.forEach((cours)=>{
        cours.style.display="none";
    })
    document.querySelectorAll(this.dataset.sel).forEach((el)=>{
        el.style.display="block";
    })
}
//scroll method
item.forEach((h4)=>{
    h4.addEventListener("click",removeActivenav)
})
function removeActivenav(){
    item.forEach((li)=>{
        li.classList.remove("active")
        this.classList.add("active")
    })
}

//scroll method
// window.onscroll=()=>{
//     if(window.scrollY>=30){
//         scrol.style.cssText=`visibility:visible; z-index: 1;`
//     }else{
//         scrol.style.cssText=`visibility:hidden;`
//     }
// }
// scrol.onclick=()=>{
//     window.scrollTo({
//         top:0,
//         behavior:"smooth"
//     })

// }
