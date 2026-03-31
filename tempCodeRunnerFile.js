// 제어문 : 프로그래밍에서 흐름 제어를 위해 사용 됨
// 조건문 : 주어진 조건에 따라 수행을 분기 하는 것 (삼항연산자, if, if ~ else if ~ else, switch ~ case)
// 반복문 : 주어진 조건이 참인 동안 반복 수행 하는 것 (while, do ~ while, for, for in, for of)

const prompt = require("prompt-sync")();

// 삼항연산자 사용
// ┗ 나이를 입력 받아 19세 부터는 성인, 19세 미만은 미성년자를 삼함연산자를 사용해서 처리하기

let age = Number(prompt("나이 입력 : "));
console.log("당신은 " + (age >= 19 ? "성인" : "미성년자") + "입니다.");

// if ~ else 문을 이용해 등급 출력하기
// 국어, 영어, 수학 성적을 입력 받아 총점과 평균을 구하고 평균이 90점 A, 80점 이상 B, 70점 이상 C, 60점 이상 D, 나머지 F
// 국어, 영어, 수학 성적의 입력은 0 ~ 100 사이여야 함
let kor = Number(prompt("국어 입력: ");
let eng = Number(prompt("영어 입력: ");
let math = Number(prompt("수학 입력: ");

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
  }else {
    console.log("성적 입력이 잘못 되었습니다.);
  }
