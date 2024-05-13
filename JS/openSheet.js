const close = document.querySelector('#close');
const sheet = document.querySelector('.sheet');


listItems.forEach(item => {
    item.addEventListener('click', () => {
        // Images
        const clickedImg = item.querySelector('img');
        const sheetImg = sheet.querySelector('img');
        const sheetHeaderTitle = sheet.querySelector('.mdc-top-app-bar__title');

        sheetImg.src = clickedImg.src;
        sheetHeaderTitle.innerHTML = clickedImg.alt;
        
        sheet.style.top = `${window.pageYOffset}px`;
        sheet.querySelector('header').style.top = '0';

        document.querySelector('body').style.overflow = 'hidden';

        sheetOpen();
    })
});

close.addEventListener('click', () => {
    sheetClose();
    document.querySelector('body').style.overflow = 'initial';
});

function sheetOpen() {
    sheet.classList.remove('sheet-out-of-view');
}

function sheetClose() {
    sheet.classList.toggle('sheet-out-of-view');
}