//1
for (i=0; i<11; i=i+2){
    console.log(i)
   };



//2 /*цикл бесконечный*/
let k = 1;
count = 0;

do {
    count++
    console.log(count)
    if(count==5){
     break;   
    };
} while([k>0]);


//3
soupWithNoodls = {

ingradients:['potato','salt','noodls'],
    costPre:null,
    costAft:null,
    name:'soupWithNoodls',
    profit:null
};

friedEggs = {
    ingradients: ['eggs','onion','vagatableOil'],
    costPre:null,
    costAft:null,
    name: 'friedEggs',
    profit:null
};

olivieSalad = {
    ingradients: ['peas','eggs','mayonnaise','carrot'],
    costPre:null,
    costAft:null,
    name: 'olivieSalad',
    profit:null
};

 /* цены инградиентов*/
let ingradients = {
potato:40,
salt:30,
noodls: 50,
onion:20,
vagatableOil:100,
peas: 90,
eggs:100,
mayonnaise: 120,
carrot: 80
};

/*массив блюд*/
let menu = [soupWithNoodls,friedEggs,olivieSalad];

/* */

let countPre = 0;
let countAft = 0;
let ingr = '';

// перебираем menu и в меню в каждом объекте берем название инградиента, извлекая цену из объекта инградиентов - благо имена совпадают)))
for (j in menu){
for(i in menu[j].ingradients){

   ingr = menu[j].ingradients[i]
   countPre = countPre + ingradients[ingr]
    countAft = countAft + (ingradients[ingr]*2) // стоимость каждого ингадиента на 2 умножаю для продажи
   
};

menu[j].costPre = countPre // В объекты заносим стоимость приготовлнеия
menu[j].costAft = countAft // В объект заносим стоимость продажи
menu[j].profit = countAft - countPre // В объект заносим доход

countPre = 0
countAft = 0

};


console.log(menu);


  











 





