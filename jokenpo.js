function jogar(){
    if(document.getElementById("pedra").checked == false
    && document.getElementById("papel").checked == false
    && document.getElementById("tesoura").checked == false
    )
    alert("selecione uma funçao")
}
else{
   //Logica principal
   
    var sorteio = Math.floor(math.random()* 3);
   switch(sorteio){
    case 0:
        document.getElementById('pc').scr ="pcpedra.png";
        break;
   
        case 1:
            document.getElementById('pc').scr ="pcpapel.png";
            break;

            case 2:
                document.getElementById('pc').scr ="pctesoura.png";
                break;
   }
            }
  //verifica o vencedor ou declarao empate
    
if((document.getElementById("pedra").checked == true && sorteio == 0)
   ||(document.getElementById("papel") == true && sorteio == 1)
   ||(document.getElementById("tesoura") == true && sorteio == 2)

  )
 {
   document.getElementById("placar").innerHTML = "Empate";
}

else if((document.getElementById("pedra").checked == true && sorteio == 2)
   ||(document.getElementById("papel") == true && sorteio == 1)
   ||(document.getElementById("tesoura") == true && sorteio == 0)
){

    document.getElementById('placar').innerHTML = "Voce venceu!"

}
