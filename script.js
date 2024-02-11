

// числа

// 1
//Трём верстальщикам нужно сверстать 20 макетов за спринт. Они решили разделить макеты поровну, чтобы каждый сделал одинаковое число макетов.
// let worker =3;
// let task =20;
// console.log (`Количество неподготовленных макетов: ${task%worker}`)

//2

//За два рабочих дня программист успевает реализовать на сайте одну новую задачу от заказчика. При этом у заказчика каждую неделю возникает 4 новые задачи.
//Выведите в консоль выражение, которое рассчитает количество нереализованных задач заказчика за 4 недели. 
// Считайте, что в каждой неделе по 5 рабочих дней.
// let day =2;
// let task = 1;
// let newTaskforWeek = 4;
// let week = 4;
// let workingDayForWeek= 5;
// console.log (`Количество нереализованных задач ${week*newTaskforWeek-task/day*week*workingDayForWeek}`);

// строки, конкатенация, приведение числа к строке

//3

//Выведите в консоль результат сложения двух строк “пяти” и “этажка”.
// let stringFirst='пяти';
// let stringSecond='этажка';
// console.log(stringFirst+stringSecond)

//4

//Сложите слово 'Владивосток' и число 2000, а также добавьте между ними пробел, чтобы получилось название известной песни. Результат выведите в консоль.
// const part1 = 'Владивосток';
// const part2= '2000';
// console.log (part1+' '+part2);

//5

//Первое произведение Александра Сергеевича Пушкина появилось на страницах московского журнала «Вестник Европы» на третьем году его учёбы в Царскосельском лицее. Это было послание «К другу стихотворцу».
// Рассчитайте год публикации стихотворения, если А. С. Пушкин родился в 1799 году, а в лицей поступил в возрасте 12 лет.
// Математические операции запишите внутри фигурных скобок шаблонной строки:
// console.log(`Первое произведение 
// А.С. Пушкина было опубликовано 
// в ${...} году`);
// let firstTextPushkin = 3;
// let age = 12;
// let year = 1799;
// console.log (`Первое произведение А.С.Пушкинан было опуьликовано в ${firstTextPushkin+age+year}`)


//Переменные, типы переменных

//6

//Объявите переменную с именем fahrenheit и положите в неё значение 451.
// let fahrenheit =451;

// //7

//Добавьте новую переменную celsius и запишите в неё значение, рассчитанное по формуле перевода температуры из градусов по Фаренгейту в градусы Цельсия: (fahrenheit - 32) / 1.8; 
// let celsius = (fahrenheit-32)/1.8;

// //8

//В предыдущей задаче вы использовали переменные fahrenheit и celsius как числа, в этой — будете работать с ними как со строками.
// Применив переменные и шаблонные строки, выведите в консоль строку: '_fahrenheit_ градуса по Фаренгейту - это _celsius_ градуса по Цельсию.' 
// где _fahrenheit_ и _celsius_ — это значения соответствующих переменных.
// console.log (`${fahrenheit} градусов по Фаренгейту - это ${celsius.toFixed(1)} градуса по Цельсию`);

// Условия, больше-меньше, булевы операции

//9

//Подставьте логический оператор === либо !== между операндами так, чтобы все выражения вернули значение false.
// console.log(7   7);
// console.log('aA'   'Aa');
// console.log(((25 * 12 + 1) * 4) / 5      (50 * 6 + 2 * 0.5) / 1.25);
// console.log (7!==7);
// console.log('aA'==='Aa');
// console.log (((25*12+1)*4)/5!==(50*6+2*0.5)/1.25);

//10

//Сейчас в консоль выводится утверждение, что «2020 год — високосный». Добавьте условие if перед инструкцией console.log, чтобы утверждение не было голословным. 
// Номер года хранится в переменной year. 
// Для простоты будем считать, что год — високосный, если его номер кратен 4.
// let year = 2020;
// добавьте условие здесь
// console.log(year + ' год - високосный');
// let year=2009;
// if (year%4===0) {
// console.log (year+' год - високосный')
// }

// //11

//Добавьте условие else на случай, если в переменной year окажется невисокосный год. 
// В этом случае выводите в консоль «XXXX год — невисокосный», например: «2009 год — невисокосный».

// if (year%4===0) {
//     console.log (year+' год - високосный')
//     } else {
//         console.log (year+' год - невисокосный')
//     }

//12

//Правильный расчёт високосных годов ведётся по правилу:
// год, номер которого кратен 400, — високосный;
// или годы, номер которых кратен 4, но не кратен 100, — високосные;
// все остальные годы — невисокосные.
// Дополните условие if (...), чтобы проверка на «високосность» была настоящей. Используйте булевы операции И (&&) и ИЛИ (||).

