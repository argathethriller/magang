 $(document).ready(function(){
 	$(':input').focus(function(){
		$(this).addClass('.formAPD__form-container__field--focus');
	});
});

$(".formAPD__form-container__button").click(function(){
	if($('#fname').val() === ""){
		$("#fname").removeClass("formAPD__form-container__field").addClass("formAPD__form-container__field--error");
		$("#errorname").html("Nama tidak boleh kosong");
	} else{
		$("#fname").addClass("formAPD__form-container__field");
		$("#errorname").removeClass("formAPD__form-container__field--error").addClass("formAPD__form-container__field--solved");
	}

	if($('#email').val() === ""){
		$("#email").removeClass("formAPD__form-container__field").addClass("formAPD__form-container__field--error");
		$("#errormail").html("e-mail tidak boleh kosong");
	} else {
		$("#email").addClass("formAPD__form-container__field");
		$("#errormail").removeClass("formAPD__form-container__field--error").addClass("formAPD__form-container__field--solved");
	}

	if($('#passwd').length < 8){
		$("#passwd").removeClass("formAPD__form-container__field").addClass("formAPD__form-container__field--error");
		$("#errorpass").html("Password belum sampai 8 karakter");		
	}

	if($('#passwd').val() === ""){
		$("#passwd").removeClass("formAPD__form-container__field").addClass("formAPD__form-container__field--error");
		$("#errorpass").html("Password tidak boleh kosong");
	} else {
		$("#passwd").addClass("formAPD__form-container__field");
		$("#errorpass").removeClass("formAPD__form-container__field--error").addClass("formAPD__form-container__field--solved");
	}
	
	if ($('#bio').val() === ""){
		$("#bio").removeClass("formAPD__form-container__field").addClass("formAPD__form-container__field--error");
		$("#errorbio").html("Bio tidak boleh kosong");
	}
});

$('input[type="text"]').blur(function() {
        $(this).removeClass("formAPD__form-container__field--error").addClass("formAPD__form-container__field");
 });