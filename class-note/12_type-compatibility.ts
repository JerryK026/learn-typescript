interface Developer2 {
  name: string;
  skill: string;
}

interface Person2 {
  name: string;
}

var developer: Developer2;
var person: Person2;
// 우변이 좌변을 포함한 관계일 때 타입이 호환될 수 있다.
// 구조적 타이핑
person = developer;
// 에러 발생
// developer = person;

// 함수
var add = function(a: number) {
  // ...
}

var sum = function(a: number, b: number) {
  // ...
}

// add는 인자가 1개이므로 성립 x
// add = sum;

sum = add;

// 제네릭
interface Empty<T> {
  // ...
}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T
}
var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;
// 에러 발생
/*
notEmpty1 = notEmpty2;
notEmpty2 = notEmpty1;
*/
