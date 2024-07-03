async function getJoke() {
    const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json',
        },
    });

    const data = await response.json()
    document.getElementById('joke').innerText = data.joke;
    getLaughingGif();
}

async function getLaughingGif() {
    const apiKey =  '';
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=laughing&limit=1&offset=${Math.floor(Math.random() * 50)}`);
    const data = await response.json();
    const gifUrl = data.data[0]?.images.downsized_medium.url || '';
    const gifContainer = document.getElementById('gif-container');
        if (gifUrl) {
            gifContainer.innerHTML = `<img src="${gifUrl}" alt="GIF" />`;
        } else {
            gifContainer.innerHTML = 'No GIF found';
        }
        }

        window.onload = getJoke;
