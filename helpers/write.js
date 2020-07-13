const fs = require('fs');
const path = require('path');

const file = 'kleuren.json';

exports.writeToJson = (newColors) => {
    const filePath = path.join(__dirname, '../models/', file);
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.log(err.code);
            console.log(err);
        } else {
            obj = JSON.parse(data);
            //TODO this creates an array in the existing array
            obj.gamma.colors.push(newColors.colors);

            var json = JSON.stringify(obj);
            
            fs.writeFile(filePath, json, 'utf8', (err) => {
                if (err) throw err;
                console.log('File has been saved!');
            });
        }
    });
    return 'success';
};