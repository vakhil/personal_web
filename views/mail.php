<?php

$name = $_POST['first_name'];
$email = $_POST['email'];
$phone= $_POST['phone'];
$comment = $_POST['comment'];
$recipient = "vakhil@iitk.ac.in";
$subject = "New message from $name";
$email_headers = "From: $name <$email>";
$email_content = "Name: $name\n";
        $email_content .= "Email: $email\n\n";
$email_content .= "phone number: $phone\n\n";

        $email_content .= "Message:\n$comment\n";

if (mail($recipient, $subject, $email_content, $email_headers)) {
echo "OK";
}
else{

echo "Fuck off";
}
echo(error_get_last());
echo "Kane";
?>
