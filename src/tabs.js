import createContactPage from "./contact";
import createMenuPage from "./menu";
import createRestaurantHomePage from "./restaurant";


const createTabs = () => {
    const content = document.querySelector('#content');

    // Create 3 divs
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');

    //Set ids for the divs
    div1.setAttribute('id', 'home-tab');
    div2.setAttribute('id', 'menu-tab');
    div3.setAttribute('id', 'contact-tab');

    //Set text content
    div1.textContent = 'Home';
    div2.textContent = 'Menu';
    div3.textContent = 'Contact';

    //Apped
    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div3);

    // Event lisetener
    div1.addEventListener('click', () => {
        clearContent();
        createRestaurantHomePage();
    })
    div2.addEventListener('click', () => {
        clearContent();
        createMenuPage();
    })
    div3.addEventListener('click', () => {
        clearContent();
        createContactPage();
    })
}

function clearContent() {
    const content = document.querySelector('#content');
    const pageContent = document.querySelector('.page-content');
    if(pageContent){
        content.removeChild(pageContent);
    }
}

export default createTabs();