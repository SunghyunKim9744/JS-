
//================================  s8   ==================================
// 동적으로 엘리먼트 노드 변경하기. - > img src 속성 변경
window.addEventListener("load", function () {
    var section = document.querySelector("#s8")
    var prevBtn = section.querySelector(".prev-button")
    var nextBtn = section.querySelector(".next-button");
    var ul = section.querySelector("ul");

    // var lis = ul.querySelectorAll("li");

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