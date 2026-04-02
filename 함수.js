const prompt = require("prompt-sync")();

// 함수 선언문
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
function sumOfPrime(limit) {
  let sum = 0;
  for (let i = 2; i < limit; i++) {
    if (isPrime(i)) sum += i;
  }
  console.log(sum);
}
const input = Number(prompt("정수 입력 : "));
sumOfPrime(input);

// 함수 표현식
const isPrimeExp = function (n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};
const sumOfPrimeExp = function (limit) {
  let sum = 0;
  for (let i = 2; i < limit; i++) {
    if (isPrimeExp(i)) sum += i; // ✅ isPrimeExp
  }
  console.log(sum);
};
const input2 = Number(prompt("정수 입력 : "));
sumOfPrimeExp(input2);

// 화살표 함수 (ES6)
const isPrimeArrow = (n) => {
  if (n < 2) return false;       // ✅ isPrime 로직
  for (let i = 2; i < n; i++) {  // ✅ n 사용
    if (n % i === 0) return false;
  }
  return true;
};
const sumOfPrimeArrow = (limit) => {
  let sum = 0;                        // ✅ let 추가
  for (let i = 2; i < limit; i++) {
    if (isPrimeArrow(i)) sum += i;    // ✅ isPrimeArrow
  }
  console.log(sum);
};
const input3 = Number(prompt("정수 입력 : "));
sumOfPrimeArrow(input3); // ✅ input3

// 즉시 실행 함수(IIFE)
(function () {
  let x = 300;
  let y = 400;
  console.log(x, y);
})();

// 기본값 할당
// function sum(a = 10, b =10){
//   return a + b;
// }

// 익명의 함수를 선언하고 호출까지를 한번에 구현
console.log(((a = 10, b = 10) => a + b)(100, 200)); // ✅ 300