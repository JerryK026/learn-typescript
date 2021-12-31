// function logMessage(value: any) {
//   console.log(value);
// }

// logMessage('hello')
// logMessage(100);
// logMessage(false);

// 하나의 타입 이상을 사용하는 걸 union 타입이라고 한다.
var me: string | number | boolean;
function logMessage(value: string | number) {
  // 타입 가드 : 특정 타입으로 타입의 범위를 좁혀나가는 과정(필터링 과정)을 말한다.
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  if (typeof value === 'string') {
    value.toString();
  }
  throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100)

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// 유니온 타입
function askSomeone(someone: Developer | Person) {
  // 공통 필드인 name만 접근 가능하다.
  someone.name;
  // skill이나 age를 접근할 때 error가 발생한다.
  // Developer 혹은 Person의 필드를 혼용해서 사용할 여지가 있기 때문에 막은 것으로 보인다.
  /*
  someone.skill;
  someone.age;
  */
}

// 인터섹션 타입 : 복수개의 속성을 가지는 것을 인터섹션이라고 한다.
function askSomeone2(someone: Developer & Person) {
  someone.name;
  someone.skill;
  someone.age;
}

askSomeone({ name: '디벨로퍼', skill: '웹 개발'});
askSomeone({ name: '캡틴', age: 100 });

askSomeone2({ name: '디벨로퍼', skill: '웹 개발', age: 26})