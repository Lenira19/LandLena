let menu;
let ingradients;
fetch("menu.json")
    .then((file) => file.json())
    .then((file) => {
        menu = file;
        return fetch("ingradients.json");
    })
    .then((file) => file.json())
    .then((file) => {
        ingradients = file;
        
        //1 .расчет и добавление в объект себестоимости блюд
console.log(' 1 .расчет и добавление в объект себестоимости блюд')
menu.forEach(function (item, index, arr) {
    let costPre = menu[index].ingradients.reduce(function (sum, item, index) {
        return sum + ingradients[item].price;
    }, 0);
    menu[index].costPre = costPre; // добавляем в объект себестоимость
});
    console.log(menu)


 //2. Возвращаем массив с названием блюда и стоимостью
console.log('2. Возвращаем массив с названием блюда и стоимостью')

let delishCost = menu.map(function (item, index, arr) {

    return [menu[index].name, menu[index].costPre]; F

});
console.log(delishCost);


//3. одно вегетарианское блюдо, используя `some`.
console.log('3. одно вегетарианское блюдо, используя `some`.')

let vegan = menu.some(function (item, index, arr) {

   let massBuel = item.ingradients.some(function (item, index, arr) {
   
        
        return ingradients[item].nonVegan == true;
    });

    
    return !massBuel;
});

console.log(vegan);


//4.
console.log('4 Определите, полностью ли у вас вегетарианское меню с помощью `every`.')
let veganEvery = menu.every(function (item, index, arr) {

    massBuel = item.ingradients.some(function (item, index, arr) {
                return ingradients[item].nonVegan == true;

    });

    

    return !massBuel;

});
console.log(veganEvery);

    
    });


