let soup_with_noodls= {
    ingradients: ['potato','salt','noodlse'],
    price: 290,

};

let fried_eggs = {
    ingradients:['eggs','onion','vagatable_oil'],
    price:199
}; 

let olivie_salat = {
    ingradients:['peas','eggs','mayonnaise','carrot'],
    price:499
};


let list_delishes = [soup_with_noodls,fried_eggs,olivie_salat];

list_delishes.pop();

olivie_salat.ingradients.shift();

list_delishes.unshift(olivie_salat);

price_delishes_pre={
    soup_with_noodls:soup_with_noodls.price,
    fried_eggs:fried_eggs.price,
    olivie_salat:olivie_salat.price
};


price_delishes_aft={
    soup_with_noodls:price_delishes_pre.soup_with_noodls*1.25,
    fried_eggs:price_delishes_pre.fried_eggs*1.25,
    olivie_salat:price_delishes_pre.olivie_salat*1.25
};

console.log(price_delishes_aft.fried_eggs)

let soup_with_noodls_income = price_delishes_aft.soup_with_noodls - price_delishes_pre.soup_with_noodls;
let fried_eggs_income = price_delishes_aft.fried_eggs - price_delishes_pre.fried_eggs;
let olivie_salat_income = price_delishes_aft.olivie_salat - price_delishes_pre.olivie_salat;

console.log('доход с блюда суп лапша = ', soup_with_noodls_income);
console.log('доход с блюда жаренные яйца = ', fried_eggs_income);
console.log('доход с блюда оливье = ', olivie_salat_income);





















