// Add an event listener the input field
const searchField = document.getElementById("search-field");
let evenSea = searchField.addEventListener("keyup", function (event) {

    // Reset result area
    const resultArea = document.getElementById("result-container");
    resultArea.innerText = "";
    resultArea.style.border = "none";

  // When the user press "Enter", in keyboard
  if (event.key === "Enter") {
    const profileName = searchField.value;

    getProfile(profileName);
  }
});

/*
    - Pre-conditions
        = Get user and repos info.

    - Post-conditions
        = Display them in the result div
*/
function displayDataInResultDiv(profileData, reposData) {

    const resultArea = document.getElementById("result-container");
    // Remove and data before insert any new data
    resultArea.innerText = "";

    // A new div to hold all data
    let successData = createNewElement("div", "success-data");

    // A row to hold each data
    let row = createNewElement("div", "");

    // Set the profile avatar
    let avatarContainer = createNewElement("div", "avatar-container");
    
    // Avatar data
    let userAvatar = createNewElement("img", "");
    userAvatar.id = "user-avatar";
    userAvatar.src = profileData.avatar_url;
    userAvatar.alt = "The user avatar on Github";

    // Put the image inside its container
    avatarContainer.appendChild(userAvatar);

    // Append container image in the data area
    successData.appendChild(avatarContainer);

    // Collect the required data in a hashmap. A key-value pairs
    let userData = new Map();

    userData.set(
        "Github link",
        `<a href="${profileData.html_url}" target="_blank">${profileData.html_url}</a>`
    );
    userData.set("name", profileData.name ? profileData.name : "None");
    userData.set("email", profileData.email ? profileData.email : "None");
    userData.set("location", profileData.location ? profileData.location : "None");
    userData.set("company", profileData.company ? profileData.company : "None");
    userData.set("bio", profileData.bio ? profileData.bio : "None");
    userData.set("followers", Number.parseInt(profileData.followers));
    userData.set("following", Number.parseInt(profileData.following));
    userData.set("created at", profileData.created_at);
    userData.set("repositories count", Number.parseInt(profileData.public_repos));

    //Modify date of creation
    let newDate = new Date(userData.get("created at"));
    userData.set("created at", `${newDate.getDay() + 1} - ${newDate.getMonth() + 1} - ${newDate.getFullYear()}`);

    // Loop over all data to insert them in the data area
  for ([key, value] of userData) {
    // Copy the key to a variable
    let dataKey = key;

    row = createNewElement("div", "");

    // Clean the key "data descriptor" from any space and replace it a dash to make a prober class name
    // Ex: key = name -> name
    // EX: key = repositories count -> repositories-count
    let newClassName = dataKey.trim();
    newClassName = newClassName.split(" ").join("-").toLowerCase();

    // Add the class to the div
    row.className = `${newClassName} data`;

    // A Data descriptor for each data
    // Ex: key = name -> Name
    let dataDescriptorContainer = createNewElement("span", "");
    let dataDescriptor = dataKey.replace(dataKey[0], dataKey[0].toUpperCase());

    // Append the data descriptor to a span
    dataDescriptorContainer.innerText = dataDescriptor + ": ";

    // Append the data descriptor and its value to a row
    row.appendChild(dataDescriptorContainer);
    row.innerHTML += value;

    // Append a row of data to the div parent "success-data"
    successData.appendChild(row);
  }

  let reposLength = reposData.length;

  // Handle repositories data
  if(reposLength > 0)
  {
    // Create a repos container
    let ulRepos = document.createElement("ul");
    ulRepos.className = "repos";

    // Add each repo to a <li>
    for (let i = 0; i < reposLength; i++) {
    let liRepo = document.createElement("li");

    liRepo.innerHTML = `${reposData[i].name} : <a href="${reposData[i].html_url}" target="_blank">${reposData[i].html_url}</a>`;

    ulRepos.appendChild(liRepo);
    }

    row.appendChild(ulRepos);
    successData.appendChild(row);
  }

  // Add everything inside the result area, and show the border
  resultArea.style.border = "2px solid #585656";
  resultArea.appendChild(successData);
}

