var a = 'abc';

// 디폴트 값을 넣어 타입을 지정할 수 있음.
function getB(b = 10) {
  var c = 'hi';
  return b + c;
}

// 타입 추론 기본3
interface Dropdown<T> {
  value : T;
  title: string;
}

var shoppingItem: Dropdown<string> = {
  value: 'abc',
  title: 'hello',
}

interface DetailedDropDown<K> extends Dropdown<K>{
  description: string;
  tag: K;
}

// string을 넘기므로 T, K 모두 string으로 넘어감
var detailedItem: DetailedDropDown<string> = {
  title: 'abc',
  description: 'ab',
  value: 'a',
  tag: 'a'
}

// Best Common Type
// (string | number | boolean)[]
var arr = [1, 2, true, 'a'];
