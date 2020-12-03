<? // Homework 9 for CISC2350 - Jordan Revon 12/3/2020 ?>

<!DOCTYPE = html>
<head> Data transfer and Processing </head>

<form action = "process.php" method = "post">
	<div>
		<Input type = "radio" name= "ccard" value = "visa" /> VISA
		<Input type = "radio" name= "ccard" value = "mastercard" /> MASTERCARD
		<Input type = "radio" name= "ccard" value = "discover" /> DISCOVER
		</br>

		Credit Card Number:
		<input type ="text" name = "ccnumber" size = "20"/>
		</br>

		<input type = "radio" name = "shipping" value = "20" /> Express Overnight Shipping
		<input type = "radio" name = "shipping" value = "5" /> DHL Expedited Shipping
		<input type = "radio" name = "shipping" value = "10" /> Amazon Prime Shipping
		</br>
		
		
		<input type = "submit"/>
		
	</div>
</form>


