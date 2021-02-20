const { I } = inject();

module.exports = {
    // setting locators
    fields: {
        email: {css: 'input[name="LoginForm[email]"]'},
        password: {css: 'input[name="LoginForm[password]"]'},

    },
    links: {
        buy: 'http://new.gorodokigrushek.ru/katalog/myagkaya_igrushka',
    },
    buyRandomItemButton: {css: 'text=/.*Купить.*/'},
    cartButton: {css: '.open-my-cart'},
    closeAttention:  {css: '//div[9]/button[normalize-space(.)=\'×\']'},
    continueShoppingButton:  {css: 'text="Продолжить покупки"'},

    // introducing methods
    randomBuy() {
        I.amOnPage(this.links.buy);
        I.click(this.buyRandomItemButton);
        I.click(this.closeAttention);
        // I.see(this.cartButton);
        I.click(this.cartButton);
        // I.click(this.continueShoppingButton);
    },
}
