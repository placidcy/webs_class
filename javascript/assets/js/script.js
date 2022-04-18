//결과보기를 클릭하면 경고창 띄우기

document.querySelectorAll(".result").forEach(function(ele){
    ele.addEventListener("click", function(){
        ele.classList.toggle("active");
    });
});