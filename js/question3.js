const container = document.querySelector(".container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://api.rawg.io/api/games/" + id;

async function fetchGame() {
  const response = await fetch(url);
  const details = await response.json();

  console.log(details);

  createHtml(details);
}

fetchGame();

function createHtml(details) {
  container.innerHTML = `<h1>${details.name}</h1>
    <div>Released: ${details.released}</div>
    <div>Rating: ${details.rating}</div>
    <div>Number of ratings: ${details.ratings_count}</div>
    <div>Number of suggestions: ${details.suggestions_count}</div>`;
}
