<?php
parse_str($_SERVER['QUERY_STRING']); 

///tail -f /var/log/apache2/error_log
error_log("here");
error_log($name);

//$email_to = "etayluz@gmail.com,amitcasp@gmail.com";
$email_to = "etayluz@gmail.com";
$email_subject = "New Lead";
error_log("here");
// $name = $_POST['name'];
// $email_from = $_POST['email'];
// $phone = $_POST['phone'];
// $budget = $_POST['budget'];
// $comment = $_POST['comment'];
$email_message = "Name: ".$name."\n\n"."Email: ".$email."\n\n"."\n\n".$phone."\n\n".$budget."\n\n".$comment;
error_log($email_message);
// create email headers
$headers = 'From: '."NewLead@tidalapps.com"."\r\n".
'Reply-To: '."NewLead@tidalapps.com"."\r\n" .
'X-Mailer: PHP/' . phpversion();

// send email
@mail($email_to, $email_subject, $email_message, $headers);
?>