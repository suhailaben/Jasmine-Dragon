var basic = (() => {
    const content = document.querySelector('#content');
    const header = document.createElement('header');
    content.appendChild(header);
    const logo = document.createElement('img');
    logo.setAttribute('src', 'assets/jasmine-dragon logo.svg');
    header.appendChild(logo);
    const title = document.createElement('h1');
    title.textContent = 'The Jasmine Dragon';
    header.appendChild(title);

})()

export default {basic}