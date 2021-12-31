// 이넘 : 특정 값들의 집합을 의미하는 자료형. 목록 같은 것들에 쓰기 좋다
enum Shoes {
  Nike,
  Adidas
}

var myNikeShoes = Shoes.Nike;
var myAdidasShoes = Shoes.Adidas;
console.log(myNikeShoes); // Nike () => 0, Nike = 10 => 10, Nike = '나이키' => 나이키
console.log(myAdidasShoes); // Nike () => 1, Nike = 10 => 11, Adidas = '아디다스' => 아디다스

// 예제
enum Answer {
  Yes = 'Y',
  No = 'N',
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log('정답입니다');
  }
  if (answer === Answer.No) {
    console.log('오답입니다');
  }
}

// 파라미터 타입을 enum에서 제공하는 값만 넘길 수 있다.
askQuestion(Answer.Yes)
