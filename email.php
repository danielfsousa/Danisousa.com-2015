<?php

$nome = isset($_POST['nome']) ? $_POST['nome'] : "";
$email = isset($_POST['email']) ? $_POST['email'] : "";
$mensagem = isset($_POST['mensagem']) ? wordwrap($_POST['mensagem'],70) : "";

$para = "sousa.dfs@gmail.com";
$assunto = "Novo Email Danisousa.com";
$corpo = "Nome: $nome<br>";
$corpo.= "Email: $email<br>";
$corpo.= "Mensagem: $mensagem";
$header = "From: " . $email;

mail($para, $assunto, $corpo, $header);

