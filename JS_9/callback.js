let soupWithNoodls = {

    ingradients: ['potato', 'salt', 'noodls'],
    costPre: null,
    costAft: null,
    name: 'soupWithNoodls',
    profit: null,

};

let friedEggs = {
    ingradients: ['eggs', 'onion', 'vagatableOil'],
    costPre: null,
    costAft: null,
    name: 'friedEggs',
    profit: null,


};

let olivieSalad = {
    ingradients: ['peas', 'eggs', 'mayonnaise', 'carrot'],
    costPre: null,
    costAft: null,
    name: 'olivieSalad',
    profit: null,

};

let funchosaWithVegetables = {
    ingradients: ['funchosa', 'peper', 'onion', 'carrot', 'cucamber', 'soySauce', 'salt', 'vagatableOil', 'sesameSeeds'],
    costPre: null,
    costAft: null,
    name: 'funchosaWithVegetables',
    profit: null,


};

/* цены инградиентов*/
let ingradients = {
    potato: 40,
    salt: 30,
    noodls: 50,
    onion: 20,
    vagatableOil: 100,
    peas: 90,
    eggs: 100,
    mayonnaise: 120,
    carrot: 80,
    funchosa: 150,
    peper: 100,
    cucamber: 70,
    soySauce: 200,
    sesameSeeds: 45

};
// не вегетарианские иградиенты
ingradientsNonVegan = ['eggs', 'mayonnaise'];

/*массив блюд*/
let menu = [soupWithNoodls, friedEggs, olivieSalad, funchosaWithVegetables];

//1 .расчет и добавление в объект себестоимости блюд
console.log(' 1 .расчет и добавление в объект себестоимости блюд')
menu.forEach(function (item, index, arr) {
    let costPre = menu[index].ingradients.reduce(function (sum, item, index) {
        return sum + ingradients[item];
    }, 0);
    menu[index].costPre = costPre; // добавляем в объект себестоимость
});

//вывод в консоль результата
menu.forEach(function (item, index) {
    console.log(menu[index].name);
    console.log(item);
});



//2. Возвращаем массив с названием блюда и стоимостью
console.log('2. Возвращаем массив с названием блюда и стоимостью')

let delishCost = menu.map(function (item, index, arr) {

    return [menu[index].name, menu[index].costPre]; F

});
console.log(delishCost);



//3. одно вегетарианское блюдо, используя `some`.
console.log('3. одно вегетарианское блюдо, используя `some`.')

let vegan = menu.some(function (item, index, arr) {

    massBuel = item.ingradients.some(function (item, index, arr) {
        return ingradientsNonVegan.includes(item);
    });

    
    return !massBuel;
});

console.log(vegan);


//4.
console.log('4 Определите, полностью ли у вас вегетарианское меню с помощью `every`.')
let veganEvery = menu.every(function (item, index, arr) {

    massBuel = item.ingradients.some(function (item, index, arr) {
        return ingradientsNonVegan.includes(item);

    });



    return !massBuel;

});
console.log(veganEvery);

//5.
console.log('5 Создайте массив с вегетарианскими блюдами с помощью filter.')

let massVegan = menu.filter(function (item, index, arr) {

    massBuel = item.ingradients.some(function (item, index, arr) {
        return ingradientsNonVegan.includes(item);

    });

    return !massBuel;

});

console.log(massVegan);




