// let realVisokosnyjYear = 2020;
// if (realVisokosnyjYear % 400 === 0) {
//     console.log(realVisokosnyjYear + ' год - високосный')
// } else if (realVisokosnyjYear % 4 === 0 && realVisokosnyjYear % 100 !== 0) {
//     console.log(realVisokosnyjYear + ' год - високосный')
// } else {
//     console.log(realVisokosnyjYear + ' год - невисокосный')
// }

// массивы, создание, доступ по индексу, длина массива

//13

//  Создайте переменную morningList и запишите в неё массив дел, который включает в себя следующие строки: 
// 'Встать с кровати'
// 'Почистить зубы'
// 'Проверить сториз'
// 'Позавтракать'
// Выведите получившийся массив в консоль.

// let morningList =['встать с кровати','почистить зубы','проверить сториз','позавтракать'];
// console.log (morningList);

// //14

//Выведите в консоль первый и последний элемент массива. Индекс последнего элемента найдите свойством .length. Напоминаю, что счёт элементов идёт с нуля.

// console.log ('первый: ', morningList[0], ', последний: ', morningList[morningList.length-1]);

// //15

//Не меняя определение переменной morningList, выполните с массивом следующие действия:
// запишите на место третьего по счёту элемента строку “Сделать зарядку”,
// в конце массива добавьте новый элемент: “Помыть посуду”.
// Обращайтесь к элементам массива по индексу.
// Выведите весь массив в консоль.
// let morningList = [
//     'Встать с кровати',
//     'Почистить зубы',
//     'Проверить сториз в Инстаграме',
//     'Позавтракать'];
// Допишите код здесь, не меняя определение массив
// morningList.splice(2,0,'сделать зарядку');
// morningList.splice(morningList.length,0,'помыть посуду');
// console.log (morningList)

//16

// for (i=0;i<morningList.length;i++){
//     console.log (morningList[i]);
// }

// //17

// for (i=0;i<morningList.length;i+=2){
//     console.log (morningList[i]);
// }

//18
// let i=0;
// while (morningList[i]){
//     console.log (morningList[i]);
//     i++
// }

//19
//  let employee = {
//     firstName: 'Василий',
//     lastName: 'Шишкин',
//     age: 18
//  }
// console.log (employee)

// //20

// function getFullName (worker) {
//     console.log (worker.firstName, ' ', worker.lastName)
// }
// getFullName(employee)

//21

// function getFullName (worker) {
//     return `${worker.firstName} ${worker.lastName}`
// }
// employee.fullName = getFullName(employee);

// console.log (employee)

// блок 3, задачи посложнее

//блок 3 задача 1
//Обход вложенных массивов
//Задача: Напишите функцию, которая суммирует все числа во вложенном массиве. 
//Тут дам подсказку, вам нужно будет использовать устойчивую конструкцию Array.isArray(item), 
//где item это элемент массива. Так же вам нужно будет использоваться метод рекурсивной функции
// (когда функция может вызывать саму себя).

// const nestedArray = [1, [2, 3], [[4], [5, 6]], 7];
// let i = 0;
// let sum = 0;


// вариант решения с проверкой типа данных на число
// function summaArray(arr, index) {
//     let y = 0;
//     while (arr[index]) {
//         if (typeof (arr[index]) == "number") {
//             sum = sum + arr[index];
//             index++
//         } else if (Array.isArray(arr[index])) {
//             summaArray(arr[index], y);
//             index++
//         }
//         else {
//             console.log('ой, что-то не так');
//             index++
//         }
//     }
// }
// summaArray(nestedArray, i)
// console.log(sum)


//блок 3 задача 2

// const users = [{ id: 1, name: 'Иван' }, { id: 2, name: 'Olga' }];
// let obj = {};
// function makeObj(mass) {
//     for (let i = 0; i < users.length; i++) {
// obj[users[i].id]=users[i].name;
//     }
//     return obj
// }
// console.log(makeObj(users))

//блок 3 задача 3

// Задача: Реализуйте функцию, которая фильтрует массив вложенных объектов по заданному условию (например,
//      по возрасту пользователей). То есть у вас должна быть функция, которая на вход принимает два параметра: 
//      объект, в котором происходит поиск и возраст, по которому фильтруются данные. 

