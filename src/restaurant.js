
//restaurant.js
const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.classList.add('page-content');

    //Create headline
    const headline = document.createElement('h1');
    headline.textContent = "Café Loco";
    pageContent.appendChild(headline);

    //Create Image
    const image = document.createElement('img');
    image.src = "https://media-cdn.tripadvisor.com/media/photo-p/1b/54/7f/4a/oneday-cafe-loco.jpg";
    image.height = '300';
    pageContent.appendChild(image);

    //Create subtext
    const subtext = document.createElement('p');
    subtext.textContent = 'Good Coffe in Guatemala';
    pageContent.appendChild(subtext);

    //Append everything
    content.appendChild(pageContent);
}

export default createRestaurantHomePage;