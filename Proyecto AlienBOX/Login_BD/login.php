<?php
require_once("includes/connection.php");
include("includes/header.php");
session_start();

if(isset($_POST["login"])){

if(!empty($_POST['username']) && !empty($_POST['password'])) {
    $username=$_POST['username'];
    $password=$_POST['password'];

    $query = $connection->prepare("SELECT * FROM usuarios WHERE USERNAME=:username");
    $query->bindParam("username", $username, PDO::PARAM_STR);
    $query->execute();

    $result = $query->fetch(PDO::FETCH_ASSOC);

    if (!$result) {
          echo '<p class="error">La combinación del usuario y la contraseña son inválidos!</p>';
      } else {
              if (password_verify($password, $result['password'])) {
                $_SESSION['session_username']=$username;
                /* Redirect browser */
                header("Location: ../index.html");
                exit();
              }// Cierre de if (password_verify($password, $result['PASSWORD']))
              else {
                   $message =  "Nombre de usuario ó contraseña invalida!";
                 }// Fin del Else
            } //Fin del Else
  }// FIN del if(!empty($_POST['username']) && !empty($_POST['password']))
  else {
        $message = "Todos los campos son requeridos!";
       }
}// FIN del if(isset($_POST["login"]))

?>
    <div class="container mlogin">
            <div id="login">
    <h1>Autenticación de Usuario</h1>
<form name="loginform" id="loginform" action="" method="POST">
    <p>
        <label for="user_login">Nombre De Usuario<br />
        <input type="text" name="username" id="username" class="input" value="" size="20" /></label>
    </p>
    <p>
        <label for="user_pass">Contraseña<br />
        <input type="password" name="password" id="password" class="input" value="" size="20" /></label>
    </p>
        <p class="submit">
        <input type="submit" name="login" class="button" value="Entrar" />
    </p>
        <p class="regtext">No estas registrado? <a href="register.php" >Registrate Aquí</a>!</p>
</form>

    </div>

    </div>

	<?php include("includes/footer.php"); ?>

	<?php if (!empty($message)) {echo "<p class=\"error\">" . "MESSAGE: ". $message . "</p>";} ?>
