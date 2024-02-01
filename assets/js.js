function Medias(){

    const nota1 = Number(document.getElementById('nota1').value)
    const nota2 = Number(document.getElementById('nota2').value)
    const nota3 = Number(document.getElementById('nota3').value)
    const nota4 = Number(document.getElementById('nota4').value)

    const resultado = (nota1 + nota2 + nota3 + nota4)/4
    document.getElementById('media').innerHTML = resultado

    if(resultado >= 6){
        document.getElementById('status').innerHTML = "Aprovado"
    }
    else{
        document.getElementById('status').innerHTML = "Reprovado"
    }
    if(resultado >= 9.5){
        document.getElementById('status').innerHTML = "Aprovado com Louvor"
    }
    if(resultado <= 3.5){
        document.getElementById('status').innerHTML = "Expulso"
    }
    
    

}

