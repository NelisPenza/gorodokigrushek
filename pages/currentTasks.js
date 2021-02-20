// enable I and another page object
const { I } = inject();

module.exports = {
    upcomingMenu: ('Upcoming'),

    gotoUpcoming() {
        I.click(this.upcomingMenu);
    },
}
