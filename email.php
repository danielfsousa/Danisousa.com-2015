<?php

$nome = isset($_POST['nome']) ? $_POST['nome'] : "";
$email = isset($_POST['email']) ? $_POST['email'] : "";
$mensagem = isset($_POST['mensagem']) ? wordwrap($_POST['mensagem'],70) : "";

$para = "sousa.dfs@gmail.com";
$assunto = "Novo Email - Danisousa.com";
$corpo = "Nome: $nome".PHP_EOL;
$corpo.= "Email: $email".PHP_EOL;
$corpo.= "Mensagem:" . PHP_EOL . $mensagem;
$header = "From: " . $email;

mail($para, $assunto, $corpo, $header);

