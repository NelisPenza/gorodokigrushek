const assert = require('assert');
const faker = require('faker');

regUsername = 'Test Test';
regEmail = faker.internet.email();
regPassword = faker.internet.password();
regPhone = '+79876543210';
regBirthday = '18-02-2000';
username = 'test@test.ru';
password = 'testtest';

Feature('Городок игрушек');

Scenario('test something', ({ I, toDo }) => {

    I.amOnPage('https://try.vikunja.io/login');
    toDo.mainPage.login('demo','demo');
    I.see('Namespaces');
    toDo.currentTasks.gotoUpcoming();
    I.see('Tasks from');
});

Scenario('Пользователь может авторизоваться на сайте', ({ I, toDo }) => {

    toDo.toyLogin.login(username,password);
    I.see('Tasks from');
});

Scenario('Пользователь может зарегистрироваться на сайте', ({ I, toDo }) => {

    toDo.toyRegister.registration(regUsername, regEmail, regPassword, regPhone, regBirthday);
    I.see('Спасибо за регистрацию на сайте');
});
Scenario('Пользователь может положить товар в корзину', ({ I, toDo }) => {

    toDo.toyRandomBuy.randomBuy();
    I.see('Итого');
});
Scenario('Пользователь может изменить содержимое корзины', ({ I, toDo }) => {

    toDo.toyRandomBuy.randomBuy();
    toDo.toyCart.fixAmountItem();
    I.see('Корзина пуста');
});
Scenario('Пользователь может купить товары из корзины', ({ I, toDo }) => {

    toDo.toyRandomBuy.randomBuy();
    toDo.toyCart.addAdress();
    I.see('Заказ успешно оформлен');
});
