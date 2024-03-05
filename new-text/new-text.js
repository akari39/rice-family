function fillLineWithDash() {
    const lines = document.getElementsByClassName('ingredient-line');
    lines.array.forEach(line => {
        console.log(line.parentElement);
        var parentWidth = line.parentElement.offsetWidth;
        console.log(parentWidth);
        var numChars = Math.floor(parentWidth);
        line.innerText = '.'.repeat(numChars);
    });
}

// Initial fill
fillLineWithDash();

// Adjust on window resize
window.onresize = fillLineWithDash;