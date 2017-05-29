/*Este arquivo deve ser utilizado para desenvolver as views específicas*/
var estimulos = [];
var respostas = [];
var contingency = [];
var tentativas = 0;

$(document).ready(function(){

$("#iniciar-teste").click(function(){
	$("#tela0").hide();
	$("#tela3").show();
});

$("#comp1").click(function(){
  tentativa();
});

$("#comp2").click(function(){
  tentativa();
});

$("#comp3").click(function(){
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

function tentativa(){
    // Lembrar de manter a lógica da contingencia - ja vem dada no objeto  
    contingency = ContingencyGenerator('specificRange',19);
    var estimuloModelo = estimulos[contingency[0]];
    //Igual em forma e em cor, já garantido pelo gerador de contingências
    var estimuloComparacao1 = estimulos[contingency[0]];


    //Igual e forma ou cor
    var estimuloComparacao2 = estimulos[contingency[2]];
    var tempstring = eval('grupoFormas' + estimulos[contingency[0]].forma);
    var tempstring2 = eval('grupoCores' + estimulos[contingency[0]].cor);
    

    var tempRandom1 = Math.floor(Math.random() *2)+1;
    console.log(tempRandom1);
    //igual em forma
    if (tempRandom1==1){ 
    var rand = tempstring[Math.floor(Math.random() * eval(tempstring).length)];
    
    while(rand.id==estimulos[contingency[0]].id){
    rand = tempstring[Math.floor(Math.random() * eval(tempstring).length)];
    }
    var estimuloComparacao2 = rand;
    }
   
   
        
   //Igual em cor
    if (tempRandom1==2){
         var rand = tempstring2[Math.floor(Math.random() * eval(tempstring2).length)];
    
    while(rand.id==estimulos[contingency[0]].id){
    rand = tempstring[Math.floor(Math.random() * eval(tempstring).length)];
    }
    var estimuloComparacao2 = rand;
      
    }



  
    //Diferente em forma e cor
     var estimuloComparacao3 = estimulos[contingency[3]];
   
    while (estimulos[contingency[0]].forma==estimuloComparacao3.forma||
           estimulos[contingency[0]].cor==estimuloComparacao3.cor)
       {
        var lastTemp = Math.floor(Math.random() *18)+1;
        estimuloComparacao3 = estimulos[lastTemp];
        }
        console.log(estimulos[contingency[0]].forma,estimulos[contingency[3]].forma);
     

 
   // Regras específicas software Mare - encapsular depoisss - muito importante para evitar trabalhos futuros

$("#model").attr('src', estimuloModelo.src);
$("#comp1").attr('src', estimuloComparacao1.src);
$("#comp2").attr('src', estimuloComparacao2.src);
$("#comp3").attr('src', estimuloComparacao3.src);
}


tentativa();


});













