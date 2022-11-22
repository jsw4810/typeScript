interface Developer{
  name:string;
  skill:string
}

interface Person{
  name:string;
  age:number;
}

function introduce(): Developer | Person{
  return {name: 'Tony',age:33,skill:'Iron'}
}
var tony = introduce();
console.log(tony?.skill);

if((tony as Developer).skill){
  var skill = (tony as Developer).skill
  console.log(skill);
} else if((tony as Person).age){
  var age = (tony as Person).age
  console.log(age);
}
// 타입 가드 정의 
// target이 Developer 인터페이스인지 검사 
function isDeveloper(target: Developer | Person): target is Developer{
  return (target as Developer).skill !==undefined;
}

if (isDeveloper(tony)){
  console.log(tony.skill);
} else{
  console.log(tony.age);
}