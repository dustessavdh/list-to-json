function parse_list() {
    for (const li of document.querySelectorAll('#color-list>li')) {
        console.log(li.textContent);
    }
}