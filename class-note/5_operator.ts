// function logMessage(value: any){
//   console.log(value);
// }

// logMessage('hello');
// logMessage(100);

//유니온 타입
var seho: string | number | boolean;

function logMessage(value: string | number){
  if(typeof value==='number'){
    value.toLocaleString();
  }
  if(typeof value==='string'){
    value.toLowerCase();
  }
  throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);


interface Developer{
  name:string;
  skill:string;
}
interface Person{
  name:string
  age:number;
}
// | 유니온: 둘중에 뭐가 들어올지 모름
function askSomeone(someone:Developer | Person){
  // someone.age,
  // someone.name,
  // someone.skill
}
askSomeone({name:'캡틴',age:100})
askSomeone({name:'디벨로퍼', skill:'웹 개발'})

// & 인터섹션 둘다 들어올 수 있음  -> 둘다 가져옴
// function askSomeone(someone:Developer & Person){
//   someone.age,
//   someone.name,
//   someone.skill
// }


// var seho: string|number|boolean;
// var capt: string&number&boolean
