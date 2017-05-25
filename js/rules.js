//Rules Module v1 16.05.07 - Por enquanto regras do Math
 

//****************AJUSTAR PARA CRIAR MODELO ORIENTADO A OBJETOS AQUI SÓ FUNCÕES ESTÁTICAS************//
// Criar um modelo dinâmico que reproduz em qualquer tipo de view (Phaser...Boostrap etc)


// Classe geradora de Matching
function MatchingGenerator(){


}

//Classe geradora de regras de randomização
//Type: tipo da randomização | valores máximo sorteado
function RandomGenerator(type, max){

	if(type=="position"){
		    var numbers = [];
    for(i=1; i<=max; i++){
	numbers.push(i);
	}	

	function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
    };

    return (shuffle(numbers));
	}

	if(type="stimulusNoRepetion"){
    
    var numbers = [];
    for(i=1; i<=max; i++){
	numbers.push(i);
	}	

	function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
    };

    return (shuffle(numbers));

	}

}

// Gerador de Contingência - recebe os estímulos, qual o modelo e qual as regras de uma rodada específica
function ContingencyGenerator(rules,stimulusNumbers,specificRangeInit,specificRangeEnd){

//positions
//a1 a2 a3
//b1 b2 b3
//c1 c2 c3

//Default - Randomizes the model and three comparisons
if(rules=='default'){
	var contingency =  ['model','comparasion1','comparasion2','comparasion3'];
	var stimulus = RandomGenerator('stimulusNoRepetion',stimulusNumbers);
    var positions = RandomGenerator('position',3);
    contingency[0] = stimulus[0];
    contingency[positions[0]] = stimulus[0];
    contingency[positions[1]] = stimulus[1];
    contingency[positions[2]] = stimulus[2];
}

//Default - Only one comparasion is difference
if(rules=='oneDiference'){
	var contingency =  ['model','comparasion1','comparasion2','comparasion3'];
	var stimulus = RandomGenerator('stimulusNoRepetion',stimulusNumbers);
    var positions = RandomGenerator('position',3);
    contingency[0] = stimulus[0];
    contingency[positions[0]] = stimulus[0];
    contingency[positions[1]] = stimulus[0];
    contingency[positions[2]] = stimulus[2];
}
// Select on specific range - Modelo Mare
if(rules=='specificRange'){
	var contingency =  ['model','comparasion1','comparasion2','comparasion3'];
	var stimulus =[];
		for (i=0;  i<=stimulusNumbers; i++){
		stimulus[i] = i+1;
	}

   	var stimulusCut = stimulus.slice(specificRangeInit,specificRangeEnd);
   	
	var stimulusShuffle = shuffle(stimulusCut);
	
    var positions = RandomGenerator('position',3);
    contingency[0] = stimulusCut[0];
    contingency[positions[0]] = stimulusCut[0]; 
    contingency[positions[1]] = stimulusCut[1];
    contingency[positions[2]] = stimulusCut[2];
}



return contingency;

}

function RulesGenerator(){

//Número de comparações, consequência acerto, consequência erro, numero_de_tentativas

}


// Gerador de estímulos
function stimulusGenerator(quantity){
	var quantity = quantity;
	var stimulusArray = [];

	for(i=0; i<=quantity; i++){
		// Definir aqui, todos os tipos de estímulos possíveis
		stimulusArray[i] = {id: 'stimulus'+i, tipo:"mt_empty", model:"mt_empty", color:"mt_empty"};
		//Tipos possíveis v1 : imagem, som, texto, video, html
		// tipo imagem atributos: url,

	}
	return(stimulusArray);

}



// Funções terceiras

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


