<?php
include_once "sms.php";

/*
	Please login to your account in sendsms.pk and get your API KEY
	by navigating to this URL: http://www.sendsms.pk/api-settings.php
	Enter then API KEY given there in the following variable ($apikey)
*/

$apikey = "20577275006a02eab061";	//Your API KEY
$sms = new sendsmsdotpk($apikey);	//Making a new sendsms dot pk object

/*
	//TESTING isValid
if ($sms->isValid())
	echo "Your key IS VALID";
else
	echo "KEY: " . $apikey . " IS NOT VALID";
*/

/*
	//TESTING SENDSMS
if ($sms->sendsms("03333560511", "testing sms", 0))
	echo "sent!";
else
	echo "error ouccured!";
*/

/*
	//TESTING INBOX
$inbox = $sms->getInbox();
foreach ($inbox as $m)
	echo $m->msg . "<br />";
*/

/*
	//TESTING OutBox
$outbox = $sms->getOutbox();
foreach ($outbox as $m)
	echo $m->msg . "<br />";
*/

?>
