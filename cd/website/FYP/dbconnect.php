<?php
/**
 * Created by umar.
 * User: microsoftLT
 * Date: 4/9/14
 * Time: 5:01 AM
 * To change this template use File | Settings | File Templates.
 */

//create connection

$connection = "";
$connection = mysqli_connect("localhost","root","","userdb");
if(session_id() == '')
session_start();
// Check connection
if (mysqli_connect_errno())
{
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

function SignupUser($username,$password,$name,$mobile,$email,$city,$country)
{
    global $connection;
    $query = "insert into `user` (`UserID`, `Username`, `Password`, `Name`, `Mobile`, `Email`, `City`, `Country`, `Approved`) values (NULL,'".$username."','".$password."','"
    . $name."','"
    .$mobile."','"
    .$email."','"
    .$city."','"
    .$country."','"
    ."approved');";
    echo $query;
    if($connection)
    {
        $result = mysqli_query($connection,$query);
        if($result)
        {
            echo "User $name Signed Up";
            include_once "sms/sms.php";
            $apikey = "20577275006a02eab061";
            $sms = new sendsmsdotpk($apikey);
            if($_POST['mobile'] > "3000000000")
                $sms->sendsms(($_POST['mobile']), "you have signed up with INTELL. Username: ".$_POST['username']."   Password: ".$_POST['password'], 0);
            header("Location: login.php");
        }
    }
}

function Login($username,$password)
{
    global $connection;
    if($connection)
    {
        $query = "select `Username` , `UserID` from `user` where `Username`='".$username."' and  `Password` = '".$password."'";
        echo $query;
        $result = mysqli_query($connection,$query);
        if($result)
        {
            $row = mysqli_fetch_array($result);

            $_SESSION['username'] =  $row['Username'];// . " " . $row['LastName'];
            $_SESSION['userid'] = $row['UserID'];
            return true;
        }
    }
    return false;
}

function SubmitTest($userid)
{
    global $connection;
    if($connection)
    {
        $query = "insert into `result` (`RequestID`, `UserID`) values (NULL,". $userid .")";
        //echo $query;
        $result = mysqli_query($connection,$query);
        if($result)
        {
            //echo $result;
            $query = "select `RequestID` from `result` where `UserID` = ".$userid." order by `RequestID` desc limit 1";
            //echo $query;
            $result = mysqli_query($connection,$query);
            if($result)
            {
                //echo $result;
                $idd = mysqli_fetch_array($result);
                if($idd)
                {
                    //echo $idd;
                    //echo $idd[0];
                    return $idd[0];
                }
            }
        }
    }
    return null;
}

function UpdateResult($resultid,$res)
{
    global $connection;
    if($connection)
    {
        $query = "update `result` set `ResultFile` = '".$res . "' where `RequestID` = ". $resultid;
        $result = mysqli_query($connection,$query);
    }

}

function GetFileData($userid)
{
    global $connection;
    if($connection)
    {
        $query = "select `ResultFile` from `result` where `UserID` = ".$userid ." and `ResultFile` is not null order by `RequestID` desc limit 1";
        //echo $query;
        $result  =mysqli_query($connection,$query);
        //echo $result;
        if($result)
        {

            return $result;
        }
        return null;
    }
    return null;
}

function CloseCon()
{
    global $connection;
    mysqli_close($connection);
}

?>