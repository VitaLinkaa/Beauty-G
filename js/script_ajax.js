$(document).ready(function() {

	//E-mail Ajax Send
	$("form .form__callback").submit(function () { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				th.trigger("reset");
				$(th).find('.success').removeClass('active').fadeOut();
			}, 3000);
		});
		return false;
	});

});