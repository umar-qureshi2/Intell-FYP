<?php
/**
 * Created by umar.
 * User: microsoftLT
 * Date: 4/9/14
 * Time: 4:57 AM
 * To change this template use File | Settings | File Templates.
 */
include 'dbconnect.php';
echo "called me";
if(isset($_POST['username']))
{
    echo "inside";
    SignupUser($_POST['username'],$_POST['password'],$_POST['name'],$_POST['mobile'],$_POST['email'],$_POST['city'],$_POST['country']);
    //echo "User $_POST[username] has been signed up, please login";

}
include 'header.php';
echo '
	<div id="contentWrapper">
			<div id="contentBackground">
				<div class="container">
					<div class="row">
						<div class="col-md-8 col-md-offset-2">
							<h2 class="text-center">Register</h2>
							<p class="text-center">Enter your details below to register.</p>
						</div>
					</div>
					<div class="row">
						<div class="col-md-4 col-md-offset-4 ">
						<form action="signup.php" method="post" id="userinput">
							<div id="loginWrapper">
							    <label>
									<input type="text" name="username" required="required" class="inputText" id="username" placeholder="username">
									<span><i class="fa fa-male fa-lg"></i></span>
								</label>
								<label>
									<input type="text" required="required" class="inputText" id="name" name="name" placeholder="Name">
									<span><i class="fa fa-male fa-lg"></i></span>
								</label>
								<label>
									<input type="email" required="required" class="inputText" id="email" name="email" placeholder="Email Address">
									<span><i class="fa fa-male fa-lg"></i></span>
								</label>
								<label>
									<input type="text" required="required" class="inputText" id="mobile" name="mobile" placeholder="Mobile">
									<span><i class="fa fa-male fa-lg"></i></span>
								</label>
								<label>
									<input type="text" required="required" class="inputText" id="city" name="city" placeholder="City">
									<span><i class="fa fa-male fa-lg"></i></span>
								</label>
								<label>
									<input type="text" required="required" class="inputText" id="country" name="country" placeholder="Country">
									<span><i class="fa fa-male fa-lg"></i></span>
								</label>
								<label>
									<input required="required" type="password" class="inputText" id="password" name="password" placeholder="Password">
									<span><i class="fa fa-lock fa-lg"></i></span>
								</label>
								<input value="Register" type="submit" class="submit" />
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
';

include 'footer.php';

?>