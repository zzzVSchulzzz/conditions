//объявляю катеты
const a = prompt('Катет A');
      b = prompt('Катет B');
      c = prompt('Гипотенуза  C');

//Проверка по теореме пифагора + вывод в консоль
if((a ** 2) + (b ** 2) === c ** 2){
    console.log('Это прямоугольный треугольник!')
}else{
    console.log('Это не  прямоугольный треугольник!')
}