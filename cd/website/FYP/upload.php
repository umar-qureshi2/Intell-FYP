<?php
  $filename="resulty.txt";
  $fileData=file_get_contents('php://input');
  $fhandle=fopen($filename, 'wb');
  fwrite($fhandle, $fileData);
  fclose($fhandle);
  echo("Done uploading");
header("Location: FileGeneratedEvent.php");
?>