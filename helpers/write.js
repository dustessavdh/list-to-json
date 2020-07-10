const fs = require('fs');   

exports.writeToJson = (newColors) => {
    let fs = require('fs');
    fs.readFile("../models/kleuren.json", "utf8", function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            obj = JSON.parse(data);
            obj.gamma.colors.push(newColors.colors);
            var json = JSON.stringify(obj);
            fs.writeFile("../models/kleuren.json", json, "utf8", callback);
        }
    });
}