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
    
    /* bisa juga dengan seperti ini
    btn.click(function(e){
        e.preventDefault();

        var newInput = input.clone(true);

        container.append(newInput);
        newInput.focus();
    });
    */
    
    $(':submit').click(function(e){
        e.preventDefault();
		if($('#Name').val() === ""){
            $('#Name').addClass("form-input--error");
        } else {
            $('#Name').removeClass("form-input--error").addClass("form-input");
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
});