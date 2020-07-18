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

            obj.gamma.colors = addColorsToArray(obj.gamma.colors, newColors.colors)
            var json = JSON.stringify(obj);
            
            fs.writeFile(filePath, json, 'utf8', (err) => {
                if (err) throw err;
                console.log('File has been saved!');
            });
        }
    });
    return 'success';
};

function addColorsToArray(colorArray, newColors) {
    if (newColors.length > 75000) {
        newColors.forEach(newColor => {
            colorArray.push(newColor);
        });
    } else {
        colorArray.push(...newColors);
    }
    return colorArray;
}