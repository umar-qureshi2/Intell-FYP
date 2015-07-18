<?php
/**
 * Created by umar.
 * User: microsoftLT
 * Date: 5/9/14
 * Time: 8:08 PM
 * To change this template use File | Settings | File Templates.
 */

include "dbconnect.php";
$myfile = fopen("resulty.txt", "r");
if(! $myfile)return;
$resultid = fgets( $myfile);
$filedata = "";
// Output one line until end-of-file
while(!feof($myfile)) {
    $filedata .= fgets($myfile);
}

UpdateResult($resultid,$filedata);

fclose($myfile);
echo "all done";
?>