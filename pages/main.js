const { I } = inject();

module.exports = {
    // setting locators
    fields: {
        password: '#password',
        username: '#username',
    },
    links: {
        password: '#user_basic_password',
        username: '#username',
    },
    loginButton: {css: '.button:nth-child(1)'},

    // introducing methods
    login(username, password) {
        I.fillField(this.fields.username, username);
        I.fillField(this.fields.password, password);
        I.click(this.loginButton);
    },
}
