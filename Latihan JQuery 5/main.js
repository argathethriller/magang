 $(document).ready(function(){
 	$(":input").focus(function(){
		$(this).addClass("formAPD__container__field--focus");
	});


	$(".formAPD__container__button").click(function(){
		if($('#fname').val() === ""){
			$("#fname").removeClass("formAPD__container__field").addClass("formAPD__container__field--error");
			$("#errorname").html("Nama tidak boleh kosong");
		} else{
			$("#fname").addClass("formAPD__container__field");
			$("#errorname").removeClass("formAPD__container__field--error").addClass("formAPD__container__field--solved");
		}

		if($('#email').val() === ""){
			$("#email").removeClass("formAPD__container__field").addClass("formAPD__container__field--error");
			$("#errormail").html("e-mail tidak boleh kosong");
		} else {
			$("#email").addClass("formAPD__container__field");
			$("#errormail").removeClass("formAPD__container__field--error").addClass("formAPD__container__field--solved");
		}

		if($('#passwd').length < 8){
			$("#passwd").removeClass("formAPD__container__field").addClass("formAPD__container__field--error");
			$("#errorpass").html("Password belum sampai 8 karakter");		
		}

		if($('#passwd').val() === ""){
			$("#passwd").removeClass("formAPD__container__field").addClass("formAPD__container__field--error");
			$("#errorpass").html("Password tidak boleh kosong");
		} else {
			$("#passwd").addClass("formAPD__container__field");
			$("#errorpass").removeClass("formAPD__container__field--error").addClass("formAPD__container__field--solved");
		}
		
		if ($('#bio').val() === ""){
			$("#bio").removeClass("formAPD__container__field").addClass("formAPD__container__field--error");
			$("#errorbio").html("Bio tidak boleh kosong");
		}
	});

	$(":input").blur(function() {
	        $(this).removeClass("formAPD__container__field--focus").addClass("formAPD__container__field");
	 });

});