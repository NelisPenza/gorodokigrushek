const { I } = inject();

module.exports = {
    // setting locators
    fields: {
        regBirthday: {css: 'input[name="birthday-user-birthday-disp"]'},
        regEmail: {css: 'input[name="User[email]"]'},
        regPassword: {css: 'input[name="User[password]"]'},
        regPhone: {css: 'input[name="User[phone]"]'},
        regUsername: {css: 'input[name="User[username]"]'},
    },
    links: {
        registration: 'http://new.gorodokigrushek.ru/signup',
    },
    agreementButton: ('#user-confidense'),
    registrationButton: ('Зарегистрироваться'),
    selector: ('#user-organisation'),

    // introducing methods
    registration(regUsername, regEmail, regPassword, regPhone, regBirthday) {
        I.amOnPage(this.links.registration);
        I.fillField(this.fields.regUsername, regUsername);
        I.fillField(this.fields.regEmail, regEmail);
        I.fillField(this.fields.regPassword, regPassword);
        I.fillField(this.fields.regPhone, regPhone);
        I.fillField(this.fields.regBirthday, regBirthday);
        I.click(this.selector);
        I.click(this.selector);
        I.click(this.agreementButton);
        I.click(this.registrationButton);
    },
}
