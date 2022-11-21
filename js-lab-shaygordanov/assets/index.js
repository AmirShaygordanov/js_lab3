"use strict"
//3 задание 
function submitClick(){    //Создаём функцию
    let res = 0;
    var inputs = document.querySelectorAll('#form'); // присваивание по ID
    for(let i = 0; i < inputs.length; i++){
        console.log(inputs[i].value)
        res = res + parseInt(inputs[i].value);	
    }
    res == inputs[6] // res = шесть инпутов
    console.log(res)
    alert(res)
}

//4 задание
var countriesSelect = document.querySelector('#countries'); //сохдаем 2 проиводные перменные
var citiesSelect = document.querySelector('#cities');

var arr = {
  rus: ['moscow', 'alabuga', 'kazan'],      //Создаём многомерныйы массив с 3 ключами
  ger: ['berlin', 'datsburg', 'americf'],
  pol: ['varshava', 'polsha', 'ruminia'],   
}

var countrs = Object.keys(arr); // возвращаем массив , в том же порядке, в котором они бы обходились циклом

for (var i = 0; i < countrs.length; i++) {
  countriesSelect.add(new Option(countrs[i]));
}

var Cities = arr[countrs[0]];
for (var i = 0; i < Cities.length; i++) {
  citiesSelect.add(new Option(Cities[i]));
}

countriesSelect.addEventListener('change', function() {
  var cities = arr[this.value];
  citiesSelect.length = 0;
  
  for (var i = 0; i < cities.length; i++) {
    citiesSelect.add(new Option(cities[i]));
  }
});

//5 задание
function buttonClick() {
let li = document.createElement("li");
let ol = document.getElementById("ol");
li.innerHTML = 'Пункт';
ol.appendChild(li) // добавляю узел в конец дочерних элементов
}

// 8задание
function tap(){
    let elem = document.getElementById('elems')
    elem.value = parseInt(elem.value) + 1; //переводим строку в числа
}
//7 задание
var elem = document.getElementsByTagName('p');
for (var i = 0; i < elem.length; i++) {  // создаём цикл который будет возводить в квадрат
	elem[i].addEventListener('click', func);
}

function func() {
	this.innerHTML = this.innerHTML * this.innerHTML;
}
// 9задание
function ButtonClick() {
    let li = document.createElement("li");
    let ol = document.getElementById("ul");
    let elem = document.getElementsByTagName('li');  // оединяем 5 и 7 задание, немного поменяв конструкцию
    li.innerHTML = 'Пункт';
    ol.appendChild(li)
    for (var i = 0; i < elem.length; i++) {
        elem[i].addEventListener('click', func);
    }
    
    function func() {
        this.innerHTML = this.innerHTML + '!';
    }
    
}

