<? // Homework 9 for CISC2350 - Jordan Revon 12/3/2020 ?>

<?php
$creditcard = $_POST["ccard"];
$ccnum = $_POST["ccnumber"];
if(isset($_POST["shipping"]))
{
	$shipmethod = $_POST["shipping"];
};
$price = "1000000";
?>

<!DOCTYPE html>
<html>
<head>
<title> Credit Card Billing </title>
  </head>

<body>
<h1> Thank You </h1>
  <p>
Your <?= $creditcard ?> card, number <?= $ccnum ?>, has been successfully charged $<?php 
if(isset($_POST["shipping"]))
{
	print $price + $shipmethod;
}
else
{
	print $price;
}	
?>.00. Thank you !
  </p>

</body>
</html>