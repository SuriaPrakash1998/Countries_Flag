let divRoot = document.createElement('div');
divRoot.setAttribute("id", "root");
divRoot.setAttribute("class", "container-fluid flex"); // Fixed this line to set an attribute
document.body.appendChild(divRoot);

async function getData() {
  try {
    let res = await fetch("https://restcountries.com/v3.1/all");
    let data = await res.json();
    return data; // Return the data fetched
  } catch (error) {
    console.log('error:', error);
    throw error; // Re-throw the error
  }
}

getData();

async function countriesFlag() {
  try {
    let data = await getData(); // Use await to get the fetched data

    data.forEach(e => {
      let div = document.createElement('div');
      div.innerHTML = `
        <div class="cardWrapper" style="width: 18rem;">
          <img src="${e.flags.svg}" class="card-img-top" alt="${e.flags.alt}">
          <div class="card-body">
            <h5 class="card-title">${e.name.common}</h5>
            <p class="card-text">${e.region}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>`;
      divRoot.append(div);
    });
  } catch (error) {
    console.log('error:', error);
  } finally {
    console.log("avlodhan unaku");
  }
}

countriesFlag();
