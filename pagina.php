<?php
    session_start();
    $acao = $_POST["acao"];
    if($acao == "inserir"){
        if(!isset($_SESSION["nomes"])){
            $_SESSION["nomes"] = Array();
        }
        $_SESSION["nomes"][] = $_POST["nome"];
    }else if($acao == "mostrar"){
        echo json_encode($_SESSION["nomes"]);
        /*
        $retorno ="<ul>"; 
        foreach($_SESSION["nomes"] as $nomes){
            $retorno = $retorno."<li>$nome</li>";
        }
        $retorno = $retorno."</ul>";
        echo $retorno;
        */
    }
?>