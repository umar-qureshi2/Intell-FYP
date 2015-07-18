<?php
/**
 * Created by JetBrains PhpStorm.
 * User: microsoftLT
 * Date: 4/9/14
 * Time: 9:56 AM
 * To change this template use File | Settings | File Templates.
 */
session_start();
if(!isset($_SESSION['username']))
{
    echo "
    <br><br><br><br><br><br><br><br><br><br><br><br><strong style='color: red'><center> Please login!</center>";
    echo "<center>Redirecting to Login Page...!</center></strong>";
    echo "<script>setTimeout(function () {
        window.location.href = 'login.php';
    }, 5000);</script><div style='display: none'>";

}