import {check} from "logic.js";

let data = { admin: 'root', user: '123' };

let nameSelf = prompt('введите логин');
let pass = prompt('введите пароль');

alert(check(nameSelf, pass));