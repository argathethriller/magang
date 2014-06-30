 $(document).ready(function(){

	var btn         = document.querySelector('#addHobby'),
        container   = document.querySelector('#hobbyWrapper'),
        input       = document.querySelector('#Hobby');

      
    btn.addEventListener('click', function (e) {

        e.preventDefault();

        var newInput = input.cloneNode(true);

        container.appendChild(newInput);
        newInput.focus();
    }, false);
/*
    btn.on('click', function() {
    	
        preventDefault();

        var newInput = input.cloneNode(true);

        container.appendChild(newInput);
        newInput.focus();
    }, false);
*/
 	$(':submit').click(function(){
		if($('#Name').val() === ""){
			$('#Name').addClass("form-input--error");
		}

		//Buatlah looping untuk validasi semua isian hobby
		if($('#Hobby').val() === ""){
			$('#Hobby').addClass("form-input--error");
		}
	});

    $(':reset').click(function(){
        $('#Name').removeClass("form-input--error").addClass("form-input");
        $('#Hobby').each(function( i ) {
            $('#Hobby').removeClass("form-input--error").addClass("form-input");
        });

        //Buatlah looping untuk validasi semua isian hobby
    });
});

