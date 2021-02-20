const { I } = inject();

module.exports = {
    // setting locators
    fields: {
        email: {css: 'input[name="LoginForm[email]"]'},
        password: {css: 'input[name="LoginForm[password]"]'},

    },
    links: {
        login: 'http://new.gorodokigrushek.ru/login',
    },
    loginButton: {css: 'form[id="login-form"] >> text="Войти"'},
    menuLoginButton: {css: 'text="Войти"'},

    // introducing methods
    login(username, password) {
        I.amOnPage(this.links.login);
        I.fillField(this.fields.email, username);
        I.fillField(this.fields.password, password);
        I.click(this.loginButton);
    },
}
