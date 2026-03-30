let name = "곰돌이";
let age = 23;
let addr = "충청남도 천안시";

console.log(name);
console.log(age);
console.log(addr);

// 이건 주석

/*
이건 여러
줄 주석
*/

// 스타일 가이드
// 1. 파일 이름: 소문자, 하이픈(-), 밑줄(_)만 사용
// 2. 파일 확장자 : .js
// 3. 인코딩 : UTF-8
// 4. 줄 바꿈 : ;
// 5. 네이밍 규칙 : camelCase : userName, getUserData

// 식별자 : 변수, 함수, 객체 이름 등 프로그래밍 요소를 구분하는 이름
// ┗ 영어 대소문자, 밑줄(_), $ 로 시작 해야 함
// ┗ 숫자로 시작할 수 없음
// ┗ 예약어 사용 금지 (let, var, const, if 등등등)

let userName = "홍길동";
let _score = 100;
let $value = 50.0;

// 변수와 상수
// ┗ let : 재할당 가능한 변수 선언 (블록 스코프를 따름)
// ┗ const : 상수, 재할당 불가능
// ┗ var : 예전 변수 선언 방식 (사용 하지 말 것)

let test1 = 100;
{
  let test1 = 200;
}

const test2 = 100;
//test2 = 100; // 에러 발생

test3 = 100;
var test3;

console.log(test3);

