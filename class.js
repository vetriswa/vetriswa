function attachEventListeners() {
    let count = 0;
    document.getElementById("clickMe").addEventListener("click", function DOMCONTENTLOADED() {
        console.log("DOM is loaded", ++count);
    });
}
attachEventListeners();