/*
    - Pre-conditions
        = No profile isn't exist.

    - Post-conditions
        = Display no found div
*/
function showNotFound() {

    const resultArea = document.getElementById("result-container");

    // Create a data container
    let failureData = createNewElement("div", "failure-data");

    // 404 message
    let notFound = createNewElement("div", "not-found");
    notFound.innerText = "404";
  
    // An error message
    let errorMessage = createNewElement("div", "message");
    errorMessage.className = "message";
    errorMessage.innerText = "The profile is not found";
  
    failureData.appendChild(notFound);
    failureData.appendChild(errorMessage);
  
    // Add everything inside the result area, and show the border
    resultArea.style.border = "2px solid #585656";
    resultArea.appendChild(failureData);
  }

/*
    - Pre-conditions
        = None

    - Post-conditions
        = Create a new html element with class
*/
function createNewElement(element, classNam) {

  let htmlElement = document.createElement(element);

  if (classNam.length > 0) {
    htmlElement.className = classNam;
  }

  return htmlElement;
}

/*
    - Pre-conditions
        = You have a message you want to display in specific place.

    - Post-conditions
        = Show the message in the message section.
*/
function showMessage(position, msg) {
    // Get a reference to the message section
    const messageSection = document.querySelector(position);

    // Display the message
    messageSection.innerText = msg;
}

/*
    - Pre-conditions
        = None

    - Post-conditions
        = Display a loading spinner
*/
function displaySpinner() {

    const resultArea = document.getElementById("result-container");

    // Created a new div and add a class called spinner
    let spinner = document.createElement("div");
    spinner.className = "spinner";

    // Get a reference of the spinner, to check if it is exit or not
    let spinnerInAction = resultArea.querySelector(".spinner");

    // If the spinner doesn't exist, then add it
    if (!spinnerInAction) {
        resultArea.appendChild(spinner);
    }
}

/*
    - Pre-conditions
        = A spinner is exist

    - Post-conditions
        = Remove the spinner if exist
*/
function removeSpinner() {

    const resultArea = document.getElementById("result-container");
    // Remove and data before insert any new data
    resultArea.innerText = "";

  // Get a reference of the spinner, to check if it is exit or not
  let spinnerInAction = resultArea.querySelector(".spinner");

  // If the spinner exist, remove it
  if (spinnerInAction) {
    resultArea.removeChild(spinnerInAction);
  }
}

/*
    - Pre-conditions
        = Provide a profile name.

    - Post-conditions
        = Return true if it's valid, else return false.
*/
function validateProfileName(profileName) {
  if (
    profileName.length > 0 &&
    profileName != null &&
    profileName != undefined
  ) {
    return true;
  }

  showMessage(
    "#search-container .message",
    "Error: Profile name is not valid."
  );

  return false;
}

/*
    - Pre-conditions
        = Provide a valid username, in the input field.

    - Post-conditions
        = Get user profile using github api.
*/
function getProfile(profileName) {

  if (validateProfileName(profileName)) {

    // Clear any error messages
    showMessage("#search-container .message", "");

    // Get a clean input without spaces
    let name = profileName.trim();

    // Make an ajax call to the github api
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      displaySpinner();

      // If a profile is found
      if (this.readyState === 4 && this.status === 200) {
        setTimeout(function () {
            // Remove spinner
            removeSpinner();

            // Convert the json response to a javascript object
            let profileData = JSON.parse(xhr.response);

            // Additional xhr to fetch the user repositories
            fetch(`https://api.github.com/users/${name}/repos`)
            .then( response => response.json() ) // Convert data to a js object
            .then( responseData => displayDataInResultDiv(profileData, responseData) ); // Send both profile and repo data to display them.
        }, 2000);
      }
      // If a profile isn't found
      else if (this.status === 404) {
        setTimeout(function () {

          removeSpinner();

          // A flashed not found message
          showNotFound();

        }, 2000);
      }
    };

    // A get request with the profile name and async is true
    xhr.open("GET", `https://api.github.com/users/${name}`, true);

    xhr.send();
  }
}