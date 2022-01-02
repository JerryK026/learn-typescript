function Person1(name, age) {
  this.name = name;
  this.age = age;
}
var capt = new Person('캡틴', 100)
// 다음 위 아래는 일치하는 코드다.

class Person1 {
  constructor(name, age) {
    console.log('생성 되었습니다');
    this.name = name;
    this.age = age;
  }
}

var j = new Person('서경', 27); // 생성 되었습니다.