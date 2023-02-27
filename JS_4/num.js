
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
let soupWithNoodlsProfit={};
let friedEggsProfit={};
let olivieSalatProfit={};
let listProfit = [soupWithNoodlsProfit,friedEggsProfit,olivieSalatProfit];
let menuProfit = {};
let count = 0;
let ingr = 0;
for(j in menu){
   for( i in menu[j]){
    ingr = menu[j][i]
    count=count+ingradients[ingr] /* можно вставить любую прибыль*/

   };

   menuProfit[menuString[j]]=count
   listProfit[j]['profit'] = count /*Записываю прибыль отдельно для каждого блюда в отдельный объект */

   
   count=0


};

console.log(listProfit)




/*цикл бесконечный*/
let k = 1;
count = 0;

do {
    count++
    console.log(count)
    if(count==5){
     break;   
    };
} while([k>0]);




 





