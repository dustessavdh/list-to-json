const fs = require('fs');
const path = require('path');

const file = 'kleuren.json';

// write the data that is given as a parameter to an json file
exports.writeToJson = (newColors) => {
    const filePath = path.join(__dirname, '../models/', file);

    //TODO cleanup this code
    // Open the file, append the new colors and write to the file.
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
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

// add colors to an array
function addColorsToArray(colorArray, newColors) {
    // since push can give an stack overflow error when the array you're pushing is too long.
    // I added a check to use a different method when the new colors are too big
    if (newColors.length > 75000) {
        newColors.forEach(newColor => {
            colorArray.push(newColor);
        });
    } else {
        colorArray.push(...newColors);
    }
    return colorArray;
}