const createContactPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    //Crate heading
    const heading = document.createElement('h1');
    heading.textContent = 'Contact';
    pageContent.appendChild(heading);

    //Phone number
    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '+502 xxxx-xxxx';
    pageContent.appendChild(phoneNumber);

    //Append everything
    content.appendChild(pageContent);
}