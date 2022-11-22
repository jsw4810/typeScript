interface Developer{
  name:string;
  skill:string;
}

// interface Person{
//   name: string;
// }

var developer: Developer;
var person : Person;

// developer= person;
// person = developer;

class Person{
  name: string;
  skill:string;
}
developer = new Person();

var add = function(a: number){
 
}

var sum = function(a: number, b: number){
  
}
sum = add;

interface Empty<T>{
  //
}
var empty1 : Empty<string> = 'test';
var empty2 : Empty<number> = 100;

empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T>{
  data: T;
}

var notEmpty1 : NotEmpty<string>;
var notEmpty2 : NotEmpty<number>;

notEmpty1 = notEmpty2
