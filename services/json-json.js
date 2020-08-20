const axios = require('axios');

// https://web.dev/promises
// var promise = new Promise(function(resolve, reject) {
//   resolve('call thin when it worked');
//   reject('call thus when it did not wotk');
// });
function getFormattedJson(url) {
  //TODO search how promisses work
  //TODO check if the url is safe using some sort of API or module
  let rawJson;
  axios.get(url)
    .then(response => {
      //TODO check if the response is actually an JSON response
      console.log('Response body: ', response.body);
      console.log('Response data: ', response.data);
      rawJson = response.body;
    })
    .catch(err => {
      console.log(err);
    });
    return JSON.stringify(rawJson, null, 2);
}

module.exports = {
  getFormattedJson,
};