// 제어문 : 프로그래밍에서 흐름 제어를 위해 사용 됨
// 조건문 : 주어진 조건에 따라 수행을 분기 하는 것 (삼항연산자, if, if ~ else if ~ else, switch ~ case)
// 반복문 : 주어진 조건이 참인 동안 반복 수행 하는 것 (while, do ~ while, for, for in, for of)
const prompt = require("prompt-sync")();

// 삼항연산자 사용
// ┗ 나이를 입력 받아 19세 부터는 성인, 19세 미만은 미성년자를 삼항연산자를 사용해서 처리하기
let age = Number(prompt("나이 입력 : "));
console.log("당신은 " + (age >= 19 ? "성인" : "미성년자") + "입니다.");

// if ~ else 문을 이용해 등급 출력하기
let kor = Number(prompt("국어 입력: "));   // ✅ ) 추가
let eng = Number(prompt("영어 입력: "));   // ✅ ) 추가
let math = Number(prompt("수학 입력: ")); // ✅ ) 추가

if (kor >= 0 && kor <= 100 && eng >= 0 && eng <= 100 && math >= 0 && math <= 100) {
  let total = kor + eng + math;
  let avg = total / 3;

  if (avg >= 90) {
    console.log("A");
  } else if (avg >= 80) {
    console.log("B");
  } else if (avg >= 70) {
    console.log("C");
  } else if (avg >= 60) {
    console.log("D");
  } else {
    console.log("F");
  }                                               // ✅ 안쪽 if 여기서 닫기

} else {                                          // ✅ 바깥 if의 else (위치 수정)
  console.log("성적 입력이 잘못 되었습니다.");    // ✅ " 추가
}

// 스위치문 : 조건식이 아닌 조건값이 와야 함 (정수, 문자열, 실수는 안됨), break 탈출문 필요
// 좌변 값, 연산자, 우변 값을 입력 받아 산술 연산(+, -, *, /, %)을 수행하는 스위치문 만들기
// 입력 : 23 + 45
// 출력 : 68

process
let x = Number(prompt("좌변 값 입력: "));
let op = prompt("연산자 입력: ");
let y = Number(prompt("우변 값 입력: "));

switch (op) {
  case "+":
    console.log(x + y);
    break;
  case "-":
    console.log(x - y);
    break;
  case "*":
    console.log(x * y);
    break;
  case "/":
    console.log(x / y);
    break;
  case "%":
    console.log(x % y);
    break;
  default:
    console.log("계산식이 잘못 입력 되었습니다.");

}

// BMI 계산기 : 
