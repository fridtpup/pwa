window.onload = function() {
    const menu = document.querySelector('#menu');
    const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
    const listEl = document.querySelector('.mdc-drawer .mdc-list');
    const mainContentEl = document.querySelector('.main-content');

    // Upon clicking hamburger menu icon open the drawer.
    menu.addEventListener('click', () => {
        drawer.open = true;
    })

    // Upon clicking an element within the menu list close menu
    listEl.addEventListener('click', (event) => {
        drawer.open = false;
    });

    document.body.addEventListener('MDCDrawer:closed', () => {
        mainContentEl.querySelector('input, button').focus();
    });
};