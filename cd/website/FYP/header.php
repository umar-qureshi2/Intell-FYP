<?php
/**
 * Created by Umar.
 * User: microsoftLT
 * Date: 4/8/14
 * Time: 11:57 PM
 * To change this template use File | Settings | File Templates.
 */
echo '
<!DOCTYPE html>
<html lang="en">
	<head>
	    <meta charset="utf-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <meta name="description" content="">
	    <meta name="author" content="">

	    <title>Intell</title>

	    <!-- Bootstrap core CSS -->
	    <link href="css/bootstrap-theme.css" rel="stylesheet">
	    <link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
	    <link href="css/bootstrap.css" rel="stylesheet">

	    <!-- Custom styles for this template -->
	    <link href="css/style.css" rel="stylesheet">

	    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
	    <!--[if lt IE 9]>
	      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
	      <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
	    <![endif]-->
  	</head>

	<body>

		<!-- #Top Bar -->
		<div id="topBar">
			<div class="container">
				<a href="index.htm" class="mobileHome">Home</a>
				<i class="fa fa-bars fa-2x" id="mobileNav"></i>
				<nav>
					<ul>
						<li><a href="homepage.php">Home</a></li>
						<li><a href="gpuinfo.php">GPU Info</a></li>
						<li><a href="submitTest.php">Submit Test</a></li>
						<li><a href="viewGraph.php">View Graph</a></li>
						<li><a href="login.php" class="login"><i class="fa fa-lock"></i>';
                        if(isset($_SESSION['username'])) echo "Logout";
                        else { echo "login";}
                        echo '</a></li>
					</ul>
				</nav>
			</div>
		</div>
		<!-- /#Top Bar -->

		<!-- #Mobile Navigation -->
		<nav id="mobileNavigation">
			<ul>
				<li><a href="homepage.php">Home</a></li>
				<li><a href="gpuinfo.php">GPU Info</a></li>
				<li><a href="submitTest.php">Submit Test</a></li>
				<li><a href="viewGraph.php">View Graph</a></li>
				<li><a href="login.php" class="login"><i class="fa fa-lock"></i>';
                if(isset($_SESSION['username'])) echo "Logout";
                else { echo "login";}
                echo '</a></li>
			</ul>
		</nav>
		<!-- /#Mobile Navigation -->
';


?>