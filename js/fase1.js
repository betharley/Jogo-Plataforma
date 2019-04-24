
//PRIMEIRA FASE
function Fase1(contexto, teclas, game){
	this.ctx = contexto;
	this.teclas = teclas;
	this.game = game;
	this.largura = this.ctx.canvas.width;
	this.altura = this.ctx.canvas.height;

	this.contador = 0;
	this.timeTotal = 60;
	this.time = 10;
	
	this.cenario = [];
	this.mapa;
	this.vetorMapa = [];
	this.width = 70;
	this.height = 40;
	this.moedas = [];

	this.qntBonus = 0;

	this.pausado = false;
	this.jogando = true;

	this.carregarFase();

	this.WordWidth = this.mapa[0].length * this.width;
	this.WordHeight =  this.mapa.length * this.height;

	this.player = new Player(this.ctx, this.teclas, this.WordWidth, this.WordHeight);
	this.camera = new Camera(this.ctx, this.WordWidth, this.WordHeight);
	this.cenario = new Cenario(this.ctx, this.WordWidth, this.WordHeight);

}

//MÉTODOS DA FASE1
Fase1.prototype = {
	//CARREGA A FASE
	carregarFase: function(){
		//console.log("Fase1 CARREGADA ");
		this.mapa = [
			[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0],
			[0,0,3,3,0,2,0,0,0,2,2,2,3,3,0,2,0,0,0,2],
			[3,3,0,2,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0],
			[2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0],
			[0,0,2,0,2,1,2,0,0,0,2,2,2,0,2,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,3,3,3,0],
			[0,0,0,0,3,0,0,2,0,0,0,0,0,0,0,1,2,2,3,3],
			[0,0,0,0,3,2,0,0,0,0,0,0,0,0,0,0,3,3,3,2],
			[1,0,0,3,3,3,3,3,3,3,3,3,3,3,0,0,3,3,3,3],
			[1,4,1,1,1,1,1,1,1,1,1,4,1,1,4,4,1,1,1,1]
		];

		for(let linha in this.mapa){
			for(let coluna in this.mapa[linha]){
				let indice = this.mapa[linha][coluna];
				//console.log("CONSTRUINDO O MAPA");
				let x = coluna * this.width;
				let y = linha * this.height;
				if(indice == 1){
					//let color = "#000";
					let bloco = new Bloco(this.ctx, x, y, this.width, this.height);
					this.mapa[linha][coluna] = bloco;
					this.vetorMapa.push(bloco);
				}else
				if(indice == 2){
					//let color = "#000";
					let bloco = new Bloco(this.ctx, x, y + this.height/2, this.width, this.height/2);
					this.mapa[linha][coluna] = bloco;
					this.vetorMapa.push(bloco);
				}else
				if(indice == 3){
					let moeda = new Moedas(this.ctx, x, y);
					//console.log("MOEDA ZERO: " + moeda.x);
					this.moedas.push(moeda);
				}else
				if(indice == 4){ 
					let lava = new Lava(this.ctx, x, y + this.height/2, this.width, this.height/2);
					//console.log("MOEDA ZERO: " + lava.x);
					this.mapa[linha][coluna] = lava;
					this.vetorMapa.push(lava);
				}
			}
		}
		this.qntBonus = this.moedas.length;
		this.time = this.time + this.qntBonus;
	},

	//DESENHA A FASE
	desenhar: function(){
		//DESENHA O FUNDO DA FASE 1
		this.ctx.fillStyle = "#FFF";
		this.ctx.fillRect(0, 0, this.largura, this.altura);
		this.cenario.desenhar();
		//console.log("Fase1 " + this.ctx);
		
		//SAVE CONTEXTO
		this.ctx.save();
		this.ctx.translate(-this.camera.x, -this.camera.y);

		//DESENHA O MAPA VETOR
		for(let i in this.vetorMapa){
			let bloco = this.vetorMapa[i];
			bloco.desenhar();
			this.verificarColisao(this.player, bloco);
		}

		//DESENHAR AS MOEDAS	
		//console.log("OBJETO MOEDA ZERO: " + this.moedas[0].x );
		for(let i in this.moedas){
			let moeda = this.moedas[i];
			moeda.desenhar();
		}

		//DESENHA O PLAYER
		this.player.desenhar();

		//RETORNA O CONTEXTO
		this.ctx.restore();

	},

	//ATUALIZA
	atualizar: function(){

		//VERIFICA TECLAS PRESSIONADAS
		this.verificarClique();

		//PAUSA A FASE APOS APERTAR ENTER
		if(!this.pausado && this.jogando){
			//CONTA O TEMPO DO JOGO
			//if( this.gameover.countTimer() ){*************
			//	return;
			//}
			//console.log("THIS.GAMEOVER.JOGANDO: " + this.gameover.jogando );

			//console.log("Fase1 Atualizando" );
			//ATUALIZA O PLAYER
			this.player.atualizar();

			//ATUALIZA A POSICAO DA CAMERA EM RELAÇÃO AO PLAYER
			this.camera.atualizar(this.player);
	
			//ATUALIZA AS MOEDAS -- ANIMAÇÃO E COLISÃO	
			//console.log("OBJETO MOEDA ZERO: " + this.moedas[0].x );
			for(let i in this.moedas){
				let moeda = this.moedas[i];
				moeda.atualizar();
				this.colidirMoedas(this.player, moeda);
				if(!moeda.visible){
					this.moedas.splice(i, 1); //this.remover(this.moedas, moeda);
					//console.log("MOEDAS: ", this.moedas.length);
					i--;
					this.qntBonus--;
				}
				//console.log("OBJETO MOEDA ZERO: " + moeda.ctx);
			}
			if(this.moedas.length == 0){
				this.game.vitoria = true;
				//new Fase2();
				this.game.faseCurrent = 2;
				this.game.carregar(0); //CARREGA A SEGUNDA FASE
				return;
			}
		}


		//CONTA E DESENHA O TEMPO DA FASE
		if(!this.pausado){
			this.contador++;
		}
		this.ctx.font = "20px Arial";
		this.ctx.fillStyle = "#00F";
		this.ctx.fillText("Timer: " + this.time, 10, 20);

		if(this.contador > this.timeTotal){
			this.contador = 0;
			this.time--;
			if(this.time < 1){
				//GAME OVER
				this.game.perdeu = true;
				this.game.faseCurrent = 1;
				//console.log("PERDEU: ", this.game.perdeu);//**************
				this.game.carregar(0);
				return;
			}
		}

		//MOSTRA AS MOEDAS
		//this.qntBonus
		this.ctx.font = "20px Serif";
		this.ctx.fillStyle = "#00F";
		this.ctx.fillText("Moedas Restantes: " + this.qntBonus, 10, 50);
	
		this.ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
		this.ctx.fillRect(0, 0, 200, 60);

		//PAUSED
		if(this.pausado){ 
			this.ctx.font = "100px Serif";
			this.ctx.fillStyle = "#F00";
			this.ctx.fillText("PAUSED", 150, 200);
			return;
		}
	},

	remover: function(vetor, objeto){
		//let indice = vetor.indexOf(objeto);
		//vetor.splice(indice, 1);
	},
	
	verificarClique: function(){
		if(posX > 0 && posX < this.ctx.canvas.width - 100 && posY > 0 && posY < this.ctx.canvas.height){
			posX = 0;
			posY = 0;
			if(this.pausado){
				this.jogando = true;
				this.pausado = false;
			}else{
				this.jogando = false;
				this.pausado = true;
			}
		}
	},
	gamePerdeu: function(){
		//GAME OVER
		this.game.perdeu = true;
		this.game.faseCurrent = 1;
		console.log("PERDEU: ", this.game.perdeu);//**************
		this.game.carregar(0);
		return;
	},

	//VERIFICA A COLISÃO ENTRE OS OBJETOS RETANGULOS
	verificarColisao: function(heroi, bloco){
		//console.log("funcção de colisão !!!!!!");
		let distaX = (heroi.x + heroi.width/2) - (bloco.x + bloco.width/2);
		let distaY = (heroi.y + heroi.height/2) - (bloco.y + bloco.height/2);
	
		let somaWidth = heroi.width/2 + bloco.width/2;
		let somaHeight = heroi.height/2 + bloco.height/2;
	
		//Verifica a colisão
		if( Math.abs(distaX) < somaWidth && Math.abs(distaY) < somaHeight ){
	
			let sobreporX = somaWidth - Math.abs(distaX);
			let sobreporY = somaHeight - Math.abs(distaY);

			if(bloco instanceof Lava){//************COLIDE COM A LAVA
				this.gamePerdeu();
				return;		
			}

			if(sobreporX < sobreporY){
				if(distaX < 0){
					//console.log("DIREITA");
					heroi.x = heroi.x - sobreporX;
				}else{
					heroi.x = heroi.x + sobreporX;
					//console.log("ESQUERDA");
				}
			}else{
				if(distaY < 0){
					//console.log("CIMA");
					heroi.y = heroi.y - sobreporY;
					heroi.queda = 0;
					heroi.podeCair = false;
					heroi.podePular = true;
				}else{
					heroi.y = bloco.y + bloco.height;
					//heroi.podePular = true;
					heroi.queda = 0;
					heroi.y = heroi.y + sobreporY;
					//console.log("EMBAIXO");
				}
			}
		}
		//console.log("Não colidiu: " + heroi.x);
	},

	//COLIDE PALYER E MOEDAS
	colidirMoedas: function(heroi, moeda){
		let distaX = (heroi.x + heroi.width/2) - (moeda.x + moeda.width/2);
		let distaY = (heroi.y + heroi.height/2) - (moeda.y + moeda.height/2);
	
		let somaWidth = heroi.width/2 + moeda.width/2;
		let somaHeight = heroi.height/2 + moeda.height/2;
	
		//Verifica a colisão
		if( Math.abs(distaX) < somaWidth && Math.abs(distaY) < somaHeight ){
			moeda.visible = false;
			return true;
			console.log("COLIDIU");
		}
		return false;
	},


	//document.addEventListener("keydown", function(evento){
	//	console.log("Fase1 - Tecla: " + evento);
	//});
}





/*
C:\Users\BC649910\Documents\Engine\index.html


31 33888140
I7JB
S172E47006247
917341344208 --- +++ 8134431345
ED527814506543   -- ping 3134358515
ED527750208374  --- 32 32721483

Cliente: ALEXINALDO FERNANDES DOS SANTOS
CPF: 38015536553 
918311020518 ----- 71 33661848 *****

xingou na linha**********
91982197898  / 91 32723864
Cliente: MARIA DE NAZARE GOMES MIRANDA
CPF: 23655887272

ED527835401223
6533561690 -- *******








21 37788469

21998347984

Número BD: 21893
Zyxel-AMG1302-T15C-S172E33006815
 (Desconectado)  44444444444









DSL APAGADA/MODEM LIGADO / 
RECUSOU A FAZER PROCEDIMENTOS INTERNOS
CONTATOS:  92988487707 / 92994587365




*/