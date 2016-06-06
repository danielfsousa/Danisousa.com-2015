$(function () {

    var $form = $("form");
    var $nome = $form.find("input[type=text]");
    var $email = $form.find("input[type=email]");
    var $mensagem = $form.find("textarea");

    $form.on("submit", function (e) {
        if ($nome.val() == "") {
            e.preventDefault();
            alert("Por favor, digite um nome.");
            $nome.focus();
        }

        if ($email.val() == "") {
            e.preventDefault();
            alert("Por favor, digite um email válido.");
            $email.focus();
        }

        if ($mensagem.val() == "") {
            e.preventDefault();
            alert("Por favor, digite uma mensagem.");
            $mensagem.focus();
        }

    });

});