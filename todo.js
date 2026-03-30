// 1. DOM 요소 가져오기
const input = document.getElementById("todoInput");
const list = document.getElementById("todoList");
const countEl = document.getElementById("count");

// 2. 할 일 추가 함수
function addTodo() {
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement("li");

  const cb = document.createElement("input");
  cb.type = "checkbox";
  cb.addEventListener("change", () => {
    span.classList.toggle("done", cb.checked);
    updateCount();
  });

  const span = document.createElement("span");
  span.textContent = text;

  const btn = document.createElement("button");
  btn.textContent = "삭제";
  btn.addEventListener("click", () => {  // ✅ 따옴표 수정
    li.remove();
    updateCount();
  });  // ✅ 닫힘 위치 수정

  li.append(cb, span, btn);
  list.appendChild(li);
  input.value = "";
  updateCount();
}

// 3. 개수 업데이트
function updateCount() {
  const total = list.children.length;
  const done = list.querySelectorAll(".done").length;  // ✅ querySelectorAll로 수정
  countEl.textContent = `전체 ${total}개 - 완료 ${done}개`;
}

// Enter 키로도 추가
input.addEventListener("keydown", e => {
  if (e.key == "Enter") addTodo();
});