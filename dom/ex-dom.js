
//================================  s9-1   ==================================
// 동적으로 노드 추가,삭제,변경하기 - > 노드 조작(좀 더 나은 방식 - > 최종 방식)
window.addEventListener("load", function () {
    var section = document.querySelector("#s9-1")
    var container = section.querySelector(".container");
    var addBtn = section.querySelector(".add-button")
    var delBtn = section.querySelector(".del-button");
    var replaceBtn = section.querySelector(".replace-button");
    var changeBtn = section.querySelector(".change-text-button");

    var index = 1;
    addBtn.onclick = function () {

        // 최종 방식 insertAdjacentHTML 사용 - > 노드가 추가되는 방식
            var item = '<span class="item"> \
                    <input type="checkbox"> \
                    <span class="label">안녕'+ (index++) + '</span> \
                </span>';
            
            container.insertAdjacentHTML('beforeend',item);


        // 대안 1 innterHTML 속성사용 - > 수행 성능이 느림 -> 추가할 때 다시 처음부터 만드는 방식

            // 엔터도 구분자로 사용되기 때문에 한칸띄고 \ 이용
            // var item = '<span class="item"> \
            //                 <input type="checkbox"> \
            //                 <span>안녕'+(index++)+'</span> \
            //             </span>';

            // 수행 성능이 느림 -> 추가할 때 다시 처음부터 만드는 방식
            // container.innerHTML+=item;


    };

    delBtn.onclick = function () {

        // ------- 선택 삭제 방식을 통한 구현 ---------

// 선택된 노드 찾기 - > 보다 바람직한 방법 - > 슈도 클래스 이용 
        var chks = container.querySelectorAll("input[type=checkbox]:checked");

// 선택된 노드 찾기 - > 바람직하지 않은 방법 - > 직접 모든 노드를 순회 하는 방식
        
        // 1. item 목록 얻기
            // var items = container.children;
        
        // 2. item을 순회하면서 checkbox 얻기
        // 3. checkbox의 상태가 선택되어 있는 것들을 추려서 배열에 담기.
            // var chks =[];
            // for(var i=0; i<items.length; i++){
            //     var checkbox = items[i].querySelector("input[type='checkbox']");
            //     if(checkbox.checked)
            //         chks.push(checkbox);
            // }

        // 4. 콘솔 출력
            console.log(chks);
        
        for(var i=0; i<chks.length; i++){
            chks[i].parentElement.remove();
        }
        // container.lastElementChild.remove();
    };

    replaceBtn.onclick = function () {

        var chks = container.querySelectorAll("input[type=checkbox]:checked");
        if(chks.length != 2){
            alert("2개만 선택하세요");
            return;
        }

        var item1 = chks[0].parentElement;
        var item2 = chks[1].parentElement;

        var before = item2.previousElementSibling;
       
        item1.replaceWith(item2);

        before.insertAdjacentElement('afterend', item1);


    };

    changeBtn.onclick = function() {
        var chks = container.querySelectorAll("input[type=checkbox]:checked");
        for(var i=0; i<chks.length; i++){
            var parent = chks[i].parentNode;
            var textSpan = parent.querySelector(".label");
            textSpan.innerText="변경";
        }
    }
});

//================================  s9   ==================================
// 동적으로 노드 추가,삭제,변경하기
window.addEventListener("load", function () {
    var section = document.querySelector("#s9")
    var container = section.querySelector(".container");
    var addBtn = section.querySelector(".add-button")
    var delBtn = section.querySelector(".del-button");
    var replaceBtn = section.querySelector(".replace-button");

    var index = 1;
    addBtn.onclick = function () {

        //              1. 텍스트 노드
        // 1. 텍스트 노드 생성 - > documnet에서 노드 생성
        // var text = document.createTextNode("안녕");
        // 2. 컨테이너에 노드 추가 - > 노드에서 노드가 갖고 있는 appendChild
        // container.appendChild(text);
  
        //              2. 엘리먼트 노드 - > 이전 기능 appendChild
        // 1. span 엘리먼트 객체 생성
        // var span = document.createElement("span");
        // 2. 텍스트 노드 생성
        // var text = document.createTextNode("안녕"+index++);
        // 3. span에 2번에 생성한 텍스트 노드 추가
        // span.appendChild(text);
        // 4. 컨테이너에 span 노드 추가
        // container.appendChild(span);
 
        //              2. 엘리먼트 노드 - > 새로운 기능 append
        // 1. span 엘리먼트 객체 생성
        var span = document.createElement("span");
        // 2. 텍스트 노드를 생성하면서 span에 추가
        span.append("안녕" + index++);
        // 3. 컨테이너에 span 노드 추가 - > 여러개도 넣을 수 있음.
        // container.append(span,"하이룽");
        container.append(span);


    };

    delBtn.onclick = function () {
        // 컨테이너 안에 있는 span 엘리먼트 노드 삭제
        // 이전 기능
        // container.removeChild(container.lastElementChild);

        // 새로운 기능
        container.lastElementChild.remove();
    };

    replaceBtn.onclick = function () {

        // 2번째와 세번째 바꾸기
        var newOne = container.children[2];
        var oldOne = container.children[1];
        container.replaceChild(newOne, oldOne);

        // 이전 기능
        // container.insertBefore(oldOne,newOne.nextElementSibling);

        // 새로운 기능
        newOne.insertAdjacentElement('afterend', oldOne);

        // container.insertBefore

        // 1번째와 마지막을 바꾸기
        // var newOne = container.lastElementChild;
        // var oldOne = container.firstElementChild;
        // oldOne - > newOne으로 대체가 됨 - > 개수가 줄음. oleOne을 다시 넣어줘야함.
        // container.replaceChild(newOne,oldOne);

        // container.appendChild(oldOne);
    };
});

