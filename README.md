# GitHub Profile Finder [< Live Demo >](https://github-profile-finder-11188.netlify.app/)

A simple web application that retrieves a GitHub profile with its repositories.

***
## Screenshots
- The new app
![new-app-light](https://user-images.githubusercontent.com/61619208/147855274-92932659-5f5c-442b-a05f-2eba9d6c9501.png)
![new-app-dark](https://user-images.githubusercontent.com/61619208/147855277-03fd32de-01ed-4bf7-9988-3625e6816ff3.png)

- The old app
![old-app-light](https://user-images.githubusercontent.com/61619208/147833588-031f2552-09f1-43a1-b523-463cd8888841.png)
![old-app-dark](https://user-images.githubusercontent.com/61619208/147833590-de656d4f-8a10-4c7f-824d-5ed20117b0c9.png)

## Introduction

**AJAX** is a powerful technology, which allows updating your page without a refresh process.

But, someone is asking, hmm... what is the problem with refreshing the page?!

So, my friend, the problem isn't with the refreshing process itself, the real problem with the HTTP protocol itself!

The HTTP protocol is a transport files protocol , it's the main engine between the client "Browser" and the server when you request a web page "data" and send data to the server. HTTP is great right?

Although, the HTTP has this power, it lacks to saving the state "stateless". If you request data from the server, and you refresh the page the data will be lost and you will do the process of request again. Simply, the HTTP doesn't have a mechanism to save the state of a request.

Here, AJAX plays a great role. AJAX can get data from the server using **HTTP** and updating the page with the new data using JavaScript, CSS, and HTML, without refreshing the page.

***

## Terminologies

**AJAX:** A technology that allow you to get data from the server as JSON, XML or Text without refreshing the web page.

**HTTP:** A transport files protocol between a client and a server.

**JSON:** A text file format, with key-value pairs structure.

**API:** Using system functionalities without knowing its code, or how it was built.

**REST API Architecture:** It's a modern API architecture.

***

## AJAX Internally

- ### How AJAX works?

  - When you request data from the server, the server bring the data from some kind of database MySQL, SQL server..etc and prepares/ coverts this data to a JSON format, then sends them using HTTP.

  - In the client side JavaScript  receives this data as JSON format, and with using  the **Serialization** JavaScript  covert JSON to JavaScript object. Without Serialization JavaScript can not use these data.

  - All programming languages have its implementations for the Serialization.

- ### How to make AJAX calls?

  - AJAX calls are language-dependent/framework/library , each programming language/framework/library  has its way to make AJAX calls.

- #### React JS
  Currently, React team does't provide a native implementation for React to support AJAX call. You can use **fetch method** or **Axios** 3rd party lib

- #### JavaScript

  JavaScript has two ways to make AJAX calls:

  1. [XMLHttpRequest (old)](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)

  2. [Fetch (Native/Modern)](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

- #### jQuery

  jQuery has many ways to make AJAX calls:

  1. [jQuery.ajax()](https://api.jquery.com/jquery.ajax/)
  2. [jQuery.getJSON()](https://api.jquery.com/jquery.getjson/)

## Background

By using AJAX and the REST APIs architecture of GitHub, I created a simple app that retrieves a GitHub profile with its repositories, without refresh the webpage.

Simply, enter the profile name in the search box and wait, if the app found a valid profile it will display it in the DOM without refreshing the page, else a not found message is displayed.

## Technologies

This application was built using: HTML, SASS, React JS 17, AJAX/Axios, Webpack 5 and APIs"REST APIs" of GitHub.

## Installation/Run

Clone the repo, add .env file with GITHUB_API_USERS=https://api.github.com/users/, *cd* cloned project, *npm run build && npm run start*.
