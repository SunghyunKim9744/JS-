// 모듈 - > 부품의 고립화
// 아무도 못 보는 영역

// export - > 다른 영역으로 가져갈 수 있는 키워드
// default - > 기본적으로 가져갈 수 있는 키워드
export default function test() {
    console.log("module1 test");
}

export function test2() {
    console.log("module1 test2");
}

export function test3() {
    console.log("module1 test3");
}