let kitchen= {
    soup:['onion','potato','tomato'],
    tart:['eggs','milk','suger'],
    fried_eggs:['eggs','onion','salt']
};

let price = {
    soup: '500',
    tart:'2000'
};

let list_price_kitchen = [kitchen,price];

list_price_kitchen.pop();

/* переприсваиваем price словарю только два элемента*/
let price = {
    soup: '500',
    tart:'2000'
};

list_price_kitchen.unshift(price);








