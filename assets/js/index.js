let time = document.getElementById("current-time");
const array = [
  "assets/images/document.jpeg",
  "assets/images/image-1.jpeg",
  "assets/images/image-2.jpeg",
  "assets/images/image-3.jpeg",
  "assets/images/image-4.jpeg",
  "assets/images/image-5.jpeg",
  "assets/images/image-6.jpeg",
];

setInterval(() => {
  let d = new Date();
  time.innerHTML = d.toLocaleTimeString();
}, 1000);

function fetchRandomQuote() {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      const quote = data.content;
      document.getElementById("quote").textContent = quote;
    })
    .catch((error) => {
      console.error("Error fetching quote:", error);
    });
}

function getRandomItem(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return item;
}

fetchRandomQuote();

setInterval(() => {
  fetchRandomQuote();
  // document.body.style.backgroundImage = `url(./${getRandomItem(array)})`;
}, 1000);
