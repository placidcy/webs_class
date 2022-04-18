// document.querySelectorAll(".refer .subTitle ul li").forEach(function(ele){
//     ele.addEventListener("click", function(){
//         ele.classList.toggle("selected");
//     });
// });

document.querySelectorAll(".subTitle ul li").forEach((el) => {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        el.classList.toggle("active");
    });
});