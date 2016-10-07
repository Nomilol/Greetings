console.log('have fun !');

function hello(){
	var lastName = $('#last_name').val();
	var city = $('#city').val();
	var infos = {};

	$('button').click(function(){
		infos.first_name = $('#first_name').val();
		infos.last_name  = $('#last_name').val();
		infos.city = $('#city').val();

		var salut = $('#username').html(infos.last_name + " " + infos.first_name);

	});

};

hello();









