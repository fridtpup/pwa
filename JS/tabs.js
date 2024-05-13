const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
const homeBtn = document.querySelector('.mdc-top-app-bar__title');
const tabs = document.querySelectorAll('.mdc-tab-indicator');

const buttons = document.querySelectorAll('.mdc-tab');
const listItems = document.querySelectorAll('.mdc-image-list__item');

homeBtn.addEventListener('click', () => {
    tabs.forEach(tab => {
        tab.classList.remove('mdc-tab-indicator--active');
    });

    buttons.forEach(button => {
        button.classList.remove('mdc-tab--active');
    })

    listItems.forEach(item => {
        item.classList.remove('hidden');
    })
});

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        listItems.forEach(item => {
            item.classList.add('hidden');
            if (item.classList.contains(btn.id)) item.classList.remove('hidden');
        })
    })
});

