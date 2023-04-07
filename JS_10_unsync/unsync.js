let menu;
let ingradients;
fetch("menu.json")
.then((file)=>file.json())
.then((file)=>{
menu = file;
return fetch("ingradients.json");
})
.then((file)=> file.json())
.then((file)=>{
ingradients = file;
console.log(menu[0].name)


})


