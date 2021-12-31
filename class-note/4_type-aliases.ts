interface Person {
  name: string;
  age: number;
}

// type Person = {
//   name: string;
//   age: number;
// }

// 인터페이스는 extends를 활용해 확장이 가능한데 비해 type은 확장 불가능하다.
// 좋은 sw는 확장이 용이해야 한다. 가능한 interface를 활용하는 것을 추천한다.

const ksk: Person = {
  name: '서경',
  age: 26
}

type MyString = string;
var str: MyString = 'hello';