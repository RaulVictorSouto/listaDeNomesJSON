$(document).ready(() => {
    $("#btnInserir").click(() => {
        $.ajax({
            url: "pagina.php",
            type: "POST",
            data: {
                acao: "inserir",
                nome: $("#nome").val()
            },
            success: (resultado) => {
                alert("Sucesso");
            }
        });
    });

    $("#btnMostrar").click(() => {
        $.ajax({
            url: "pagina.php",
            type: "POST",
            data: {
                acao: "mostrar"
            },
            success: (resultado) => {
                nomes = JSON.parse(resultado);
                var lista = "<ol>";
                for (i = 0; i < nomes.length; i++) {
                    lista += "<li>" + nomes[i] + "</li>";
                }
                lista += "</ol>";
                $("#saida").html(lista); 
            }
        });
    });
});
