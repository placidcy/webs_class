   //highlight
   const highlight = function () {
     hljs.highlightAll();
   }

   //modal
   const modal = function () {
       //버튼을 클릭하면 modal 창을 보이게 하기(show 추가)
       document.querySelector(".source-btn").addEventListener("click", () => {
           document.querySelector("#modal").classList.add("show");
           document.querySelector("#modal").classList.remove("hide");
       });

       document.querySelector(".modal-close").addEventListener("click", () => {
           document.querySelector("#modal").classList.add("hide");
       });
   }

   //tab menu
   const tapBtn = document.querySelectorAll(".view-title > ul > li"); // 버튼
   const tabCont = document.querySelectorAll(".view-cont > div"); // 버튼 안의 내용

   const tabMenu = function () {
       tapBtn.forEach((btns, index) => {
           btns.addEventListener("click", () => {
               // btns.classList.toggle("active");

               // 클릭하지 않은 버튼은 클래스 이름 삭제
               tapBtn.forEach(ele => {
                   ele.classList.remove("active");
               });

               //클릭한 버튼 추가
               btns.classList.add("active");

               // 모든 컨텐츠 박스를 안보이게 하기
               // style.display = 컨텐츠의 내용을 표시하는 변수(css display 속성)
               tabCont.forEach(ele => {
                   ele.style.display = "none";
               });

               // 내가 클릭한 컨텐츠 박스를 보이게 하기
               tabCont[index].style.display = "block";
           });
       });
   }