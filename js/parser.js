function parse() {
    let newColors = parseList();
    writeToJson(newColors);
}

function parseList() {
    let newColors = {
        colors: []
    };
    for (const a of document.querySelectorAll("#color-list>li>a")) {
        let name;
        const hex = RGBToHex(a.parentElement.style.backgroundColor);
        let code;

        for (const child of a.children) {
            if (child.childElementCount > 0) {
                name = child.firstElementChild.textContent;
            } else {
                code = child.textContent;
            }
        }
        newColors.colors.push({name: name, hex: hex, code: code});
    };
    return newColors;
}

function RGBToHex(rgb) {
    let sep = rgb.indexOf(",") > -1 ? "," : " ";
    rgb = rgb.substr(4).split(")")[0].split(sep);

    let r = (+rgb[0]).toString(16),
      g = (+rgb[1]).toString(16),
      b = (+rgb[2]).toString(16);

    if (r.length == 1) {
        r = "0" + r;   
    }
    if (g.length == 1) {
        g = "0" + g;
    }
    if (b.length == 1) {
        b = "0" + b;
    }
      
    return "#" + r + g + b;
}

//TODO this is nice, but sadly I'm not using Node.js
function writeToJson(newColors) {
    let fs = require('fs');
    fs.readFile("kleuren.json", "utf8", function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            obj = JSON.parse(data);
            obj.gamma.colors.push(newColors.colors);
            var json = JSON.stringify(obj);
            fs.writeFile("kleuren.json", json, "utf8", callback);
        }
    });
}