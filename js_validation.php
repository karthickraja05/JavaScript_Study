<!DOCTYPE html>
<html>
<head>
	<title>JQuery Validation</title>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.5/jquery.validate.min.js" integrity="sha512-rstIgDs0xPgmG6RX1Aba4KV5cWJbAMcvRCVmglpam9SoHZiUCyQVDdH2LPlxoHtrv17XWblE/V/PP+Tr04hbtA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>


</head>
<body>
	<form id="form" method="GET">
		Name: <input type="text" name="name" id="name"><br/>
		Age: <input type="number" name="age"><br/>
		<input type="submit" name="submit" value="submit" id="submit">
	</form>
</body>
</html>
<script type="text/javascript">
	let not_allowed_word = ['hello','world','mani','dummy','god'];

	$(document).ready(function() {

		$.validator.addMethod("checkWord", function(value, element) {
		   return !not_allowed_word.includes(value);
		}, 'This Word Not Allowed');

	   $("#form").validate({
	      rules: {
	         name: {
	         	required: true,
	         	normalizer: function( value ) {
     	        	return $.trim( value );
     	      	},
     	      	checkWord: true,
     	     },
	         age: 'required',
	      }
	   });

	});
	   
    
</script>