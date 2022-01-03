function logText<T>(text: T ): T {
  console.log(text);

  return text;
}


/*
// 방법 1. 다른 타입을 받는 다른 함수를 사용한다.
// 함수 수가 늘어나 유지보수에 좋지 않다.
function logNumber(num: number) {
  console.log(num);

  return num;
}

// 방법 2. 유니온을 사용해 선언한다.
// 교집합에 대해서만 수행할 수 있다는 단점이 있다.
function logText(text: string | number) {
  console.log(text);

  return text
}
*/

logText<string>('하이');
const login = logText<boolean>(true);

// 인터페이스에 제네릭을 선언
interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<string> = { value: 'abc', selected: false };

// 제네릭의 타입 제한
// 제네릭 타입에 추가적인 정보를 줄 수 있다.
function LogTextLength<T>(text: T[]): T[] {
  console.log(text.length);
  text.forEach(function (text) {
    console.log(text);
  })
  return text;
}
LogTextLength(['hi', 'abc']);

// 제네릭 타입 제한2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}

function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}
logTextLength('a');
// number에는 length가 있지 않다.
// logTextLength(10);
logTextLength({ length: 10 })

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T>(itemOption: T): T {
  return itemOption;
}

getShoppingItemOption(10);
getShoppingItemOption<string>('a');