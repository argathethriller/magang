 $(document).ready(function(){
    btn         = $('#addHobby');
    container   = $('#hobbyWrapper');
    input       = $('#Hobby');
    
    
    btn.bind('click', function (e) {

        e.preventDefault();

        var newInput = input.clone(true);

        container.append(newInput);
        newInput.focus();
    });
    /*
    btn.click(function(e){
        e.preventDefault();

        var newInput = input.clone(true);

        container.append(newInput);
        newInput.focus();
    });
    */
    /*
    var btn         = document.querySelector('#addHobby'),
        container   = document.querySelector('#hobbyWrapper'),
        input       = document.querySelector('#Hobby');
    */
    /*
    btn.addEventListener('click', function (e) {

        e.preventDefault();

        var newInput = input.cloneNode(true);

        container.appendChild(newInput);
        newInput.focus();
    }, false);
    */
    /*
 	$(':submit').click(function(){
		if($('#Name').val() === ""){
            $('#Name').addClass("form-input--error");
            }
        $('#Hobby').each(function(){
            if($('#Hobby').val() === ""){
               $('#Hobby').addClass("form-input--error");
            }
        });

	});

    $(':reset').click(function(){
        $('#Name').removeClass("form-input--error").addClass("form-input");
        $('#Hobby').each(function( i ) {
            $('#Hobby').removeClass("form-input--error").addClass("form-input");
        });
    });
 */
});