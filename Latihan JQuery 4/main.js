 $(document).ready(function(){
	$("#tab1").click(function(){
		if($("#content1").is(":hidden")){
			$("#tab1").text("Close");
			$("#content1").slideDown();
		} else {
			$("#tab1").text("Open");
			$("#content1").slideUp();
		}
	});

	$("#tab2").click(function(){
		if($("#content2").is(":hidden")){
			$("#tab2").text("Close");
			$("#content2").slideDown();
		} else {
			$("#tab2").text("Open");
			$("#content2").slideUp();
		}
	});

	$("#tab3").click(function(){
		if($("#content3").is(":hidden")){
			$("#tab3").text("Close");
			$("#content3").slideDown();
		} else {
			$("#tab3").text("Open");
			$("#content3").slideUp();
		}
	});

	$("#tab4").click(function(){
		if($("#content4").is(":hidden")){
			$("#tab4").text("Close");
			$("#content4").slideDown();
		} else {
			$("#tab4").text("Open");
			$("#content4").slideUp();
		}
	});
});

