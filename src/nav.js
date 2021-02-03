let nav = (() => {
    const content = document.querySelector("#content");
    const navbar = document.createElement('nav');
    const about = document.createElement('section');
    about.textContent = 'About';
    const menu = document.createElement('section');
    menu.textContent = 'Menu';
    const contact = document.createElement('section');
    contact.textContent = 'Contact Us'
    navbar.appendChild(about);
    navbar.appendChild(menu);
    navbar.appendChild(contact);
    content.appendChild(navbar);
})()


export default nav