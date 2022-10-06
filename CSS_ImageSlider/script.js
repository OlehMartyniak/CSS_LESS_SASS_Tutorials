let counter = 9;
setInterval(function() {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 12) {
        counter = 9
    }
},5000)