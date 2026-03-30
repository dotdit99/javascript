// 프롬프트 입력으로 이름, 학번, 국어, 영어, 수학 성적을 입력 받음 -> 이름, 학번, 총점, 평균을 객체 리터럴로 만들기

// ① require("prompt-sync") → 모듈을 불러옴(함수 자체를 가져옴)
// ② () → 가져온 함수를 즉시 호출 해서 실제 사용할 수 있는 상태로 만듦
const prompt = require("prompt-sync")();


const studentName = prompt("이름 입력 : ");
const studentId = prompt("학번 입력 : ");
const kor = Number(prompt("국어 성적 입력 : "));
const eng = Number(prompt("영어 성적 입력 : "));
const math = Number(prompt("수학 성적 입력 : "));
const total = kor + eng + math;
const avg = total / 3; // 형변환 필요 없음

const student = {
  studentName,
  studentId,
  total,
  avg,
};

console.log(student);

// 정수를 입력 받아 정수 범위 이내의 숫자 중 7의 배수를 구하고 한 줄에 10개씩 출력하기
let cnt = 0;
const num = Number(prompt("정수 입력: "));

for (let i = 1; i <= num; i++) {
  if (i % 7 === 0) {
    process.stdout.write(`${i}\t`);  // 줄바꿈 없이 출력
    cnt++;

    if (cnt % 10 === 0) {  // 10개마다 줄바꿈
      process.stdout.write("\n");
    }
  }
}

process.stdout.write("\n");  // 마지막 줄바꿈