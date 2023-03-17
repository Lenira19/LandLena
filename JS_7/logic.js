function check(Name, pass) {
    if (data[Name]) {
        if (data[Name] == pass) {

            return 'Вы вошли';
        }
        else {
            return 'Неправильный пароль';

        }


    } else { return 'Такого пользователя не существует' }
};

let data = { admin: 'root', user: '123' };

let Name = prompt('введите логин');
let pass = prompt('введите пароль');

alert(check(Name, pass));



