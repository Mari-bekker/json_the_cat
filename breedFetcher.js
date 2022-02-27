const request = require('request');

// the api end point: https://api.thecatapi.com/v1/breeds/search?q=sib

// Write the logic in breedFetcher.js to fetch the Siberian data from the API endpoint using request.

let breed = process.argv.slice(2);

const fetchBreedDescription = function(breed) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      console.log("There was an error in the request: ", error);
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response ${body}`;
      console.log(msg);
      return;
    }

    // turning the response into an object from a string
    const data = JSON.parse(body);

    if (data[0] === undefined) {
      console.log("requested breed not found");
    } else {
      console.log(data[0].description);
    }
    
  });

};

fetchBreedDescription(breed);

module.exports = { fetchBreedDescription };