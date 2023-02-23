let sushi= {
    list: ["rise", "salmon", "nori", "cucamber"],
    price: 340
};
let misoSoup= {
list: ["soy sauce", "tofu", "nori", "green onion"],
price: 290
};
let rollTempura={
    list: ["rise", "eel_fish", "nori", "tempura" ],
    price: 380
};


let menu=[sushi, misoSoup, rollTempura];

menu.pop();

rollTempura.list.pop();

menu.unshift(rollTempura);

let cost={
    sushipay:sushi.price*2, 
    misoSouppay:misoSoup.price*2,
    rollTempurapay:rollTempura.price*2
};
let incomeSushi=cost.sushipay-sushi.price;
let incomeMisoSoup=cost.misoSouppay-misoSoup.price;
let incomeRollTempura=cost.rollTempurapay-rollTempura.price;

console.log('Суши доход = ', incomeSushi);
console.log('Мисосуп доход =',incomeMisoSoup);
console.log("Ролл темпура доход =", incomeRollTempura);
menu =new Array(menu[0]);

console.log(menu);



















 