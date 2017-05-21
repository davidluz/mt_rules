//CONTEUÚDO EXCLUSIVO MARE

/*******************MODELO DINÂMICO /*******************/





/*******************VIEW/*******************/

var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'tela3', { preload: preload, create: create, update:update });


function preload () {
    game.load.image('s0', 'imgs/f1c1.jpg');
    game.load.image('s1', 'imgs/f1c1.jpg');
    game.load.image('s2', 'imgs/f1c1.jpg');
    game.load.image('s3', 'imgs/f1c1.jpg');
    game.load.image('s4', 'imgs/f1c1.jpg');
    game.load.image('s5', 'imgs/f1c1.jpg');
    game.load.image('s6', 'imgs/f1c1.jpg');
    game.load.image('s7', 'imgs/f1c1.jpg');
    game.load.image('s8', 'imgs/f1c1.jpg');
    game.load.image('s9', 'imgs/f1c1.jpg');
    game.load.image('s10', 'imgs/f1c1.jpg');
    game.load.image('s11', 'imgs/f1c1.jpg');
    game.load.image('s12', 'imgs/f1c1.jpg');
    game.load.image('s13', 'imgs/f1c1.jpg');
    game.load.image('s14', 'imgs/f1c1.jpg');
    game.load.image('s15', 'imgs/f1c1.jpg');
    game.load.image('s16', 'imgs/f1c1.jpg');
    game.load.image('s17', 'imgs/f1c1.jpg');
    game.load.image('s18', 'imgs/f1c1.jpg');
    game.load.image('s19', 'imgs/f1c1.jpg');
}

function create() {
     game.stage.backgroundColor = "#fff";

    // 1. Gera 20 estímulos
	var estimulos = stimulusGenerator(20);

    // 2. Aplica função que define como cada estímulo vai ser - 20 estímulos
	for (i=0; i<=19; i++){
	var imgTemp = 's'+i; 	
	estimulos[i].sprite = game.add.sprite(game.world.centerX, game.world.centerY, imgTemp);
	estimulos[i].sprite.anchor.set(0.5);
	estimulos[i].sprite.inputEnabled = true;
	estimulos[i].sprite.events.onInputDown.add(listener, this);
    }

var contingency = ContingencyGenerator('default',3);
console.log(contingency[4]);


}

function update(){

}

function listener () {

    console.log("deu certo");


}



