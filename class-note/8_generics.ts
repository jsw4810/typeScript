// function logText(text:string):string{
//   console.log(text);
//   return text;
// }
// logText('test');

// function logText<T>(text:T):T{
//   console.log(text);
//   return text;
// }
// logText<string>('하이');

// function logText(text:string){
//   console.log(text);
//   // text.split('').reverse().join('');
//   return text;
// }

// function logNumber(num:number){
//   console.log(num);
//   return num;
// }
function logText<T>(text:T):T{
  console.log(text);
  return text;
}

const str = logText<string>('a')
str.split('');
const login = logText<boolean>(true);
login.valueOf();
logText<number>(10);
// const num = logNumber(10);
// logText(true);