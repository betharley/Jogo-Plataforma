
//CLASSE DO GAME QUE TEM O LOOP
function Game(contexto, teclas){
	//ATRIBUTOS
	this.ctx = contexto;
	this.largura = this.ctx.canvas.width;
	this.altura = this.ctx.canvas.height;

	this.teclas = teclas;
	this.faseCurrent = -1;

	this.vetorSprite = [];
	this.ligado = false;

	this.perdeu = false;
	this.vitoria = false;

}
//MÉTODOS DO GAME
Game.prototype = {

	//LIGAR O LOOP
	ligar: function(){
		this.carregar(this.faseCurrent);
		this.ligado = true;
		this.gameRodando();
	},

	//CARREGAR UMA FASE	
	carregar: function(numeroFase){
		let faseEscolhida; //Guarda o Objeto
		//this.faseCurrent = numeroFase;

		if(numeroFase == -1){
			//faseEscolhida = new Menu(this.ctx, this.teclas, this);
			faseEscolhida = new Menus(this.ctx, this);
		}else
		if(numeroFase == 0){
			faseEscolhida = new Over(this.ctx, this);
		}else
		if(numeroFase == 1){
			faseEscolhida = new Fase1(this.ctx, this.teclas, this);
		}else
		if(numeroFase == 2){
			faseEscolhida = new Fase2(this.ctx, this.teclas, this);
			console.log("FASE 2 INSTANCIADA");
		}else
		if(numeroFase == 3){
			faseEscolhida = new Fase3(this.ctx, this.teclas, this);
			console.log("FASE 3 INSTANCIADA");
		}
		this.vetorSprite[0] = faseEscolhida;
	},

	//DESLIGA O LOOP
	desligar: function(){
		this.ligado = false;
		//console.log("Game PAUSADO--------: " + this.over.pausado);
		//this.desenharEstados();
	},

	//O LOOP DA CLASSE		
	gameRodando: function(){
		if(!this.ligado){
			this.desligar();
			//this.ligado = false;
			return;
		}
		this.limpar();

		this.desenhar();

		this.atualizar();
		
		let roda = this;
		requestAnimationFrame(function(){
			roda.gameRodando();
		});
	},

	//DESENHA OS OBJETOS
	desenhar: function(){
		//Limpar a tela
		this.ctx.clearRect(0, 0, this.ctx.canvas.wdith, this.ctx.canvas.height);

		for(let i in this.vetorSprite){
			let fase = this.vetorSprite[i];
			fase.desenhar();
		}

		this.atualizar();
	},

	//ATUALIZA OS OBJETOS
	atualizar: function(){
		for(let i in this.vetorSprite){
			let fase = this.vetorSprite[i];
			fase.atualizar();
		}
		//console.log("Game Verificando: " + this.teclas.x);
	},

	//LIMPA O CANVAS
	limpar: function(){
		this.ctx.clearRect(0, 0, this.largura, this.altura);
	},

	//REMOVE OS OBJETOS INATIVOS
	remover: function(){

	},

}






//console.log("MENU Verificando: " + this.teclas);
//ZTE-ZXHN H108N V2.5-B0ACD26AB68B
//JHON7134032153

//ZTE-ZXHN H108N V2.5- B0ACD26ADB3B (Online)
/*


FIXO MUDO/SEM VELOX/RECUSOU A FAZER TESTES/
2121970355964 / 21970421809


*/
//console.log("game ok");