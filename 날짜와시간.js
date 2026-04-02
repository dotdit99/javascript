const date = new Date();
console.log(date);

const days = ["일", "월", "화", "수", "목", "금", "토"];

console.log(`현재 연도 : ${date.getFullYear()}`);  // 현재 연도 출력
console.log(`현재 월   : ${date.getMonth() + 1}`); // 현재 월 출력 (0부터 시작해서 +1 필요)
console.log(`현재 날짜 : ${date.getDate()}`);      // 현재 날짜 출력 (1~31)
console.log(`현재 요일 : ${days[date.getDay()]}요일`); // 현재 요일 출력 (0=일요일 ~ 6=토요일)
console.log(`현재 시간 : ${date.getHours()}`);     // 현재 시간 출력 (0~23)
console.log(`현재 분   : ${date.getMinutes()}`);   // 현재 분 출력 (0~59)
console.log(`현재 초   : ${date.getSeconds()}`);   // 현재 초 출력 (0~59)
console.log(`경과 시간 : ${date.getTime()}ms`);    // 1970.01.01 자정부터 경과한 밀리초 출력