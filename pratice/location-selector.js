window.addEventListener("load",function(){
    var section = document.querySelector("#s");
    var prevBtn = section.querySelector(".prev-button");
    var nextBtn = section.querySelector(".next-button");

     // 자식의 img 객체 참조
    var win = section.querySelector("iframe").contentWindow;
    var frameCurrentImg = win.document.querySelector("img");

    //  img 태그들 참조
    var imgs = section.querySelectorAll("img");
    
    // 현재 선택된 이미지 인덱스
    var currentIdx = -1;
    var temp;

    prevBtn.onclick = function(){
        currentIdx--;
        temp = imgs[currentIdx];
        frameCurrentImg.src = temp.src;
    };

    nextBtn.onclick = function(){
        currentIdx++;
        temp = imgs[currentIdx];
        frameCurrentImg.src = temp.src;
    };
});