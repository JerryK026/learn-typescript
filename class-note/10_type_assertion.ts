// 타입 단언 (type assertion)
var a2;
a2 = 20;
a2 = 'a';
// 타입스크립트 너보단 내가 더 잘아니 내가 단언한 대로 따라가렴
var b = a as string;

// DOM API 조작
let div = document.querySelector('#app') as HTMLDivElement;
if (div) {
  div.innerText;
}
