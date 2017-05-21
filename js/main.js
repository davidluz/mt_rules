/*Este arquivo deve ser utilizado para desenvolver as views específicas*/
var estimulos = [];
var respostas = [];
var contingency = [];
$(document).ready(function() {

$("#iniciar-teste").click(function(){
	console.log('iniciou');
	$("#tela0").hide();
	$("#tela3").show();

});


estimulos[1] = {id:1,src:'imgs/f1c1.jpg',forma:1,cor:1};
estimulos[2] = {id:2,src:'imgs/f1c2.jpg',forma:1,cor:2};
estimulos[3] = {id:3,src:'imgs/f1c3.jpg',forma:1,cor:3};
estimulos[4] = {id:4,src:'imgs/f1c4.jpg',forma:1,cor:4};

estimulos[5] = {id:5,src:'imgs/f2c1.jpg',forma:2,cor:1};
estimulos[6] = {id:6,src:'imgs/f2c2.jpg',forma:2,cor:2};
estimulos[7] = {id:7,src:'imgs/f2c3.jpg',forma:2,cor:3};
estimulos[8] = {id:8,src:'imgs/f2c4.jpg',forma:2,cor:4};

estimulos[9] = {id:9,src:'imgs/f3c1.jpg',forma:3,cor:1};
estimulos[10] = {id:10,src:'imgs/f3c2.jpg',forma:3,cor:2};
estimulos[11] = {id:11,src:'imgs/f3c3.jpg',forma:3,cor:3};
estimulos[12] = {id:12,src:'imgs/f3c4.jpg',forma:3,cor:4};

estimulos[13] = {id:13,src:'imgs/f4c1.jpg',forma:4,cor:1};
estimulos[14] = {id:14,src:'imgs/f4c2.jpg',forma:4,cor:2};
estimulos[15] = {id:15,src:'imgs/f4c3.jpg',forma:4,cor:3};
estimulos[16] = {id:16,src:'imgs/f4c4.jpg',forma:4,cor:4};

estimulos[17] = {id:17,src:'imgs/f5c1.jpg',forma:5,cor:1};
estimulos[18] = {id:18,src:'imgs/f5c2.jpg',forma:5,cor:2};
estimulos[19] = {id:19,src:'imgs/f5c3.jpg',forma:5,cor:3};
estimulos[20] = {id:20,src:'imgs/f5c4.jpg',forma:5,cor:4};


contingency = ContingencyGenerator('specificRange',19);
    

	$("#model").attr('src', estimulos[contingency[0]].src);
	$("#comp1").attr('src', estimulos[contingency[1]].src);
	$("#comp2").attr('src', estimulos[contingency[2]].src);
	$("#comp3").attr('src', estimulos[contingency[3]].src);
	

$('#comp1').click(function(e) {
	registraContingencia();
	executarResposta();
});

$('#comp2').click(function(e) {
	registraContingencia();
	executarResposta();
});

$('#comp3').click(function(e) {
	registraContingencia();
	executarResposta();
});





});

function registraContingencia(){
	
	respostas.push(contingency);

}


function executarResposta(){

	 contingency = ContingencyGenerator('specificRange',19);
    

	$("#model").attr('src', estimulos[contingency[0]].src);
	$("#comp1").attr('src', estimulos[contingency[1]].src);
	$("#comp2").attr('src', estimulos[contingency[2]].src);
	$("#comp3").attr('src', estimulos[contingency[3]].src);
	console.log(respostas);


}











