let num = 0;
for (i=0; i<11; i=i+2){
 console.log(i)
};


/* инградиенты*/
let soupWithNoodlsIng = ['potato','salt','noodls'];
let friedEggsIng = ['eggs','onion','vagatableOil'];
let olivieSalatIng = ['peas','eggs','mayonnaise','carrot'];

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
let menu = [soupWithNoodlsIng,friedEggsIng,olivieSalatIng];
let menuString = ['soupWithNoodles','friedEggsIng','olivieSalat'];

/* перебираем menu и  в menu инградиенты высчитывая прибыль(прибыль 100 процентов) и по итогам заполняем объект menuProfit*/

let menuProfit = {};
count=0
for(j in menu){
   for( i in menu[j]){
    ingr = menu[j][i]
    count=count+ingradients[ingr] /* можно вставить любую прибыль*/

   };

   menuProfit[menuString[j]]=count
   count=0
};

/* Вывод результата*/
console.log('Вывод прибыли с каждого блюда')
console.log(menuProfit)



/*цикл бесконечный*/
let k = 1
count = 0

do {
    count++
    console.log(count)
    if(count==5){
     breake;   
    };
} while([k>0]);


 





