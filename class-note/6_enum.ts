enum Shoes{
  Nike = '나이키',
  Adidas = '아이다스'
}
var myShoes = Shoes.Nike
console.log(myShoes); // "나이키"

//이넘 활용 사례

enum Answer{
  Yes = 'Y',
  No = 'N'
}

function askQuestion(answer: Answer) {
  if(answer===Answer.Yes){
    console.log('정답');
  }
  if(answer===Answer.No){
    console.log('오답');
  }
}
askQuestion(Answer.Yes);
askQuestion('Yes');
// askQuestion('예스');
// askQuestion('y');
// askQuestion('yes');