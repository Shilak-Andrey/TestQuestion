document.body.addEventListener('keypress', keyboardHandler);

function keyboardHandler(event) {

    var charCode = event.which || event.keyCode;

    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || // english
        (charCode > 1024 && charCode < 1106)) { // russian
        var divElement = document.createElement('div');
        divElement.className = 'fade-in';
        divElement.textContent = String.fromCharCode(charCode);

        var lettersInbox = document.querySelector('.lettersInbox');
        lettersInbox.appendChild(divElement);
    }

}