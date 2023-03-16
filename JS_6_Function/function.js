function minimum(num1, num2) {
    return Math.min(num1, num2)
};

let num1 = prompt('введите первое число');
let num2 = prompt('введите второе число');
console.log(minimum(num1, num2)) //минимальное число выведет




// здесь будет функция для расчета профита и всего остального что было раньше


function profitProduct(ingradients, menu) {

    let countPre = 0;
    let countAft = 0;
    let ingr = '';

    // перебираем menu и в меню в каждом объекте берем название инградиента, извлекая цену из объекта инградиентов - благо имена совпадают)))
    for (j in menu) {
        for (i in menu[j].ingradients) {

            ingr = menu[j].ingradients[i];
            countPre = countPre + ingradients[ingr];
            countAft = countAft + (ingradients[ingr] * 2); // стоимость каждого ингадиента на 2 умножаю для продажи

        };

        menu[j].costPre = countPre; // В объекты заносим стоимость приготовлнеия
        menu[j].costAft = countAft; // В объект заносим стоимость продажи
        menu[j].profit = countAft - countPre; // В объект заносим доход

        countPre = 0;
        countAft = 0;
    };

    return menu
};







let soupWithNoodls = {

    ingradients: ['potato', 'salt', 'noodls'],
    costPre: null,
    costAft: null,
    name: 'soupWithNoodls',
    profit: null
};

let friedEggs = {
    ingradients: ['eggs', 'onion', 'vagatableOil'],
    costPre: null,
    costAft: null,
    name: 'friedEggs',
    profit: null
};

let olivieSalad = {
    ingradients: ['peas', 'eggs', 'mayonnaise', 'carrot'],
    costPre: null,
    costAft: null,
    name: 'olivieSalad',
    profit: null
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
    carrot: 80
};

/*массив блюд*/
let menu = [soupWithNoodls, friedEggs, olivieSalad];


console.log(profitProduct(ingradients, menu));

