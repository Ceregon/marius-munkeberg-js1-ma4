const url = "https://api.rawg.io/api/games?dates=1999-01-01,1999-12-31&ordering=-rating";

const resultsContainer = document.querySelector(".container");

async function getGames() {
  const response = await fetch(url);

  const results = await response.json();

  const games = results.results;

  resultsContainer.innerHTML = "";

  for (let i = 0; i < games.length; i++) {
    console.log(games[i].name);
    console.log(games[i].released);
    console.log(games[i].rating);
    console.log(games[i].ratings_count);

    resultsContainer.innerHTML += `<a href="question3.html?id=${games[i].id}" style="margin: 10px">
                                    <div>${games[i].name}</div>
                                    <div>Released: ${games[i].released}</div>
                                    <div>Rating: ${games[i].rating}</div>
                                    <div>Number of ratings: ${games[i].ratings_count}</div>
                                  </a>`;
  }

  console.log(results);
}

getGames();
