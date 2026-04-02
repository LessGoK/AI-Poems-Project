function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsElement = document.querySelector("#instructions");

  let apiKey = "ba9bc3d0b8ta33o052590808f264424e";
  let request = ` Write a poem about ${instructionsElement}`;
  let context =
    "You are an expert poem writer. You write deeply emotional and beautiful poems. The poem should be 4 lines long. Format the answer in clean HTML using a <p> tag with line breaks <br> after every sentence. Sign the poem with (Shecodes AI) at the end of the pom in <strong>  tag.";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${request}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
