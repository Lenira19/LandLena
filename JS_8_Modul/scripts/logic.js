export function check(nameSelf, pass) {
    if (data[nameSelf]) {
        if (data[nameSelf] == pass) {

            return 'Вы вошли';
        }
        else {
            return 'Неправильный пароль';

        }


    } else { return 'Такого пользователя не существует'; }
};





