import {check} from './logic.js';



let nameSelf = prompt('введите логин');
let pass = prompt('введите пароль');
alert(check(nameSelf, pass));