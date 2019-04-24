
//CLASSE MENU
function Menu(contexto, tecla, game){
	this.ctx = contexto;
	this.teclas = tecla;
	this.game = game;
	this.figure = imgCenarioMenu;
	this.x = 0;
	this.y = 0;

	this.largura = this.ctx.canvas.width;
	this.altura = this.ctx.canvas.height;
	this.opcaoCurrent = 0;

	this.title = "My Game";
	this.opcoes = ["Start", "Fases", "Opções", "Exit"];
	
	this.cima = true;
	this.baixo = true;	

}

//MÉTODO DO MENU
Menu.prototype = {

	desenhar: function(){
		//Desenha o fundo
		this.ctx.fillStyle = "#888";
		this.ctx.fillRect(0, 0, this.largura, this.altura);
		this.ctx.drawImage(this.figure, this.x, this.y, this.largura, this.altura);
		
		//Titulo
		this.ctx.fillStyle = "#F00";
		this.ctx.font = "70px Arial";
		this.ctx.fillText(this.title, this.largura/2 - this.ctx.measureText(this.title).width/2, this.altura * 1/5 );		

		//Opções do Menu
		this.ctx.font = "35px Arial";
		for(let i = 0; i < this.opcoes.length; i++){
			let opc = this.opcoes[i];
			this.ctx.fillStyle = "#0F0";
			if(i == this.opcaoCurrent){
				this.ctx.fillStyle = "#FF0";
			}
			this.ctx.fillText(	opc, 
						this.largura/2 - this.ctx.measureText(opc).width/2,
						this.altura / 2 +  i * 40);
		}
	},

	//ATUALIZA O MENU
	atualizar: function(){
		//console.log("MENU Atualizando" );
		this.verificarTecla();
		this.mudarCenario();
	},

	//ALTERAR O CENARIO
	mudarCenario: function(){
		if(this.teclas[13]){
			if(this.opcaoCurrent == 0){	//FASE 1 
				console.log("Fase 1");
				this.opcaoCurrent++;
				this.game.carregarFase(this.opcaoCurrent);
			}
			if(this.opcaoCurrent == 1){ 	// FASE 2
				this.opcaoCurrent++;
				console.log("FASES");
			}
		}
	},

	//MUDA AS OPÇÕES DO MENU 
	verificarTecla: function(){
		if(this.cima && this.teclas.up){
			console.log("Menu Cima: " + this.teclas[38]);
			this.cima = false;
			this.opcaoCurrent--;
			if(this.opcaoCurrent < 0){
				this.opcaoCurrent = opcoes.length - 1;
			}
		}
		if(this.baixo && this.teclas.down){
			console.log("Menu Baixo: " + this.teclas[40]);
			this.baixo = false;
			this.opcaoCurrent++;
			if(this.opcaoCurrent > this.opcoes.length - 1){
				this.opcaoCurrent = 0;
			}
		}
		
		if(this.baixo == false && this.teclas.down == false){
			this.baixo = true;
		}
		if(this.cima == false && this.teclas.up == false){
			this.cima = true;
		}
	},


}


	//document.addEventListener("keydown", function(evento){
	//	console.log("Fase1 - Tecla: " + evento);
	//});


