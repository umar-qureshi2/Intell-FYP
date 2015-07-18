<?php
/**
 * Created by umar.
 * User: microsoftLT
 * Date: 4/9/14
 * Time: 7:44 AM
 * To change this template use File | Settings | File Templates.
 */
include "header.php";

include "dbconnect.php";

if(isset($_POST['username']) && isset($_POST['password']))
{
    echo "entered";
    if(Login($_POST['username'],$_POST['password']))
    {
        echo "Login Successful";
        header ("Location: homepage.php ");
    }
    else
    {

        echo "Login unsuccessful";
    }
}
else if(isset( $_SESSION['username']))
{
    unset( $_SESSION['username']);
    session_destroy();
}
echo '
<div id="contentWrapper">
			<div id="contentBackground">
				<div class="container">
					<div class="row">
						<div class="col-md-8 col-md-offset-2">
							<h2 class="text-center">Log in please</h2>
							<p class="text-center">Log in with your username or create an <a href="signup.php">account</a>.</p>
						</div>
					</div>
					<div class="row">
						<div class="col-md-4 col-md-offset-4 ">
						<form action="login.php" method="post">
							<div id="loginWrapper">
								<label>
									<input type="text" class="inputText" id="username" name="username" placeholder="Username">
									<span><i class="fa fa-male fa-lg"></i></span>
								</label>
								<label>
									<input type="password" class="inputText" id="password" name="password" placeholder="Password">
									<span><i class="fa fa-lock fa-lg"></i></span>
								</label>
								<label id="rememberMe">
									<input type="checkbox">Stay signed in?
								</label>
								<input type="submit" class="submit" value="Login">
							</div>
							</form>
						</div>
					</div>


				</div>
			</div>
		</div>
		';


include "footer.php";