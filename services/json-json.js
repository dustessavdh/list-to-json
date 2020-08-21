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
  return new Promise((resolve, reject) => {
    //TODO check if the url is safe using some sort of API or module
    axios.get(url)
    .then(response => {
      //TODO check if the response is actually an JSON response
      console.log('response body: ', response.body);
      console.log('response data: ', response.body);

      //TODO format JSON.
       const formattedJson = formatJson(response.body);

      resolve(JSON.stringify(formattedJson, null, 2));
    }).catch(err => {
      console.log(err);

      reject(err);
    });
  });
}

function formatJson(rawJson) {
  //TODO remove all items from an array and leave the first one
  return rawJson;
}

module.exports = {
  getFormattedJson,
};