

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
let menuText = ''; /*Глобальная переменна меню*/
for(j in menu){
    let stringLocalIngJ = '' /* локальная переменная где мы обнуляем переменную для инградиентов*/
   for( i in menu[j]){
    let ingr = menu[j][i]   /* локальная переменная в которой хранится один иградиент*/
    count=count+ingradients[ingr] 
    stringLocalIngJ = stringLocalIngJ + ingr+',' /*локальная переменая где мы собираем все инградиенты */
    };
    menuProfit[menuString[j]]=count
    listProfit[j]['profit'] = count 
    
     menuText = menuText + menuString[j]+':' + stringLocalIngJ.slice(0,-1)+'  '+`cost ${count*2} rub`+'!'+'  ' /* глобальная где мы собираем меню*/
     count=0


};

console.log(menuText)









 





