const generateMeme = document.querySelector('.generate-meme');
const memeTitle = document.querySelector('.meme-title');
const memeImage = document.querySelector('.meme-image');
const authorOutput = document.querySelector('.author');

generateMeme.addEventListener('click', () => {
    fetch('https://meme-api.com/gimme/wholesomememes')
    .then((res) => res.json())
    .then((data) => {
        const {author, title, url} = data;
        authorOutput.innerText = `Meme By: ${author}`;
        memeImage.src = url;
        memeTitle.innerText = title;
        console.log(author, title, url);
    })
});

