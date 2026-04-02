// 1. 각 이름 앞에 학생 : 을 붙인 새 배열
const names = ["김철수", "이영희", "박민준"];
const students = names.map((e) => `학생: ${e}`);
console.log(students);
// 출력 결과 : [ '학생 : 김철수', '학생 : 이영희', '학생 : 박민준' ]

// 2. 상품 가격 배열에서 부가세(10%)를 포함한 금액 배열
const prices = [10000, 25000, 8000, 45000];
const realPrices = prices.map(e => (e / 10 + e));
console.log(realPrices);
// 출력 결과 : [ 11000, 27500, 8800, 49500 ]

// 3. 아래 배열에서 20세 이상인 사람만 골라 내기
const people = [
  { name: "김철수", age: 17 },
  { name: "이영희", age: 25 },
  { name: "박민준", age: 19 },
  { name: "최수지", age: 22 },
];
const newPeople = people.filter(e => e.age >= 20);
console.log(newPeople);
// 출력 결과 : [ { name: '이영희', age: 25 }, { name: '최수지', age: 22 } ]

// 4. 아래 배열에서 "com"으로 끝나는 이메일만 걸러 내기
const email = [
  "kim@naver.com",
  "lee@daum.net",
  "park@gmail.com",
  "choi@kakao.net",
];
const newEmail = email.filter(e => !e.endsWith("com"));
console.log(newEmail);
// 출력 결과 : [ 'lee@daum.net', 'choi@kakao.net' ]

// 5. 재직 중인 직원 중 연봉 5000만원 이상인 직원의 이름과 연봉(만원 단위)만 출력
const employees = [
  { name: "김부장", salary: 72000000, active: true },
  { name: "이과장", salary: 48000000, active: true },
  { name: "박대리", salary: 38000000, active: false },
  { name: "최주임", salary: 55000000, active: true },
  { name: "정사원", salary: 32000000, active: true },
];

const newEmployees = employees
  .filter(e => e.salary >= 50000000 && e.active === true)
  // ({}) : 소괄호() = 객체임을 알려줌, 중괄호{} = 객체를 만듦
  .map(e => ({ name: e.name, salary: e.salary / 10000 + "만" }));
console.log(newEmployees);
// 출력 결과 : [ { name: '김부장', salary: '7200만' }, { name: '최주임', salary: '5500만' } ]