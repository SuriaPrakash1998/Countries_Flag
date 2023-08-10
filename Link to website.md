# Countries_Flag
# https://jolly-mochi-1c7232.netlify.app/

Countries Flag Display Documentation
This documentation provides an overview of the JavaScript code that fetches data from a REST API containing information about countries and their flags. The fetched data is then used to dynamically create and display card components for each country's flag and information on a web page.

Table of Contents
Introduction
Setup
Functions
getData
countriesFlag
Usage
Conclusion
Introduction
The provided JavaScript code focuses on utilizing asynchronous programming concepts to fetch data from the "https://restcountries.com/v3.1/all" REST API. This data contains details about various countries, including their flags and regions. The code then uses this data to dynamically generate HTML card components, each representing a country's flag and information.

Setup
Root Container: A root container (divRoot) is created as a div HTML element and appended to the body of the document. This container will hold the generated card components.
Functions
getData
The getData function is an asynchronous function that fetches data from the specified API endpoint using the fetch API. It then parses the response as JSON and returns the fetched data.

javascript
Copy code
async function getData() {
  try {
    // Fetch data from the API
    let res = await fetch("https://restcountries.com/v3.1/all");
    
    // Parse the response as JSON
    let data = await res.json();
    
    // Return the fetched data
    return data;
  } catch (error) {
    console.log('error:', error);
    throw error; // Re-throw the error to propagate it
  }
}
countriesFlag
The countriesFlag function is responsible for populating the root container with card components for each country. It uses the getData function to fetch the data and then iterates through each country's data to dynamically create card components with flag images and information.

javascript
Copy code
async function countriesFlag() {
  try {
    let data = await getData(); // Fetch data using getData function
    
    // Loop through each country's data
    data.forEach(e => {
      // Create a new 'div' element for each country card
      let div = document.createElement('div');
      
      // Set the inner HTML for the card component using country data
      div.innerHTML = `
        <div class="cardWrapper" style="width: 18rem;">
          <img src="${e.flags.svg}" class="card-img-top" alt="${e.flags.alt}">
          <div class="card-body">
            <h5 class="card-title">${e.name.common}</h5>
            <p class="card-text">${e.region}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>`;
      
      // Append the card component to the root container
      divRoot.append(div);
    });
  } catch (error) {
    console.log('error:', error);
  } finally {
    console.log("avlodhan unaku");
  }
}
Usage
To use this code, follow these steps:

Ensure the HTML file has a <body> tag to append elements to.
Place the provided JavaScript code within a <script> tag in the HTML file, after the <body> tag.
Conclusion
The provided JavaScript code demonstrates the use of asynchronous programming concepts to fetch and display country data using dynamically generated card components. By using the getData function for fetching and the countriesFlag function for rendering, the code achieves efficient data retrieval and a visually appealing user interface for displaying country flags and information.
