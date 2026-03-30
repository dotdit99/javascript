// 산술연산자 : +, -, *, /, %, **(거듭 제곱 연산자)
const prompt = require("prompt-sync")();
let x = 10;
let y = 4;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y); // 결과값이 실수이면 실수 타입으로 결정 남
console.log(parseInt(x / y));
console.log(x ** y);

// 비교 연산자
let a = 10;
let b = "10";
console.log(a == b) // 동등연산자 : 두 값이 같은지를 비교
console.log(a === b) // 일치연산자 : 두 값과 데이터 타입이 같은지 비교

console.log(a != b);
console.log(a !== b);

// 예제1. 홀짝 판별기
let a1 = Number(prompt("숫자 입력: "));
if (a1 % 2 == 0) {
  console.log("짝 입니다.");
} else {
  console.log("홀 입니다.");
}

// 예제2. 학점 계산기 : 90점 이상 A, 80점 이상 B, 70점 이상 C, 60점 이상 D, 나머지 F
let a2 = Number(prompt("점수 입력: "));
if (a2 >= 90) {
  console.log("A 학점입니다.");
} else if (a2 >= 80) {
  console.log("B 학점입니다.");
} else if (a2 >= 70) {
  console.log("C 학점입니다.");
} else if (a2 >= 60) {
  console.log("D 학점 입니다.");
} else {
  console.log("F 학점입니다.");
}

// 예제3. 입력받은 구구단 출력하기
let a3 = Number(prompt("구구단 단 수 입력: "));
let table = `\n--- ${a3}단 ---\n`;
for (let j = 1; j <= 9; j++) {
  table += `${a3} x ${j} = ${a3 * j}\n`;
}

console.log(table);
// 예제4. 입력받은 수까지의 합을 구하기
let total = 0;
let a4 = Number(prompt("수 입력: "));
for (let i = 1; i <= a4; i++) {
  total += i
}

console.log(total);
// 예제5. 별 출력하기
// ┗ 수를 입력하세요:5
// *
// **
// ***
// ****
// *****
let a5 = Number(prompt("별 수 입력: "));
for (let h = 1; h <= a5; h++) {
  console.log("*".repeat(h));
}

// 예제 6. 10개의 수를 입력 받아 양수, 음수 개수 구하기
let a6 = [];
let cnt1 = 0;
let cnt2 = 0;
for (let i = 1; i <= 10; i++) {
  a6.push(Number(prompt(`${i}번째 수 입력: `)));
  if (a6[i - 1] > 0) {
    cnt1++;
  } else if (a6[i - 1] < 0) {
    cnt2++;
  }
}

console.log("양수 개수 : " + cnt1);
console.log("음수 개수 : " + cnt2);