//================================  s8-1   ==================================
// 동적으로 엘리먼트 노드 css 속성 변경하기
window.addEventListener("load", function () {
    var section = document.querySelector("#s8-1")
    var prevBtn = section.querySelector(".prev-button")
    var nextBtn = section.querySelector(".next-button");
    var ul = section.querySelector("ul");


    // var lis = ul.querySelectorAll("li");

    // var current = ul.querySelector("li");
    // var current = ul.querySelector("li:first-child");

    var current = ul.querySelector("li:nth-child(4)");

    var showRoomImg = section.querySelector(".show-room img");
    var currentImg;

    var index = 0;

    prevBtn.onclick = function () {
        if (current.previousElementSibling == null) {
            alert("갈 곳이 없습니다");
            return;
        }

        index++;
        var x = index * 100 + "px";
        ul.style.transform = "translateX(" + x + ")";

        current.classList.remove("current");
        current = current.previousElementSibling;
        current.classList.add("current");
        currentImg = current.querySelector("img");
        showRoomImg.src = currentImg.src;

    };

    nextBtn.onclick = function () {

        if (current.nextElementSibling == null) {
            alert("갈 곳이 없습니다");
            return;
        }

        index--;
        var x = index * 100 + "px";
        ul.style.transform = "translateX(" + x + ")";
        // 기존의 커렌트 클래스명 제거
        current.classList.remove("current");
        current = current.nextElementSibling;

        // 일반적으로 html속성과 이름이 동일하지만 class는 예약어임 
        // current.class = "current"; X
        // current.className - > 기존이름의 클래스가 있다면 바꿔버림 - >추가X
        // 기존의 클래스명 + 추가할 클래스명
        current.classList.add("current");

        // 단, 아래는 좋은 방법이 아님.  위의 방식으로 하기 
        // 정해진 css에서 current만 바꿔주는게 좋음 - > class 이름만 변경+추가
        // current.style.opcity = "1";
        // current.style.border = "1px solid green";

        // 속성명이 유효하지 않을 때 2가지 방법.
        // 1. [""]
        // 2. 낙타표기법
        // current.style["border-width"] = "2px";
        // current.style.borderColor = "red";
        currentImg = current.querySelector("img");
        showRoomImg.src = currentImg.src;

    };
});

//================================  s8   ==================================
// 동적으로 엘리먼트 노드 변경하기. - > img src 속성 변경
window.addEventListener("load", function () {
    var section = document.querySelector("#s8")
    var prevBtn = section.querySelector(".prev-button")
    var nextBtn = section.querySelector(".next-button");
    var ul = section.querySelector("ul");

    // var lis = ul.querySelectorAll("li");

    // var current = ul.querySelector("li");
    var current = ul.querySelector("li:first-child");


    prevBtn.onclick = function () {
        current.innerText = "호호호";
        current = current.previousElementSibling;
    };

    nextBtn.onclick = function () {
        current = current.nextElementSibling;
        var img = current.firstElementChild;
        img.src = "../images/img1.jpg";

    };
});

//================================  s7   ==================================
// 선택자
window.addEventListener("load", function () {
    var section = document.querySelector("#s7")
    var prevBtn = section.querySelector(".prev-button")
    var nextBtn = section.querySelector(".next-button");
    var ul = section.querySelector("ul");

    // var lis = ul.querySelectorAll("li");

    var current = ul.querySelector("li:first-child");
    current.innerText = "하하하";
    prevBtn.onclick = function () {
        current.innerText = "호호호";
        current = current.previousElementSibling;
    };

    nextBtn.onclick = function () {
        current = current.nextElementSibling;
        current.innerText = "하하하";
    };
});

//================================  s6   ==================================

