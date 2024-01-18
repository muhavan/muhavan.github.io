<?php
/**
 * Requires the "PHP Email Form" library
 * The "PHP Email Form" library is available only in the pro version of the template
 * The library should be uploaded to: vendor/php-email-form/php-email-form.php
 * For more info and help: https://bootstrapmade.com/php-email-form/
 */

// Replace contact@example.com with your real receiving email address
$receiving_email_address = 'muhammad400809@gmail.com';

if (file_exists($php_email_form = '../index.html')) {
    include($php_email_form);
} else {
    die('Unable to load the "PHP Email Form" Library!');
}

$contact = new $php_email_form;
$contact->ajax = true;

// Validate and sanitize input
$contact->to = $receiving_email_address;
$contact->from_name = filter_input(INPUT_POST, 'name');
$contact->from_email = filter_input(INPUT_POST, 'email');
$contact->subject = filter_input(INPUT_POST, 'subject');
$contact->message = filter_input(INPUT_POST, 'message');

// Uncomment below code if you want to use SMTP to send emails. You need to enter your correct SMTP credentials
/*
$contact->smtp = array(
    'host' => 'smtp.gmail.com',
    'username' => 'example@gmail.com',
    'password' => 'example',
    'port' => '587'
);
*/

// Add messages to the email body
$contact->add_message($_POST['name'], 'From');
$contact->add_message($_POST['email'], 'Email');
$contact->add_message($_POST['message'], 'Message', 10);

// Send the email and handle errors
$send_result = $contact->send();

if ($send_result) {
    echo 'Pesan berhasil dikirim';
} else {
    echo 'Error mengirim pesan: ' . $contact->get_errors();
}
?>
