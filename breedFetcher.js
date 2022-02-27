const request = require('request');

// the api end point: https://api.thecatapi.com/v1/breeds/search?q=sib

// Write the logic in breedFetcher.js to fetch the Siberian data from the API endpoint using request.

request ('https://api.thecatapi.com/v1/breeds/search?q=sib', (error, response, body) => {
  //console.log(body);
  //console.log(typeof body) // it returns a string


  const data = JSON.parse(body);
  //console.log(data);
  //console.log(typeof data);
  console.log(data[0]);
}
  )

  //Let's use JSON.parse to convert the JSON string into an actual object.
