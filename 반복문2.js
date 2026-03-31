const { log } = require("node:console");

const prompt = require("prompt-sync")();

let number = Number(prompt("정수 입력: "));
let sum1 = 0;
let sum2 = 0;
let i = 0;
// 입력 받은 정수까지의 합을 구하기
// 입력 10 => 합 55
// 1. while문 사용
while (i <= number) {
  sum1 += i;
  i++;
} console.log(sum1);

// 2. for 문 사용
for (let i = 0; i <= number; i++) {
  sum2 += i;
} console.log(sum2);

// 배열 객체 반복 하기
let brands = ["애플", "구글", "삼성", "아마존", true, 100];
for (let i = 0; i < brands.length; i++) {
  // console.log(brands[i]);
  process.stdout.write(brands[i] + " ");
}
console.log();

for (let e of brands) {
  process.stdout.write(e + " ");
}
console.log();

// for.. in : 객체의 모든 열거 가능한 속성(키)을 반복(iterate)할 때 사용
const person = {
  name: "곰돌이",
  job: "프로그래머",
  addr: "경기도 수원시"
};

for (let key in person) {
  process.stdout.write(person[key] + " ");
}
console.log();

let people = [
  {
    name: "곰돌이",
    job: "프로그래머",
    addr: "경기도 수원시",
  },
  {
    name: "토끼",
    job: "디자이너",
    addr: "서울시 강남구",
  },
  {
    name: "여우",
    job: "마케터",
    addr: "부산시 해운대구",
  },
  {
    name: "늑대",
    job: "개발자",
    addr: "인천시 연수구",
  },
  {
    name: "다람쥐",
    job: "데이터분석가",
    addr: "대전시 유성구",
  },
];

for (let person of people) {
  //console.log(person);
  for (let key in person) {
    console.log(`${key} : ${person[key]}`);
  }
}

// 상근날드 : 햄버거 3개의 값 입력, 음료 2개의 값 입력
// 세트 메뉴는 햄버거 3개 중 제일 싼 가격 + 음료 두개 중 작은 가격 -50
// 배열을 이용

let hamburgersPrice = [];
hamburgersPrice.push(Number(prompt("햄버거 가격 입력 : ")));
hamburgersPrice.push(Number(prompt("햄버거 가격 입력 : ")));
hamburgersPrice.push(Number(prompt("햄버거 가격 입력 : ")));
let hPrice = hamburgersPrice[0];

let drinkPrice = [];
drinkPrice.push(Number(prompt("음료 가격 입력: ")));
drinkPrice.push(Number(prompt("음료 가격 입력: ")));
let dPrice = drinkPrice[0];

let set = 0;

for (let i = 1; i < hamburgersPrice.length; i++) {
  if (hPrice > hamburgersPrice[i]) {
    hPrice = hamburgersPrice[i];
  }
}
for (let i = 1; i < drinkPrice.length; i++) {
  if (dPrice > drinkPrice[i]) {
    dPrice = drinkPrice[i];
  }
}

set = hPrice + dPrice - 50;
console.log("세트 가격 : " + set);

const menu = new Array(5);
const input = prompt("햄버거 3개 음료 2개 연속으로 입력 : ");
const values = input.split(" ");

for (let i = 0; i < menu.length; i++) {
  menu[i] = parseInt(values[i]);
}

let minBurger = menu[0]; // 배열 내의 임의의 값을 지정
let minDrink = menu[3];

for (let i = 0; i < menu.length; i++) {
  if (i < 3 && minBurger > menu[i]) {
    minBurger = menu[i];
  }
  if (i >= 3 && minDrink > menu[i]) {
    minDrink = menu[i];
  }
}

console.log(`세트 메뉴 가격 : ${minBurger + minDrink - 50}`);

// 임의의 정수 8개를 입력 받아 홀수와 짝수 나누어 담기
const inputArr = []; // 전체 수 배열
// ✅ 수정 : new Array(8) → [] (push 사용 시 앞에 undefined 생기는 문제 방지)
const oddArr = [];
// ✅ 수정 : new Array(8) → [] (push 사용 시 앞에 undefined 생기는 문제 방지)
const evenArr = [];
const input2 = prompt("임의의 정수 8개 입력 : ");
for (let i = 0; i < 8; i++) {
  // ✅ 수정 : values2 제거 후 input2에서 바로 split하여 inputArr에 저장
  inputArr[i] = parseInt(input2.split(" ")[i]);
}
for (let i = 0; i < inputArr.length; i++) {
  if (inputArr[i] % 2 == 0) {
    evenArr.push(inputArr[i]);
  } else {
    oddArr.push(inputArr[i]);
  }
}
console.log(oddArr);
console.log(evenArr);