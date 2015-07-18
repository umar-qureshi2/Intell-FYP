<?php
/**
 * Created by JetBrains PhpStorm.
 * User: microsoftLT
 * Date: 4/9/14
 * Time: 8:59 AM
 * To change this template use File | Settings | File Templates.
 */
include "RedirectNotSession.php";
include "dbconnect.php";
if(isset($_POST['start']) && isset($_POST['stop']) && isset($_POST['step']) && isset($_POST['benchmark']) && isset($_SESSION['userid']))
{
    $resultid = SubmitTest($_SESSION['userid']);
    if(isset($resultid))
    {
        //echo $resultid;
        $output = $resultid.'$'.'gtx-770$'.$_POST['benchmark'].'$'.$_POST['start']."$".$_POST['stop']."$".$_POST['step']."$";
        exec("java -jar Client.jar " . $output);
        //exec("java -jar C:/wamp/www/FYP/INTELLClient.jar", $output);
        header("location: confirm.php");
    }

}
include "header.php";


echo '
<div id="contentWrapper">
			<div id="">
				<div class="container">
					<!-- #Features -->
					<div class="" style="margin: 20px;padding: 20px;">
					    <form action="submittest.php" method="post">
                            <div>
                                <select  name="benchmark">
                                    <option value="mmm">Matrix Matrix Multiplication Kernel - Arguments</option>
                                    <option value="mvm">Matrix Vector Multiplication Kernel - Arguments</option>
                                </select>
                            </div>

					         <label>
									<input type="text" name="start" required="required" class="inputText" id="start" placeholder="start">
									<span><i class="fa fa-male fa-lg"></i></span>
								</label>
								<label>
									<input type="text" name="stop" required="required" class="inputText" id="stop" placeholder="stop">
									<span><i class="fa fa-male fa-lg"></i></span>
								</label>
								<label>
									<input type="text" name="step" required="required" class="inputText" id="step" placeholder="step">
									<span><i class="fa fa-male fa-lg"></i></span>
								</label>
								<input value="Submit Data" type="submit" class="submit" />
					    </form>
					</div>
					<!-- /#Sign Up -->
				</div>
			</div>
			<br>
			<br>
			<br>
		</div>
		';
include "footer.php";