export function check(nameSelf, pass) {
    let data = { admin: 'root', user: '123' };
    if (data[nameSelf]) {
        if (data[nameSelf] == pass) {

            return 'Вы вошли';
        }
        else {
            return 'Неправильный пароль';

        }


    } else { return 'Такого пользователя не существует'; }
};





