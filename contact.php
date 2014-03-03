<?php

  $email_to = "etayluz@gmail.com";
  $email_subject = "New Contact";
  error_log("here");
  $name = $_POST['name'];
  $email_from = $_POST['email'];
  $phone = $_POST['phone'];
  $budget = $_POST['budget'];
  $comment = $_POST['comment'];
  $email_message = "Name: ".$name."\n\n"."\n\n".$_POST['phone']."\n\n".$_POST['budget'];."\n\n".$_POST['comments'];
  error_log($email_message);
  // create email headers
  $headers = 'From: '.$email_from."\r\n".
  'Reply-To: '.$email_from."\r\n" .
  'X-Mailer: PHP/' . phpversion();

  // send email
  @mail($email_to, $email_subject, $email_message, $headers);
?>