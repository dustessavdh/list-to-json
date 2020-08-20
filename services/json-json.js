const axios = require('axios');

// https://web.dev/promises
// function example(param) {
//   return new Promise(function (resolve, reject) {
//     if (allGood) {
//       resolve('Call this when its all good');
//     } else {
//       reject('Call this when it failed');
//     }
//   });
// }
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