// 소수 판별 함수 (선언문)
function isPrime(n) {
  if (n < 2) return false; // 2 미만은 소수가 아님
  for (let i = 2; i < n; i++) { // 2부터 n-1까지 순회
    if (n % i === 0) return false; // 나누어 떨어지면 소수 아님
  }
  return true; // 끝까지 나누어지지 않으면 소수
}

// 소수의 합을 구하는 함수 (선언문)
function sumPrime(n) {
  let sum = 0; // 합계 초기값
  for (let i = 2; i < n; i++) { // 2부터 n 미만까지 순회
    if (isPrime(i)) sum += i; // 소수이면 합계에 누적
  }
  return sum; // 최종 합계 반환
}

// 소수 판별 함수 (표현식)
const isPrimeExpr = function (n) {
  if (n < 2) return false; // 2 미만은 소수가 아님
  for (let i = 2; i < n; i++) { // 2부터 n-1까지 순회
    if (n % i === 0) return false; // 나누어 떨어지면 소수 아님
  }
  return true; // 끝까지 나누어지지 않으면 소수
}

// 소수의 합을 구하는 함수 (표현식)
const sumPrimeExpr = function (n) {
  let sum = 0; // 합계 초기값
  for (let i = 2; i < n; i++) { // 2부터 n 미만까지 순회
    if (isPrimeExpr(i)) sum += i; // 소수이면 합계에 누적
  }
  return sum; // 최종 합계 반환
}

const input = Number(prompt("정수 입력 : ")); // 문자열 입력을 숫자로 변환
console.log("함수 선언문 결과 : " + sumPrime(input)); // 선언문 버전 실행
console.log("함수 표현식 결과 : " + sumPrimeExpr(input)); // 표현식 버전 실행