window.addEventListener("load", function () {
    var section = document.getElementById("s6");
    var prevBtn = section.getElementsByClassName("prev-button")[0];
    var nextBtn = section.getElementsByClassName("next-button")[0];
    var ul = section.getElementsByTagName("ul")[0];

    // ul의 자식 노드들 li+text+a
    //  console.log(ul.childNodes.length);

    // 모든 노드를 대상으로 순회(childNodes)
    // for(var i=0; i<ul.childNodes.length; i++)
    //     console.log(ul.childNodes[i].nodeType);

    // 엘리먼트 노드만 대상으로 순회(children)
    for (var i = 0; i < ul.children.length; i++)
        console.log(ul.children[i].nodeType);

    var current = ul.firstElementChild;
    current.innerText = "하하하";
    prevBtn.onclick = function () {
        current.innerText = "호호호";
        current = current.previousElementSibling;
    };


    nextBtn.onclick = function () {
        current = current.nextElementSibling;
        current.innerText = "하하하";
    };
});

//================================  s5   ==================================

window.addEventListener("load", function () {
    var section = document.getElementById("s5");
    var urlInput = section.getElementsByClassName("url-input")[0];
    var btn1 = document.getElementsByClassName("button1")[0];

    btn1.onclick = function () {
        // window.location - > 입력된 url로 가기 - > url 객체
        // location.href = "http://www.naver.com";
        // replace - > 기록 X- > 뒤로가기가 안됨 
        location.replace(urlInput.value);
        // 원래 있던 창으로 돌아가기(뒤로가기) reload
        // location.reload(); 

        // history 객체 - > 뒤로가기, 앞으로 가기
    };
});

//================================  s4   ==================================

window.addEventListener("load", function () {
    var section = document.getElementById("s4");
    var btn1 = document.getElementsByClassName("btn1")[0];
    var win = section.getElementsByTagName("iframe")[0].contentWindow;

    btn1.onclick = function () {
        var btn1InIFrame = win.document.getElementsByTagName("input")[0];
        btn1InIFrame.value = "호호호";
    };
});

//================================  s3   ==================================

// name으로 얻지말고 id를 전역변수처럼 얻고(section), class를 이용하여 element 객체 참조하기.

window.addEventListener("load", function () {
    var section = document.getElementById("s3");
    var searchButton = section.getElementsByClassName("search-button")[0];

    var win;

    searchButton.onclick = function () {
        // 새로운 창 뜨게 하기 - > window.open
        // open("http://www.naver.com");

        // 너비 300, 높이 200인 창으로 뜨게 하기. 
        // open("ex-dom-s3zip.html","_blank","width=300px,height=200px");

        // win - > 새로 만들어진 창에 접근, opener - > 만들어진 창에서 부모 창에 접근.
        // 새로 만들어진 창이 로드되었을 때, 그 창에 있는 객체를 사용해야함
        win = open("ex-dom-s3zip.html", "_blank", "width=300px,height=200px");
        // win.onload = function(){
        // btn1 - > ex-dom-s3zip.html에 있는 input 객체
        //     var btn1 = win.document.getElementsByTagName("input")[0];
        //     btn1.value="하하하";
        // }
        //      ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
        // ex-dom-s3zip.html의 속성이 변하므로 ex-dom-s3zip에서 스크립트로 하는게 바람직.
    }
}
);

//================================  s2   ==================================
window.addEventListener("load", function () {
    var section = document.getElementById("s2");
    var countdownButton = section.getElementsByTagName("input")[0];
    var countSpan = section.getElementsByClassName("count-span")[0];

    var count = 5;
    // countSpan의 자식텍스트에다 count 넣기. + 객체 초기화
    countSpan.innerText = count;
    countdownButton.onclick = function () {
        //      카운트 다운 처리. window.setTimeout(함수,시간)
        // setTimeout(function () {
        //     count--;
        //     countSpan.innerText = count;
        // }, 3000);

        //      1초마다 실행됨. window.setInterval(함수,시간)
        // setInterval(function () {
        //     count--;
        //     countSpan.innerText = count;
        // }, 1000);

        //      Interval을 종료하기 위한 함수 clearInterval - > timerId 변수 준비 
        var timerId = setInterval(function () {
            count--;
            countSpan.innerText = count;

            if (count == 0)
                clearInterval(timerId);
        }, 1000);

    }
});


//================================  s1   ==================================

window.addEventListener("load", function () {
    var addButton = document.getElementById("add-button");
    var xInput = document.getElementById("x-input");
    var yInput = document.getElementById("y-input");
    var resultInput = document.getElementById("result-input");

    addButton.onclick = function () {
        var xValue = xInput.value;
        var yValue = yInput.value;
        var resultValue = parseInt(xValue) + parseInt(yValue);
        resultInput.value = resultValue;
    }
}
);