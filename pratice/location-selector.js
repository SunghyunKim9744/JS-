// 노드 조작
window.addEventListener("load", function () {
    var section = document.querySelector("#s2");
    var addBtn = section.querySelector(".add-button");
    var delBtn = section.querySelector(".del-button");
    var swapBtn = section.querySelector(".rep-button");

    var container = section.querySelector(".container");

    var addText = section.querySelector(".add-in-text");

    var swapOldText = section.querySelector(".old-rep");
    var swapNewText = section.querySelector(".new-rep");

    // div 색깔 주기.
    var colorIdx = 0;
    var colors = ["lightgreen", "lightblue", "orange", "lightslategrey", "tomato", "violet", "red","teal"];

    var index = 1;

    addBtn.onclick = function () {
        if (colorIdx == colors.length)
            colorIdx = 0;
        var div = document.createElement("div");
        div.style.background = colors[colorIdx++];
        div.append(addText.value + index++);
        container.append(div);
    };

    delBtn.onclick = function () {
        container.lastElementChild.remove();
    };

    swapBtn.onclick = function () {

        var oldOneNum = parseInt(swapOldText.value)-1;
        var newOneNum = parseInt(swapNewText.value)-1;
       
        if(oldOneNum>newOneNum){
            var temp = oldOneNum;
            oldOneNum = newOneNum;
            newOneNum = temp;
        }

        var oldOne = container.children[oldOneNum]; 
        var newOne = container.children[newOneNum];
        container.replaceChild(newOne,oldOne);

        // 1방식
        newOne = container.querySelector("div:nth-child("+(newOneNum+1)+")");

        // 2방식
        // for(var i=0; i<newOneNum-oldOneNum; i++)
        //     newOne = newOne.nextElementSibling;
        container.insertBefore(oldOne,newOne);
    };
});

//----------------------------------------------
window.addEventListener("load", function () {
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

    prevBtn.onclick = function () {
        currentIdx--;
        temp = imgs[currentIdx];
        frameCurrentImg.src = temp.src;
    };

    nextBtn.onclick = function () {
        currentIdx++;
        temp = imgs[currentIdx];
        frameCurrentImg.src = temp.src;
    };
});