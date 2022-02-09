const point = 'https://api.giphy.com/v1/gifs/search?api_key=2riVCNkYQmD0Eh3So8bS3dxAaJCe7Jyu&q=';

async function getData(text) {
    let main = document.querySelector('.main');
    try {
        const response = await fetch(point + text);
        const data = await response.json();
        while(main.lastElementChild){
            main.removeChild(main.lastElementChild);
        }
        data.data.forEach(element => {
            main.appendChild(createCard(element.images.downsized_medium.url))
        });
    } catch (error) {
        console.log(error.message);
    }
}

function createCard(url){
    let card = document.createElement('div')
    card.className = 'card'
    let image = document.createElement('img')
    image.src = url;
    card.appendChild(image);
    return card;
}

const playButton = document.querySelector('.submit');
const search = document.querySelector('.search');

playButton.addEventListener('click', () => {
    getData(search.value);
    console.log(search.value);
})