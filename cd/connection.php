<?php

// 1. Create a database connection
$connection = mysqli_connect("localhost", "root", "");
if (!$connection) {
	die("Database connection failed: " . mysqli_error());
}

// 2. Select a database to use 
$db_select = mysqli_select_db($connection, "intell_user_db");
if (!$db_select) {
	die("Database selection failed: " . mysql_error());
}
?>
