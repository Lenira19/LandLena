function check(nameSelf, pass) {
    if (data[nameSelf]) {
        if (data[nameSelf] == pass) {

            return 'Вы вошли';
        }
        else {
            return 'Неправильный пароль';

        }


    } else { return 'Такого пользователя не существует'; }
};

let data = { admin: 'root', user: '123' };

let nameSelf = prompt('введите логин');
let pass = prompt('введите пароль');

alert(check(nameSelf, pass));



