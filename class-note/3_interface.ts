interface User{
  age:number,
  name:string
}

//변수에 활용한 인터페이스
var seho : User={
  age:1,name:'10'
}

//함수에 인터페이스 활용
function getUser(user:User){
  console.log(user);
}
const capt= {
  name:'캡틴',
  age:10
}
getUser(capt);