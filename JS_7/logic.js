function check(name, pass) {
    if (data[name]) {
        if (data[name] == pass) {

            return 'Вы вошли';
        }
        else {
            return 'Неправильный пароль';

        }


    } else { return 'Такого пользователя не существует'; }
};

let data = { admin: 'root', user: '123' };

let name = prompt('введите логин');
let pass = prompt('введите пароль');

alert(check(name, pass));



