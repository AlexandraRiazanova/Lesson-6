// Реализовать функцию, которая создает копию передаваемого объекта и возвращает ее. 
const mainObj = {
    a: 1,
    b: 2,
    c: 3,
};
console.log(mainObj);
function copy(mainObj) {
    let objCopy = {};
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}
console.log(copy(mainObj));
console.log(copy(mainObj) === mainObj);

//Реализовать ф-ю, которая принимает объект и возвращает число обозначающее длину всех строковых значений внутри этого объекта.
const newObj = {
    name: 'Ivan',
    sername: 'Ivanov',
    age: 30,
};
function count(){
    var counter = 0;
    var length = 0;
    for (var key in newObj) {
        if(typeof newObj[key] == 'string' ){
            counter++;
            length += newObj[key].length;
        }
    }
    console.log('Количество строковых значений в объекте - ' + counter)
    console.log('Длина всех строковых значений в объекте - ' + length)
}
count();
