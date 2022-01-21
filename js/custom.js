const collapse = document.querySelector(".collapse");
const collapseMenu = document.querySelector(".nav-meun");

collapse.addEventListener('click',function(){
    collapse.classList.toggle('open');
    collapseMenu.classList.toggle('collapse-menu');
});