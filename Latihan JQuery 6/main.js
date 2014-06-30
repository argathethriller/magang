
(function () {

    var btn         = document.querySelector('#addHobby'),
        container   = document.querySelector('#hobbyWrapper'),
        input       = document.querySelector('#Hobby');

    btn.addEventListener('click', function (e) {
        e.preventDefault();

        var newInput = input.cloneNode(true);

        container.appendChild(newInput);
        newInput.focus();
    }, false);

})();