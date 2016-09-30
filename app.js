console.log('have fun !');

function hello(){
	var lastName = $('#last_name').val();
	var city = $('#city').val();


	var infos = {
		first_name : 'first name',
		last_name : 'last name',
		city : 'city'
	}
	$('button').click(function(){
		var name = $('#first_name').val();
		infos.first_name = name;
		console.log(infos);
		var lastName = $('#last_name').val();
		infos.last_name = lastName;
		console.log(infos);
		var city = $('#city').val();
		infos.city = city;
		console.log(infos);


		
		var salut = $('#username').html(infos.last_name + " " + infos.first_name);

		
		

	});

};

hello();
/*Concaténez les champs first_name et last_name et 
dites bonjour à notre cher visiteur dans le titre en 
replacant le contenu du span #username*/