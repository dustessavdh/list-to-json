// handle the pipeline for parsing all the data on the website
function parseKleuren() {
    let newColors = parseList();
    const kleuren = JSON.stringify(newColors);
    const url = 'http://localhost:3000/save';

    sendData(url, kleuren);
}

// get the list on the site and return it as an json object
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
    }
    return newColors;
}

// convert rgb values to hex values
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

// send a post request to a server
function sendData(url, data) {
    $.ajax({
        url: url,
        type: "POST",
        data: {data: data},
        success: (res) => {
            console.log(res);
        },
        error: (err) => {
            console.log(`Error ${err}`);
        }
    });
}