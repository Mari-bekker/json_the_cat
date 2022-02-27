const request = require('request');

// the api end point: https://api.thecatapi.com/v1/breeds/search?q=sib

const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response ${body}`;
      callback(Error(msg), null);
      return;
    }

    // turning the response into an object from a string
    const data = JSON.parse(body);
    callback(null, data[0].description);
    
  });

};

module.exports = { fetchBreedDescription };