<?php
/**
 * Created by JetBrains PhpStorm.
 * User: microsoftLT
 * Date: 5/12/14
 * Time: 8:48 PM
 * To change this template use File | Settings | File Templates.
 */
include "RedirectNotSession.php";
$filename = 'Test.txt'; // of course find the exact filename....
header('Pragma: public');
header('Expires: 0');
header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
header('Cache-Control: private', false); // required for certain browsers
header('Content-Type: application/pdf');

header('Content-Disposition: attachment; filename="'. basename($filename) . '";');
header('Content-Transfer-Encoding: binary');
header('Content-Length: ' . filesize($filename));

readfile($filename);

exit;