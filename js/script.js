const searchBtn = document.getElementById("search-btn"),
  searchField = document.getElementById("search-field");
const resultArea = document.getElementById("result-container");

// A temp variable to store the github username
let githubUsername = null;

// Add event listener on the btn
searchBtn.addEventListener("click", function () {
  // Reset result area
  resultArea.innerText = "";
  resultArea.style.border = "none";

  // Get the field input form the user and store in a variable
  let inputUsername = searchField.value;

  // Validate the input
  if (
    inputUsername.length > 0 &&
    inputUsername != undefined &&
    inputUsername.length != ""
  ) {
    // Get a clean input
    githubUsername = inputUsername.trim();

    // A variable to hold the XHR request from the github api
    let githubApiRequest = new XMLHttpRequest();

    try {
      // Start to send a request
      githubApiRequest.onreadystatechange = function () {
        // While the request process display a loading spinner
        displaySpinner();

        // If a profile is found
        if (this.readyState === 4 && this.status === 200) {
          setTimeout(function () {
            // Remove spinner
            removeSpinner();

            // Convert the json response text to a javascript object
            let objectData = JSON.parse(githubApiRequest.response);

            // Send the response data, to handle them
            processData(objectData);
          }, 2000);
        }
        // If a profile isn't found
        else {
          setTimeout(function () {
            // Remove spinner
            removeSpinner();

            // A flashed not found message
            showNotFound();
          }, 2000);
        }
      };
      // A get request with the profile name and async is true
      githubApiRequest.open(
        "GET",
        `https://api.github.com/users/${githubUsername}`,
        true
      );

      githubApiRequest.send();
    } catch (e) {
      console.log("ERROR");
    }
  }
});

// Utilities functions
function displaySpinner() {
  // Created a new div and add class spinner
  let spinner = document.createElement("div");
  spinner.className = "spinner";

  // Get a reference of the spinner, to check if it is exit or not
  let spinnerInAction = resultArea.querySelector(".spinner");

  // If the spinner doesn't exist, then add it
  if (!spinnerInAction) {
    resultArea.appendChild(spinner);
  }
}

function removeSpinner() {
  // Get a reference of the spinner, to check if it is exit or not
  let spinnerInAction = resultArea.querySelector(".spinner");

  // If the spinner exist, remove it
  if (spinnerInAction) {
    resultArea.removeChild(spinnerInAction);
  }
}

function processData(apiData) {
  // Remove and data before insert any new data
  resultArea.innerText = "";

  // Create a data container
  let successData = document.createElement("div");
  successData.className = "success-data";

  // A row to hold each data
  let row = document.createElement("div");

  // Set the profile avatar
  let avatarContainer = document.createElement("div");
  avatarContainer.className = "avatar-container";

  // Avatar data
  let userAvatar = document.createElement("img");
  userAvatar.id = "user-avatar";
  userAvatar.src = apiData.avatar_url;
  userAvatar.alt = "The user avatar on Github";

  // Put the image inside its container
  avatarContainer.appendChild(userAvatar);

  // Append container image in the data area
  successData.appendChild(avatarContainer);

  // Collect the required data in a hashmap. A key-value pairs
  let userData = new Map();

  userData.set(
    "Github link",
    `<a href="${apiData.html_url}" target="_blank">${apiData.html_url}</a>`
  );
  userData.set("name", apiData.name);
  userData.set("email", apiData.email ? apiData.email : "None");
  userData.set("location", apiData.location ? apiData.location : "None");
  userData.set("company", apiData.company ? apiData.company : "None");
  userData.set("bio", apiData.bio ? apiData.bio : "None");
  userData.set("followers", Number.parseInt(apiData.followers));
  userData.set("following", Number.parseInt(apiData.following));
  userData.set("created at", apiData.created_at);
  userData.set("repositories count", Number.parseInt(apiData.public_repos));

  // Loop over all data to insert them in the data area
  for ([key, value] of userData) {
    // Copy the key to a variable
    let dataKey = key;

    row = document.createElement("div");

    // Clean the key "data descriptor" from any space and replace it a dash to make a prober class name
    // Ex: key = name -> name
    // EX: key = repositories count -> repositories-count
    let newClassName = dataKey.trim();
    newClassName = newClassName.split(" ").join("-").toLowerCase();

    // Add the class to the div
    row.className = `${newClassName} data`;

    // A Data descriptor for each data
    // Ex: key = name -> Name
    let dataDescriptorContainer = document.createElement("span");
    let dataDescriptor = dataKey.replace(dataKey[0], dataKey[0].toUpperCase());

    // Append the data descriptor to a span
    dataDescriptorContainer.innerText = dataDescriptor + ": ";

    // Append the data descriptor and its value to a row
    row.appendChild(dataDescriptorContainer);
    row.innerHTML += value;

    // Append a row of data to the div parent "success-data"
    successData.appendChild(row);
  }

  // Collect the user repos, if they are exist
  let userRepos = new Map();

  // Fetch user repositories
  fetch(`https://api.github.com/users/${githubUsername}/repos`)
    .then((res) => res.json()) // Convert data to js object
    .then((data) => {
      lenData = data.length;

      if (lenData > 0) {
        // Create a repos container
        let ulRepos = document.createElement("ul");
        ulRepos.className = "repos";

        for (let i = 0; i < lenData; i++) {
          let liRepo = document.createElement("li");

          liRepo.innerHTML = `${data[i].name} : <a href="${data[i].html_url}" target="_blank">${data[i].html_url}</a>`;

          ulRepos.appendChild(liRepo);
        }

        row.appendChild(ulRepos);
        successData.appendChild(row);
      }
    });

  // Add everything inside the result area, and show the border
  resultArea.style.border = "2px solid #585656";
  resultArea.appendChild(successData);
}

function showNotFound() {
  // Remove and data before insert any new data
  resultArea.innerText = "";

  // Create a data container
  let failureData = document.createElement("div");
  failureData.className = "failure-data";

  // 404 message
  let notFound = document.createElement("div");
  notFound.className = "not-found";
  notFound.innerText = "404";

  // An error message
  let errorMessage = document.createElement("div");
  errorMessage.className = "message";
  errorMessage.innerText = "The profile is not found";

  failureData.appendChild(notFound);
  failureData.appendChild(errorMessage);

  // Add everything inside the result area, and show the border
  resultArea.style.border = "2px solid #585656";
  resultArea.appendChild(failureData);
}
