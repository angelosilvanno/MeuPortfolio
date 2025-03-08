<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Coleta os dados do formulário
  $nome = strip_tags(trim($_POST["name"]));
  $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
  $mensagem = strip_tags(trim($_POST["message"]));

  // Validação dos dados
  if (empty($nome) || empty($mensagem) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    // Define um código de resposta ruim e redireciona de volta para o formulário.
    http_response_code(400);
    echo "Por favor, preencha todos os campos e insira um e-mail válido.";
    exit;
  }

  // Configura o destinatário do e-mail
  $destinatario = "angeloestudante1@gmail.com"; // Substitua pelo seu endereço de e-mail
  $assunto = "Novo contato do formulário do portfólio";

  // Cria o corpo do e-mail
  $corpo_email = "Nome: $nome\n";
  $corpo_email .= "Email: $email\n\n";
  $corpo_email .= "Mensagem:\n$mensagem\n";

  // Define os cabeçalhos do e-mail
  $headers = "De: $nome <$email>\r\n";
  $headers .= "Responder-Para: $email\r\n";

  // Envia o e-mail
  if (mail($destinatario, $assunto, $corpo_email, $headers)) {
    // Define um código de resposta 200 OK e redireciona de volta para o formulário com uma mensagem de sucesso.
    http_response_code(200);
    echo "Obrigado! Sua mensagem foi enviada.";
  } else {
    // Define um código de resposta 500 Internal Server Error.
    http_response_code(500);
    echo "Oops! Algo deu errado e não pudemos enviar sua mensagem.";
  }

} else {
  // Não é uma solicitação POST, então define um código de resposta 403 Forbidden.
  http_response_code(403);
  echo "Houve um problema com seu envio, tente novamente.";
}
?>