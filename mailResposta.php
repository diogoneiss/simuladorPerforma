<?php
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['Telefone'];
header('Content-Type: application/json');
if ($name === ''){
  print json_encode(array('message' => 'Name cannot be empty', 'code' => 0));
  exit();
}
if ($email === ''){
  print json_encode(array('message' => 'Email cannot be empty', 'code' => 0));
  exit();
} else {
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
  print json_encode(array('message' => 'Email format invalid.', 'code' => 0));
  exit();
  }
}
if ($Telefone === ''){
  print json_encode(array('Telefone' => 'Telefone cannot be empty', 'code' => 0));
  exit();
}

$content="De: $name \nEmail: $email \nTelefone: $Telefone";
$recipient = "diogo.oliveiran@gmail.com";
$mailheader = "De: $email \r\n";
mail($recipient, $subject, $content, $mailheader) or die("Error!");
print json_encode(array('message' => 'Email enviado com sucesso!', 'code' => 1));
exit();
?>
