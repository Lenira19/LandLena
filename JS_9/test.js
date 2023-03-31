let menu = ["pizza", "pasta", "buuza"];

let startWithP = menu.map(function(item, index, arr) {
    console.log(item);
  return item.toUpperCase();
});

