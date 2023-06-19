const genrateMemebtn = document.querySelector(
    ".meme-genrator .genrate-meme-btn"
    );
const memeImage = document.querySelector(".meme-genrator img");
const memeTitle = document.querySelector(".meme-genrator .meme-title");
const memeAuthor = document.querySelector(".meme-genrator .meme-author");

const updateDetails=(url, title, author)=> {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML=title;
    memeAuthor.innerHTML=author;
};
const genrateMeme = () => {
fetch("https://meme-api.com/gimme/wholesomememes").then((response) => response.json()).then((data) => {
    updateDetails(data.url, data.title, data.author);
});
};
genrateMemebtn.addEventListener("click",genrateMeme);
genrateMeme();