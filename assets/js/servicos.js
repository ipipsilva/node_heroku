$(document).ready(function() {
    $('#agradecimento').hide();
});

function enviarEmail() {

    var nome = $('#name').val();
    var email = $('#email').val();
    var mensagem = $('#message').val();

    emailjs.send("gmail", "template_Xw0X7Jhu", {"from_name":nome, "from_email":email, "message_html":mensagem})
    .then(function(response) {
       console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
       limpaCamposEmail();
       $('#contato').hide();
       $('#agradecimento').show();
    }, function(err) {
       console.log("FAILED. error=", err);
    });
}

function limpaCamposEmail() {
    $('#name').val('');
    $('#email').val('');
    $('#message').val('');
}
