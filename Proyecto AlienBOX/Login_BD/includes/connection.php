
<?php

require_once("constants.php");

/*class connection extends PDO
{
    protected $pdo; // atributo de la clase, que contiene la conexion a la base de datos.

    public function getConexion()
    {
        return $this->pdo;
    }// Fin de public function getConexion()

    public function __construct()
    {*/
        try {
        $connection= new PDO('mysql:host='.DB_HOST.';dbname='.DB_NAME, DB_USER, DB_PASS);
        	//$this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } // Fin de try
          catch(Exception $e)
        	{
            die($e->getMessage());
        	}//Fin de catch(Exception $e)

    //}//Fin de public function __construct()
//}// Fin de class connection extends PDO
?>
