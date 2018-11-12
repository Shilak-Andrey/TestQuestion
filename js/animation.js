document.body.addEventListener('keypress', presses);

function presses(event) {

    var charCode = event.which || event.keyCode;

    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || // английские символы
        (charCode > 1024 && charCode < 1106)) { //русские символы
        var divElement = document.createElement('div');
        divElement.className = 'fade-in';
        divElement.textContent = String.fromCharCode(charCode);

        var lettersInbox = document.querySelector('.lettersInbox');
        lettersInbox.appendChild(divElement);
    }

}
