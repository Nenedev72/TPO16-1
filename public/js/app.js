let btnMenu = document.querySelector("#btnMenu");
let mnuNav = document.querySelector("#mnuNav");
let btnServicios = document.querySelector("#btnServicios");
let subMenu = document.querySelector("#subMenu");
let iUpDown = document.querySelector("#iUpDown");

btnMenu.addEventListener("click", (e)=>{
    mnuNav.classList.toggle("collapse");
})

btnServicios.addEventListener("click", ()=>{
    subMenu.classList.toggle("collapse-submenu");
    iUpDown.classList.toggle("fa-angles-up");
})
