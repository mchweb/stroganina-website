function sendBookForm(){
	var name = $('#f-name').val(),
		phone = $('#f-phone').val(),
		bar = $('#f-order_bar').prop("checked"),
		bar_date = "", bar_time = "",
		space = $('#f-order_space').prop("checked"),
		space_date = "", space_time = "",
		lunch = $('#f-order_lunch').prop("checked"),
		sub = $('#f-order_sub').prop("checked"),
		email = $('#f-email').val(),
		text = $('#f-text').val();
	
	$(".bookFormGroup").each(function(){
		$(this).removeClass("bookFormGroup_invalid");
	});
	$(".bookFormGroup__dateTime").each(function(){
		$(this).removeClass("bookFormGroup_invalid");
	});
	$(".bookFormSection").each(function(){
		$(this).removeClass("bookFormGroup_invalid");
	});

	var isValid = true;
	if (sub && (email == "")){
		isValid = false;
		$('#f-email').parent().addClass("bookFormGroup_invalid");
		$('#f-email').focus();
		$('#f-email').parent()[0].scrollIntoView();
	}
	if (space){
		space_date = $('#f-space_date').val();
		space_time = $('#f-space_time').val();

		if (space_date == ""){
			isValid = false;
			$('#f-space_date').parent().addClass("bookFormGroup_invalid");
			$('#f-space_date').focus();
			$('#f-space_date').parent()[0].scrollIntoView();
		}
		if (space_time == ""){
			isValid = false;
			$('#f-space_time').parent().addClass("bookFormGroup_invalid");
			if (space_date != ""){
				$('#f-space_time').focus();
				$('#f-space_time').parent()[0].scrollIntoView();
			}
		}	
	}
	if (bar){
		bar_date = $('#f-bar_date').val();
		bar_time = $('#f-bar_time').val();

		if (bar_date == ""){
			isValid = false;
			$('#f-bar_date').parent().addClass("bookFormGroup_invalid");
			$('#f-bar_date').focus();
			$('#f-bar_date').parent()[0].scrollIntoView();
		}
		if (bar_time == ""){
			isValid = false;
			$('#f-bar_time').parent().addClass("bookFormGroup_invalid");
			if (bar_date != ""){
				$('#f-bar_time').focus();
				$('#f-bar_time').parent()[0].scrollIntoView();
			}
		}

	}
	if (!bar && !space && !lunch && !sub){
		isValid = false;
		$('#f-order').addClass("bookFormGroup_invalid");
		$('#f-order').focus();
		$('#f-order')[0].scrollIntoView();
	}
	if (phone == "" || phone == "+7 "){
		isValid = false;
		$('#f-phone').parent().addClass("bookFormGroup_invalid");
		$('#f-phone').focus();
		$('#f-phone').parent()[0].scrollIntoView();
	}
	
	if (!isValid){return}

	//$(".bookForm__button button").addClass("btn_loading");
	//$(".bookForm__button button").prop("disabled", true);

	// отправляем форму

	rememberUserData(name, phone, email);
	successBookForm(bar_date, bar_time, space_date, space_time, lunch, sub );//, '[[*page_lang]]');

	//$(".bookForm__button button").addClass("btn_loading");
	//$(".bookForm__button button").prop("disabled", true);
}
function sendContactForm(){
	var name = $('#fc-name').val(),
		phone = $('#fc-phone').val(),
		text = $('#fc-text').val(),
		sub = $('#fc-order_sub').prop("checked"),
		email = $('#fc-email').val();
	
	$(".bookFormGroup").each(function(){
		$(this).removeClass("bookFormGroup_invalid");
	});

	var isValid = true;
	if (sub && (email == "")){
		isValid = false;
		$('#fc-email').parent().addClass("bookFormGroup_invalid");
		$('#fc-email').focus();
		$('#fc-email').parent()[0].scrollIntoView();
	}
	if (text == ""){
		isValid = false;
		$('#fc-text').parent().addClass("bookFormGroup_invalid");
		$('#fc-text').focus();
		$('#fc-text').parent()[0].scrollIntoView();
	}
	if (phone == "" || phone == "+7 "){
		isValid = false;
		$('#fc-phone').parent().addClass("bookFormGroup_invalid");
		$('#fc-phone').focus();
		$('#fc-phone').parent()[0].scrollIntoView();
	}

	if (!isValid){return}

	rememberUserData(name, phone, email);
	$(".book_contact").addClass("book_success");
	resetBookForm();
	fillUserData();
}

function sendRegForm(){
	var name = $('#e-name').val(),
		phone = $('#e-phone').val(),
		email = $('#e-email').val(),
		org = $('#e-org').val(),
		position = $('#e-position').val(),
		count = $('#e-count').val(),
		pay = $('#e-pay_1').prop("checked");
		id = 1,
		sub = $('#e-sub').prop("checked");
	
	$(".eventFormGroup").each(function(){
		$(this).removeClass("eventFormGroup_invalid");
	});
	$('#e-count').removeClass("eventForm__count_invalid");

	var isValid = true;
	if (phone == "" || phone == "+7 "){
		isValid = false;
		$('#e-phone').parent().addClass("eventFormGroup_invalid");
		$('#e-phone').focus();
	}
	if (email == ""){
		isValid = false;
		$('#e-email').parent().addClass("eventFormGroup_invalid");
		$('#e-email').focus();
	}
	if (name == ""){
		isValid = false;
		$('#e-name').parent().addClass("eventFormGroup_invalid");
		$('#e-name').focus();
	}
	if (count == ""){
		isValid = false;
		$('#e-count').addClass("eventForm__count_invalid");
		$('#e-count').focus();
	}

	if (!isValid){return}



	rememberUserData(name, phone, email, org, position);
	$(".eventReg").addClass("eventReg_success");

	//fillUserData();
}

function sendFooterForm(){
	var name = $('#ff-name').val(),
		email = $('#ff-email').val();
	
	$(".footerFormGroup").each(function(){
		$(this).removeClass("footerFormGroup_invalid");
	});

	var isValid = true;
	if (email == ""){
		isValid = false;
		$('#ff-email').parent().addClass("footerFormGroup_invalid");
	}
	if (name == ""){
		isValid = false;
		$('#ff-name').parent().addClass("footerFormGroup_invalid");
	}

	if (!isValid){return}

	rememberUserData(name, "", email);
	$(".footerSubscribe .footerSubscribe__form").fadeOut("",function(){
		$(".footerSubscribe .footerSubscribe__success").fadeIn("");
	});
	
}

function sendCallback(){
	var phone = $('#c-phone').val();
	var isValid = true;

	$(".callback__form").removeClass("callback__form_invalid");
	if (phone == "" || phone == "+7 " || phone.length < 16){
		isValid = false;
		$(".callback__form").addClass("callback__form_invalid");
		$('#f-phone').focus();
		$('#f-phone').parent()[0].scrollIntoView();
	}

	if (!isValid){return}

	

	rememberUserData("", phone);
	$(".callback").addClass("callback_success");
	fillUserData();
}

function sendOrderForm(){
	//yaCounter36628560.reachGoal('button');
	var name = $('#o-name').val(),
		phone = $('#o-phone').val(),
		cartData = getCartData();
	
	$(".order-form__formGroup").each(function(){
		$(this).removeClass("order-form__formGroup_invalid");
	});

	var isValid = true;
	if (phone == "" || phone == "+7 " || phone.length < 16){
		isValid = false;
		$('#o-phone').parent().addClass("order-form__form_invalid");
	}

	if (!isValid){return}

	//yaCounter36628560.reachGoal('request');

	rememberUserData(name, phone);	
}