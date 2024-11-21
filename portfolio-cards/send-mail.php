<?php 

$fullname = $_GET["fullname"];
$mail = $_GET["email"];
$message = $_GET["message"];

$mailBody = $fullname . " (" . $mail . ") - " . $message;

mail("matejcervenka@icloud.com", "test", $mailBody);

header("Location: http://" . $_SERVER["HTTP_HOST"]);

// echo(json_encode(array(
//   "fullname" => $fullname,
//   "mail" => $mail,
//   "message" => $message,
//   "url" => $_SERVER["HTTP_HOST"]
// )));