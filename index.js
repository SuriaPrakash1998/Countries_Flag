// Create a new 'div' element for the root container
let divRoot = document.createElement('div');
divRoot.setAttribute("id", "root");// Set attribute for identification of div
divRoot.setAttribute("class", "container-fluid flex"); // Set attributes for styling
document.body.appendChild(divRoot); // Append the root div to the document body

// Asynchronously fetch data from a REST API
async function getData() {
  try {
    let res = await fetch("https://restcountries.com/v3.1/all"); // Fetch data from the API
    let data = await res.json(); // Parse the response as JSON
    return data; // Return the fetched data
  } catch (error) {
    console.log('error:', error); // Log and handle any errors that occur
    throw error; // Re-throw the error to propagate it
  }
}

// Invoke the getData function to fetch and display country data
getData();

// Asynchronously fetch country data and display flags and information
async function countriesFlag() {
  try {
    let data = await getData(); // Use 'await' to get the fetched data

    // Loop through each country's data
    data.forEach(e => {
      let div = document.createElement('div'); // Create a new 'div' element for each country
      div.innerHTML = `
        <div class="cardWrapper" style="width: 18rem;">
          <img src="${e.flags.svg}" class="card-img-top" alt="${e.flags.alt}">
          <div class="card-body">
            <h5 class="card-title">${e.name.common}</h5>
            <p class="card-text">${e.region}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>`; // Set the inner HTML for the card with country information
      divRoot.append(div); // Append the card div to the root container
    });
  } catch (error) {
    console.log('error:', error); // Log and handle any errors that occur
  } finally {
    console.log("avlodhan unaku"); // Log a message after the try-catch block, regardless of outcome
  }
}

// Invoke the countriesFlag function to populate the root container with country information
countriesFlag();
