const createMenuPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    // Create menu heading
    const heading = document.createElement('h1');
    heading.textContent = 'Menu';
    pageContent.appendChild(heading);

    //create menu text
    const text = document.createElement('p');
    text.textContent = '1. Cafe';
    pageContent.appendChild(text);

    //Append content
    content.appendChild(pageContent);
}