$(document).ready(function() {
	
	$("#contactform").validationEngine();
	
	//if submit button is clicked
	$('#contactform').submit(function (e) 
	{		
		e.preventDefault();
		
		if ($("#contactform").validationEngine('validate'))
		{
		var name = $('input[name="name"]');
		var email = $('input[name="email"]');
		var phone = $('input[name="phone"]');
		var budget = $('input:radio[name="budget"]:checked');
		var comment = $('textarea[name="comment"]');
		
		//organize the data properly
		var data = 'name=' + name.val() + '&email=' + email.val() + '&phone=' + 
		phone.val()+ '&budget=' + budget.val() + '&comment='  + encodeURIComponent(comment.val());
		
		//disabled all the text fields
		$('.text').attr('disabled','true');
		$('#submit').attr('disabled','true');
		
		//show the loading sign
					var opts = {
					  lines: 13, // The number of lines to draw
					  length: 20, // The length of each line
					  width: 4, // The line thickness
					  radius: 20, // The radius of the inner circle
					  corners: 0, // Corner roundness (0..1)
					  rotate: 0, // The rotation offset
					  direction: 1, // 1: clockwise, -1: counterclockwise
					  color: '#fff', // #rgb or #rrggbb
					  speed: 1, // Rounds per second
					  trail: 60, // Afterglow percentage
					  shadow: true, // Whether to render a shadow
					  hwaccel: false, // Whether to use hardware acceleration
					  className: 'spinner', // The CSS class to assign to the spinner
					  zIndex: 2e9, // The z-index (defaults to 2000000000)
					  top: 'auto', // Top position relative to parent in px
					  left: 'auto' // Left position relative to parent in px
					};
					var target = document.getElementById('contactspinner');
					var spinner = new Spinner(opts).spin(target);		
		
		//start the ajax
		$.ajax({
			//this is the php file that processes the data and send mail
			url: "contact.php",	
			
			//GET method is used
			type: "GET",

			//pass the data			
			data: data,		
			
			//Do not cache the page
			cache: false,
			
			//success
			success: function (html) {				
				//if process.php returned 1/true (send mail success)
				//if (html==1) {					
					//hide the form
					
					var tracking_code = '<iframe src="tracking.html" width="1px" height="1px" frameborder="0" marginwidth ="0px" marginheight="0px" scrolling="no"></iframe>';
					
					$('.form').fadeOut('slow');					
					$('.copyright').append(tracking_code);
					$.prompt("Thank you! We have received your message. We will get back to you as soon as possible!", {
						title: "Thank you",
						opacity: 0.6,
						focus: 1,
						top: "35%",
						buttons: { "Close": true }
					});
					
					spinner.stop();
					
				//if process.php returned 0/false (send mail failed)
				//} else alert('Sorry, unexpected error. Please try again later.');				
			}		
		});
		}
		//cancel the submit button default behaviours
		return false;
	});
});	
