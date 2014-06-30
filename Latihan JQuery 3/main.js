$(document).ready(function(){
	$(":button").click(function(){
		$('.box').toggleClass('box--big');
		if($(":button").text() === "Ubah!"){
			$(":button").text("Kembali");
		} else {
			$(":button").text("Ubah!");
		}
	});
});

