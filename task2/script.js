//объявляю числа
const a = prompt('Введите первое число для сравнения');
      b = prompt('Введите второе число для сравнения');
      c = prompt('Введите третье число для сравнения');

//сравнивю числа и отвечаю
if(a > b){
    if(a > c){
        alert(a + ' - самое большое число.')
    }else{
        alert(c + ' - самое большое число.')
    }
}else if(b > a){
    if(b > c){
        alert(b + ' - самое большое число.')
    }else{
        alert(c + ' - самое большое число.')
    }
}