// const data = [
//     { user: { id: 1, name: 'Иван', age: 25 } },
//     { user: { id: 2, name: 'Ольга', age: 30 } },
//     { user: { id: 3, name: 'Олfffьга', age: 35 } }];
// let needAge;
// function filterAge(mass, ageNeed) {
//     for (let i = 0; i < mass.length; i++) {
//         // console.log(data[i].user.age)
//         needAge = mass.filter(function (elem) {
//             return elem.user.age > ageNeed
//         })

//     }
// }
// filterAge(data, 28);
// console.log(needAge)

// блок 3 задача 4

// Задача: Создайте функцию, которая объединяет два массива в объект, где первый массив содержит ключи,
//  а второй - соответствующие значения.
// const keys = ['id', 'name'];
// const values = [1, 'Иван'];

// function makingObj(key, value) {
//     let obj = {};
//     for (let i = 0; i < key.length; i++) {
//         obj[key[i]] = value[i]
//     }
//     console.log(obj)
//     return obj
// }
// makingObj(keys, values)



// блок 3 задача 5
// Преобразование объекта (здесь нужно будет прогнать объект, попробуйте сами найти как это сделать
//     т.к. обычный for или while здесь не подойдут)
// Задача: Создайте функцию, которая преобразует объект, где ключи становятся значениями, а значения ключами.

// https://learn.javascript.ru/keys-values-entries?ysclid=ls4oo9eggd281311457
// const input = { a: '1', b: '2' };

// let newInput = {};
// function creatNewInput(obj) {
//     let arrayKey = [];
//     arrayKey = Object.keys(obj);
//     let arrayString = [];
//     arrayString = Object.values(obj);
//     for (let i = 0; i < arrayKey.length; i++) {
//         newInput[arrayString[i]] = arrayKey[i]
//     }
//     return newInput
// }
// console.log(creatNewInput(input))


// блок 3 задача 6
// Пересечение массивов
// Задача: Реализуйте функцию, которая находит пересечение (общие элементы) между двумя массивами.
// Общие элементы положите в другой массив и отобразите это в консоле.


// const arr1 = [1, 2, 3, 4];
// const arr2 = [3, 4, 5, 6];

//ПЕРВОЕ РЕШЕНИЕ
// function sameElemment(array, array1) {
//     let newArr = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array.includes(array1[i])) {
//             newArr.push(array1[i])
//         }
//     }
//     return newArr
// }
// console.log(sameElemment(arr1, arr2))

// ВТОРОЕ РЕШЕНИЕ ЧЕРЗ МАП
// function sameElemment(array, array1) {
//     let newArr = [];
//     array.map((value) => {
//         if (array1.includes(value)) {
//             newArr.push(value)}
//         })
//     return newArr
// }
// console.log(sameElemment(arr1, arr2))


// блок 3 задача 7
// Разность массивов
// Задача: Создайте функцию, которая возвращает разность между двумя массивами
// (элементы, которые присутствуют в первом массиве, но отсутствуют во втором).
// const arr1 = [1, 2, 3, 4];
// const arr2 = [3, 4, 5, 6];


// перебор массивов по очереди
// function creatDifrentElem(array, array1) {
//     let difrentElem = [];
//     array.map((value) => {
//         if (!array1.includes(value)) {
//             difrentElem.push(value)
//         }
//     })
//     array1.map((value) => {
//         if (!array.includes(value)) {
//             difrentElem.push(value)
//         }
//     })
//     return difrentElem
// }

// console.log(creatDifrentElem(arr1, arr2))

// объединение в общий массив и оставление уникальных значений
// function creatDifrentElem(array, array1) {
//     let allElem = array.concat(array1);
//     let difrentElem = [];
//     for (let i = 0; i < allElem.length; i++) {
//         if (!difrentElem.includes(allElem[i])) {

//             difrentElem.push(allElem[i])
//         }
//     }


//     return difrentElem
// }

// console.log(creatDifrentElem(arr1, arr2))



//Задача от Тони Монтано
/*
Пользователь:
- Возраст
- Наличие работы
- Деньги
Нужно проверить может ли он купить новый MacBook за 2000$?
Он может брать не только свои деньги, но и взять кредит.
Ему дадут 500$, только если ему больше 24-х лет и он
имеет работу, 100$ если ему просто больше 24-х лет и 0 в
ином случае.
Напишите функцию, которая принимает данные пользователя
и товара и возвращает true или false;
*/
// function buyMacBook(age, job, cash) {
//     if (age >= 24 && job === true) {
//         if (cash + 500 >= 2000) {
//             return true
//         } else { return false }
//     } else if (age >= 24) {
//         if (cash + 100 >= 2000) {
//             return true
//         } else { return false }
//     } else if (cash >= 2000) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(buyMacBook(25,true, 2000))
