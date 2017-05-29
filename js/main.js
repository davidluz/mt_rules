/*Este arquivo deve ser utilizado para desenvolver as views específicas*/
var estimulos = [];
var respostas = [];
var contingency = [];
var tentativas = 0;
var grupo = 99;
var fase = 1;
var dados =[];
var pontos = 0;
var nomeDoSujeito = "sem nome";
var resposta = 'vazia';

$(document).ready(function(){

$("#iniciar-teste").click(function(){
	$("#tela0").hide();
	$("#tela3").show();
tentativas = 1;
grupo = parseInt($("#grupo").val());
nomeDoSujeito = $("#nomeDoSujeito").val();

});

$("#comp1").click(function(e){
  registraTentativa(e.target.id);
  tentativa();
});

$("#comp2").click(function(e){
  registraTentativa(e.target.id);
  tentativa();
});

$("#comp3").click(function(e){
  registraTentativa(e.target.id);
  tentativa();
});




estimulos[1] = {id:1,src:'imgs/f1c1.jpg',forma:1,cor:1,position: 'none'};
estimulos[2] = {id:2,src:'imgs/f1c2.jpg',forma:1,cor:2,position: 'none' };
estimulos[3] = {id:3,src:'imgs/f1c3.jpg',forma:1,cor:3,position: 'none'};
estimulos[4] = {id:4,src:'imgs/f1c4.jpg',forma:1,cor:4,position: 'none'};

estimulos[5] = {id:5,src:'imgs/f2c1.jpg',forma:2,cor:1,position: 'none'};
estimulos[6] = {id:6,src:'imgs/f2c2.jpg',forma:2,cor:2,position: 'none'};
estimulos[7] = {id:7,src:'imgs/f2c3.jpg',forma:2,cor:3,position: 'none'};
estimulos[8] = {id:8,src:'imgs/f2c4.jpg',forma:2,cor:4,position: 'none'};

estimulos[9] =  {id:9,src:'imgs/f3c1.jpg',forma:3,cor:1,position: 'none'};
estimulos[10] = {id:10,src:'imgs/f3c2.jpg',forma:3,cor:2,position: 'none'};
estimulos[11] = {id:11,src:'imgs/f3c3.jpg',forma:3,cor:3,position: 'none'};
estimulos[12] = {id:12,src:'imgs/f3c4.jpg',forma:3,cor:4,position: 'none'};

estimulos[13] = {id:13,src:'imgs/f4c1.jpg',forma:4,cor:1,position: 'none'};
estimulos[14] = {id:14,src:'imgs/f4c2.jpg',forma:4,cor:2,position: 'none'};
estimulos[15] = {id:15,src:'imgs/f4c3.jpg',forma:4,cor:3,position: 'none'};
estimulos[16] = {id:16,src:'imgs/f4c4.jpg',forma:4,cor:4,position: 'none'};

estimulos[17] = {id:17,src:'imgs/f5c1.jpg',forma:5,cor:1,position: 'none'};
estimulos[18] = {id:18,src:'imgs/f5c2.jpg',forma:5,cor:2,position: 'none'};
estimulos[19] = {id:19,src:'imgs/f5c3.jpg',forma:5,cor:3,position: 'none'};
estimulos[20] = {id:20,src:'imgs/f5c4.jpg',forma:5,cor:4,position: 'none'};

var grupoFormas1 =[];
var grupoFormas2 =[];
var grupoFormas3 =[];
var grupoFormas4 =[];
var grupoFormas5 =[];
var grupoCores1 =[];
var grupoCores2 =[];
var grupoCores3 =[];
var grupoCores4 =[];
var grupoDiferentesModelo=[];

function agrupaFormas(valor){

if(valor.forma==1){
  grupoFormas1.push(valor);
}
if(valor.forma==2){
  grupoFormas2.push(valor);
}
if(valor.forma==3){
  grupoFormas3.push(valor);
}
if(valor.forma==4){
  grupoFormas4.push(valor);
}
if(valor.forma==5){
  grupoFormas5.push(valor);
}
}

function agrupaCores(valor){
if(valor.cor==1){
 grupoCores1.push(valor);
}
if(valor.cor==2){
  grupoCores2.push(valor);
}
if(valor.cor==3){
  grupoCores3.push(valor);
}
if(valor.cor==4){
  grupoCores4.push(valor);
}
}

estimulos.forEach(agrupaFormas);
estimulos.forEach(agrupaCores);

var estimuloModelo;
var estimuloComparacao1;
var estimuloComparacao2;
var estimuloComparacao3;

function tentativa(){
tentativas = tentativas+1;

   $("#pontos").html(pontos);
    // Lembrar de manter a lógica da contingencia - ja vem dada no objeto  
    contingency = ContingencyGenerator('specificRange',19);
     estimuloModelo = estimulos[contingency[0]];
    //Igual em forma e em cor, já garantido pelo gerador de contingências
     estimuloComparacao1 = estimulos[contingency[0]];


    //Igual e forma ou cor
     estimuloComparacao2 = estimulos[contingency[2]];
    var tempstring = eval('grupoFormas' + estimulos[contingency[0]].forma);
    var tempstring2 = eval('grupoCores' + estimulos[contingency[0]].cor);
    

    var tempRandom1 = Math.floor(Math.random() *2)+1;
    
    //igual em forma
    if (tempRandom1==1){ 
    var rand = tempstring[Math.floor(Math.random() * eval(tempstring).length)];
    
    while(rand.id==estimulos[contingency[0]].id){
    rand = tempstring[Math.floor(Math.random() * eval(tempstring).length)];
    }
     estimuloComparacao2 = rand;
    }
   
   
        
   //Igual em cor
    if (tempRandom1==2){
         var rand = tempstring2[Math.floor(Math.random() * eval(tempstring2).length)];
    
    while(rand.id==estimulos[contingency[0]].id){
    rand = tempstring[Math.floor(Math.random() * eval(tempstring).length)];
    }
     estimuloComparacao2 = rand;
      
    }



  
    //Diferente em forma e cor
      estimuloComparacao3 = estimulos[contingency[3]];
   
    while (estimulos[contingency[0]].forma==estimuloComparacao3.forma||
           estimulos[contingency[0]].cor==estimuloComparacao3.cor)
       {
        var lastTemp = Math.floor(Math.random() *18)+1;
        estimuloComparacao3 = estimulos[lastTemp];
        }
   
     

 
   // Regras específicas software Mare - encapsular depoisss - muito importante para evitar trabalhos futuros

$("#model").attr('src', estimuloModelo.src);
$("#comp1").attr('src', estimuloComparacao1.src);
$("#comp2").attr('src', estimuloComparacao2.src);
$("#comp3").attr('src', estimuloComparacao3.src);
}


tentativa();


/* Abaixo as regras dos diferentes arranjos a depender do grupo*/



////*Grupo 1 regras*///
if(grupo==1){



}

function registraTentativa(elementoClicadoID){
dados.push({tentativas:tentativas,
            fase:fase,
            resposta,resposta});

}




$("#resultado").click(function(){


});

function salvarResultado(){
  var tempName = "Resultado-" + nomeDoSujeito;
  for(i=0; i<dados.length; i++){
    console.log(i,dados.length);
    var tentativas = dados[i].tentativas;
    var fase = dados[i].fase;
    var resposta = dados[i].resposta;
    var modeloCor = dados[i].modeloCor;
    var modeloForma = dados[i].modeloForma;
    var comp1Forma = dados[i].comp1Forma;
    var comp1Cor = dados[i].comp1Cor
    var comp1Posicao = dados[i].comp1Posicao ;
    $('.table2excel tbody').after('<tr><td>'+tentativas+'</td><td>'+fase+'</td><td>'+resposta+'</td></tr>');

}
console.log(dados[0]);
  $(".table2excel").table2excel({
         /*exclude: ".noExl",*/
          name: "Excel Document Name",
          filename: tempName,
          fileext: ".xls",
          exclude_img: true,
          exclude_links: true,
          exclude_inputs: true

});

}


// defining flags
var isCtrl = false;
var isShift = false;
// helpful function that outputs to the container
function log(str) {
  $("#container").html($("#container").html() + str + "");
};
// the magic :)
$(document).ready(function() {
 
  
  // action on key up
  $(document).keyup(function(e) {
    if(e.which == 17) {
      isCtrl = false;
    }
    if(e.which == 16) {
      isShift = false;
    }
  });
  // action on key down
  $(document).keydown(function(e) {
    if(e.which == 17) {
      isCtrl = true; 
    }
    if(e.which == 16) {
      isShift = true; 
    }
    if(e.which == 83 && isCtrl && isShift ) { 
   salvarResultado();
    } 
  });
  
});





});
















