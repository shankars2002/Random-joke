document.getElementById("jokeBtn").addEventListener("click", fetchJoke);

function fetchJoke() {
  const jokeElement = document.getElementById("joke");
  jokeElement.textContent = "Loading...";

  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
      jokeElement.textContent = `${data.setup} - ${data.punchline}`;
    })
    .catch(error => {
      jokeElement.textContent = "Oops! Something went wrong. Please try again.";
      console.error("Error fetching joke:", error);
    });
}
