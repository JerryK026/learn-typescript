interface User {
  age: number;
  name: string;
}

// 변수에 활용한 인터페이스
var sk: User = {
  age: 26,
  name: 'Seokyung'
}

// 함수에 활용한 인터페이스
function getUser(user: User) {
  console.log(user);
}

const jerry = {
  name: 'jerry',
  age: 26
}

getUser(jerry)

// 함수의 스펙(구조)에 활용한 인터페이스
interface sumFunction {
  (a: number, b: number): number;
}

var sum: sumFunction;
sum = function(a: number, b: number): number {
  return a + b;
}

// 인덱싱
interface StringArray {
  [index: number]: string
}

var tArr: StringArray = ['a', 'b', 'c'];
// sArr[0] = 10;

interface StringRegexDictionary {
  [key: string]: RegExp;
}

var tObj: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}

// tObj['cssFile'] = 'a';

Object.keys(tObj).forEach(function(value) {})

// 인터페이스 확장
interface Person {
  name: string,
  age: number
}

interface Developer extends Person {
  language: string
}

var capt: Developer = {
  name: 'captain',
  age: 100,
  language: 'ts'
}