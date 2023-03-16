function check(Name, pass) {
    if (data[Name]) {
        if (data[Name] == 'root' || data[Name] =='123') {
            alert(data[Name] == 'root' || data[Name] =='123')

            return 'Вы вошли';
        }
        else {
            return 'Неправильный пароль';

        }


    } else { return 'Такого пользователя не существует' }
};

let data = { admin: 'root', user: '123' };

let Name = prompt('введите логин');
let pass = prompt('введит пароль');

alert(check(Name, pass));



