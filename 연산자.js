// 산술연산자 : +, -, *, /, %, **(거듭 제곱 연산자)
const prompt = require("prompt-sync")();

let x = 10;
let y = 4;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(parseInt(x / y));
console.log(x ** y);

// 비교연산자
let a = 10;
let b = "10";
console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a !== b);

// ─────────────────────────────────────
// 예제 1. 홀짝 판별기
// ─────────────────────────────────────
let num1 = Number(prompt("숫자 입력 : "));
if (num1 % 2 === 0) {
  console.log(num1 + "은(는) 짝수입니다.");
} else {
  console.log(num1 + "은(는) 홀수입니다.");
}

// ─────────────────────────────────────
// 예제 2. 학점 계산기
// ─────────────────────────────────────
let score = Number(prompt("점수 입력 : "));
if (score >= 90) {
  console.log("학점 : A");
} else if (score >= 80) {
  console.log("학점 : B");
} else if (score >= 70) {
  console.log("학점 : C");
} else if (score >= 60) {
  console.log("학점 : D");
} else {
  console.log("학점 : F");
}

// ─────────────────────────────────────
// 예제 3. 입력받은 구구단 출력하기
// ─────────────────────────────────────
let dan = Number(prompt("구구단 입력 (2~9) : "));
for (let i = 1; i <= 9; i++) {
  console.log(dan + " x " + i + " = " + dan * i);
}

// ─────────────────────────────────────
// 예제 4. 입력받은 수까지의 합
// ─────────────────────────────────────
let num4 = Number(prompt("숫자 입력 : "));
let sum = 0;
for (let i = 1; i <= num4; i++) {
  sum += i;
}
console.log("1 ~ " + num4 + " 합계 : " + sum);

// ─────────────────────────────────────
// 예제 5. 별 출력하기
// ─────────────────────────────────────
let num5 = Number(prompt("숫자 입력 : "));
for (let i = 1; i <= num5; i++) {
  console.log("★".repeat(i));
}

// ─────────────────────────────────────
// 예제 6. 양수, 음수 개수 구하기
// ─────────────────────────────────────
let plus = 0;
let minus = 0;
for (let i = 1; i <= 10; i++) {
  let num6 = Number(prompt(i + "번째 수 입력 : "));
  if (num6 > 0) {
    plus++;
  } else if (num6 < 0) {
    minus++;
  }
}
console.log("양수 개수 : " + plus);
console.log("음수 개수 : " + minus);