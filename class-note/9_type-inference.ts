//타입추론 1 
// var a=10;

// function getA(b=10){
//   var c =  'abc'
//   return b+c;
// }

// 타입추론2

// interface Dropdown<T>{
//   value:T;
//   title: string;
// }

// var shoppingTiem: Dropdown<string>={ value:'abc',title:'audio'}

//타입추론3

interface Dropdown<T>{
  value:T;
  title: string;
}
interface DetailDropdown<K> extends Dropdown<K>{
  tag:K;
  descript:string;
}

var detailedItem: DetailDropdown<string> ={
  title:'abc',
  descript:'ab',
  value:'abc',
  tag:'a'
}

// Best Commoin Type
var arr = [1,2,true,true,'a'];