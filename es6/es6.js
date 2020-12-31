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
        // this - > exam 안에 있는 kor과 eng - > 87,88번째 줄
        return this.kor+this.eng;
    }
}

//ex3 함수에서 function 키워드 생략
exam = {
    kor,
    eng,
    math,
    total(){
        // this - > exam 안에 있는 kor과 eng - > 98,99번째 줄
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


// ========== Destructuring #1-1 =============
{
    let exam = {
        kor:30,
        eng:40,
        math:50
    };
    
    // let kor = exam.kor;
    // let eng = exam.eng;
    // console.log(`kor : ${kor}, eng : ${eng}`);

    //  143~145 Destructuring을 아래와 같이 편하게 해줌
    // exam안의 kor,eng를 지역변수로 만들어서 대입. 순서상관X
    let {eng,kor} = exam;
    console.log(`kor : ${kor}, eng : ${eng}`);

// ========== Destructuring #1-2 =============
// exam의 값이 변했을 때 대입 하는 방법 ()사용
    exam.kor = 100;
    exam.eng = 500;
    ({eng,kor} = exam);
    console.log(`kor : ${kor}, eng : ${eng}`);

    exam.kor = 50;
    ({kor}=exam);
    console.log(`kor : ${kor}, eng : ${eng}`);
}

// ========== Destructuring #2 =============
// 속성의 확장과 기본값

{
    let exam = {
        kor:30,
        eng1:40,
        math:50
    };

    {
         // exam에 없는 속성도 사용이 가능.
    let {eng1,kor,total} = exam;
    console.log(`kor : ${kor}, eng : ${eng1}, total : ${total}`);

    // total에 값 대입
    ({total=0}=exam);
    console.log(`kor : ${kor}, eng : ${eng1}, total : ${total}`);
    }
   

    // 속성이름 별칭주기
    {
        let {eng1:english,kor,total=0} = exam;
        // eng1을 english로 사용해야함.
        // console.log(`kor : ${kor}, eng : ${eng1}, total : ${total}`);
        console.log(`kor : ${kor}, eng : ${english}, total : ${total}`);

    }
}

// ========== Destructuring #3 =============
// 중첩된 객체의 속성
{
    let exam = {
        kor:30,
        eng:40,
        math:50,
        student :{
            name:"newlec",
            phone:"010-1234-5678"
        }
    };

    // exam안의 student
    let {student} = exam;
    console.log(student);
    
    {
    // exam안의 student안의 name값 꺼내기.
    let {student:{name}} = exam;
    console.log(name); 
    }
    

    let {kor,student:{name,phone}} = exam;
    console.log(`kor : ${kor}, student name : ${name}, student phone : ${phone}`);
}

// ========== Destructuring #4 =============
// 매개변수
{
    function printExam({kor,eng,math /*destructuring*/}) {
        console.log(`kor : ${kor}, eng : ${eng}, math : ${math}`);
    }
    let {kor=10,eng=20,math=30} = {}; // destructuring
    printExam({kor,eng,math}); // create Object
}

// ========== Destructuring #5 =============
// Array destructuring
{
    let kors = [10,20,30];
    let [k1,k2,k3] = kors;

    console.log(`k1 : ${k1}, k2 : ${k2}, k3 : ${k3},`);

    // 다른 값 대입
    [k1] = [100,200,300]; // 100 대입
    [,k2] = [100,200,300]; // 200 대입
    [,,k3] = [100,200,300]; // 300 대입
    console.log(`k1 : ${k1}, k2 : ${k2}, k3 : ${k3},`);

    //꼼수 swapping
    let x = 2;
    let y = 3;
    let z = 5;
    console.log(`x:${x},y:${y},z:${z}`);
    
        //교체(Swap) 순서 재배열
    //    let t = x;
    //    x = y;
    //    y = t;
    [z, x, y] = [y, x, z];
    console.log(`z:${z},y:${y},x:${x}`);

    //인자의 수가 일치하지 않은 경우
    //let [a,b,c,d=0] = kors;

    //중첩 배열 뽀개기
    {
        let kors = [10,20,30,[40,50]];
        let [
            kor1,
            kor2,
            kor3,
            [
                kor4,
                kor5
            ]
        ] = kors;

        console.log(`${kor1},${kor2},${kor3},${kor4},${kor5}`);

    }

    // 객체와 배열 섞기
    let notice = {
        id:1,
        title:"공지사항",
        files:[
            "img1.png",
            "img2.png"
        ]
    };

    let {id,title,files:[img1],files:[,img2]} = notice;
    console.log(`id : ${id}, title : ${title}, files[0] : ${img1}, files[1] : ${img2}`);
}

// =========== ES6 컬렉션 ============

// let set = new Set();
// set.add(5);
// set.add("5");
// set.add(2);
// set.add(5);
// 아래와 같이 가능.

// set
// .add(5)
// .add("5")
// .add(2)
// .add(5);

// 일반적으로 배열에 데이터를 담아 셋을 생성
let lotto = [2,3,4,3,3,2,5,6,1];
let set = new Set(lotto);
console.log(set.size);

// Set에 담겨진 값 확인 - > has
    // set.has(5); // - > true

// 삭제
    // if(set.has(5))
    //     set.delete(5);
    // console.log(set.size);

// 모두 삭제
    // set.clear();
    // console.log(set.size);

// ========== 순회 ===========
// 1. 고전적인 방식
set.forEach(function(v,k,s){
    console.log(`key : ${k}, value : ${v}, collection : ${s}`);
});
// 2. for of
for(let v of set)
    console.log(`value : ${v}`);

// 객체 추가
let obj1 = {};
let obj2 = {};

let set2 = new Set();

set2
.add(obj1)
.add(obj2);
// 2가 나옴. obj1과 obj2는 다름.
console.log(set2.size);
console.log(set2);