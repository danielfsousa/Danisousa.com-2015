$(function () {

    var $form = $("form");
    var $nome = $form.find("input[type=text]");
    var $email = $form.find("input[type=email]");
    var $mensagem = $form.find("textarea");
    var $feedback = $("#feedbackForm");

    $form.on("submit", function (e) {
        if ($nome.val() == "") {
            feedbackErro(e, "Por favor, digite um nome.", $nome);
        }

         else if ($email.val() == "") {
            feedbackErro(e, "Por favor, digite um email válido.", $email);
        }

        else if ($mensagem.val() == "") {
            feedbackErro(e, "Por favor, digite uma mensagem.", $mensagem);
        }

        else {

            $.ajax({
                type: "POST",
                url: "email.php",
                data: $(this).serialize(),
                success: feedbackSucesso(e, "Sua mensagem foi enviada com sucesso!")
            });
        }

    });

    function feedbackErro(e, texto, foco) {
        e.preventDefault();
        $feedback.removeClass();
        $feedback.addClass("erro");
        $feedback.text(texto);
        if(foco) {
            foco.focus();
        }
    }

    function feedbackSucesso(e, texto) {
        e.preventDefault();
        $feedback.removeClass();
        $feedback.addClass("sucesso");
        $feedback.text(texto);
    }

});
