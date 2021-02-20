const { I } = inject();

const adress = 'тест';
const email = 'test@test.ru';
const phone = '+79876543210';
const username = 'Тест Тест';

module.exports = {
    // setting locators
    fields: {
        adress: {css: 'input[name="Order[address]"]'},
        email: {css: 'input[name="Order[email]"]'},
        phone: {css: 'input[name="Order[phone]"]'},
        username: {css: 'input[name="Order[username]"]'},
    },
    links: {
        cartView: 'http://new.gorodokigrushek.ru/cart/view',
    },
    addOneItemButton: {css: '.add-one-item'},
    cartButton: {css: '.open-my-cart'},
    checkoutButton: {css: 'id=button-order'},
    orderAgreement:  {css: '.field-order-agreement'},
    removeOneItemButton: {css: '.remove-one-item'},
    submitButton:  {css: '.btn-success'},

    // introducing methods
    fixAmountItem() {
        I.amOnPage(this.links.cartView);
        I.click(this.addOneItemButton);
        I.click(this.removeOneItemButton);
        I.click(this.removeOneItemButton);
    },
    addAdress() {
        I.amOnPage(this.links.cartView);
        I.dontSee('Корзина пуста');
        I.fillField(this.fields.username, username);
        I.fillField(this.fields.phone, phone);
        I.fillField(this.fields.email, email);
        I.fillField(this.fields.adress, adress);
        I.click(this.orderAgreement);
        I.click(this.submitButton);
    },
}
