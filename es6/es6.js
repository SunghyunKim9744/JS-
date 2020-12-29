/*
1. 변수 선언
-1 let:변수명 중복 선언문제 해결,
       지역화 해결
    const : 범주형 값을 사용할 수 있다.
       add = function(){};
       add = 3;
       위와 같이 변수가 다른 값으로 대치되는.. 문제 해결
2 template String
   기존 노드 조작을 아주 편하게 구현할 수 있게 해준다.
   MVC를 구현 가능하게 해주는 구문..
   *어금부호(`)를 이용한 문자열의 템플릿화*

3. Enhanced Object Literal Syntax
-1 변수를 가지고 속성을 정의하던 방식이 개선
    function createExam(kor, eng, math){
        //return {kor:kor, eng:eng, math:math};
        // 위의 표현방법이 아래처럼... 어때? 좋지? 좋아~
        return {kor, eng, math};
    }
-2 객체가 함수를 포함하는 식이 편해졌다.
    let exam = {
        kor:30,
        eng:40,
        math:50,
        //total:function(){
        total(){
            return 60;
        }
    };
    //추가 설명
    //total 메소드에서 kor 멤버를 접근하려면?
    //kor는 outer 지역변수가 아니라 멤버 변수니까.. 
    //그런 경우에는 this 객체의 멤버로 지정해주어야 한다. 다음처럼
    let exam = {
        kor:30,
        eng:40,
        math:50,
        //total:function(){
        total(){
            return kor // (X)
            return this.kor; // (O)
        }
    };

*/

let title = "ES6에 대한 평가";
let content = "너무 좋대";

// 어금부호(`)로 여러 줄인걸 나타낼 수 있음.
// String.raw  - > 서식문자 문자로 출력하기 
const template = String.raw`<section>\n\n\n
                    <h1>${title}</h1>
                    <div>${content}</div>
                    </section>`;
console.log(template);

let exam={};
// 1.
// exam.kor = 30;
// exam.math = 40;
// exam.eng = 50;
let kor = 30;
let math = 40;
let eng = 50;

// 2.
// exam = {
//     kor : kor,
//     math : math,
//     eng : eng
// }

// 키가 아닌 벨류만 적어도 가능
// 3.
exam = {kor,math,eng};
console.log(exam);

// ex1
function test() {
    return {kor,math,eng};
}

// ex2
exam = {
    kor,
    eng,
    math,
    total:function(){
        // this - > exam 안에 있는 kor과 eng - > 40,41번째 줄
        return this.kor+this.eng;
    }
}

//ex3 함수에서 function 키워드 생략
exam = {
    kor,
    eng,
    math,
    total(){
        // this - > exam 안에 있는 kor과 eng - > 40,41번째 줄
        return this.kor+this.eng;
    }
}

// 사전지식
// 함수를 사용하는 두 가지 방법
// 기능을 가지는 함수를 정의한 것
function print(){
    console.log("hello");
}

print();

// 개체를 정의하는 함수 ==> js에는 클래스는 없다.
// class Exam{
//     var kor;
//     var eng;
//     var math;
    function Exam(){
        this.kor = 10;
        this.eng = 20;

        this.total = function() {
            var kor = 30;
            return this.kor;
        }
    };
// };

var exam3 = new Exam();
console.log(exam3);
console.log(`total is ${exam3.total()}`);