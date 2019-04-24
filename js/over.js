
//CLASSE DO GAME OVER
function Over(contexto, game){
	this.ctx = contexto;
	this.game = game;
	
	this.figureOver = imgGameOver;

}

//MÉTODOS DO GAME OVER
Over.prototype = {

	desenhar: function(){
		console.log("ESTA NA FASE CORRENTE ATUAL: ", this.game.faseCurrent);

		//VICTORY
		if(this.game.vitoria){ 
			this.ctx.fillStyle = "rgba(0,0,255,0.8)";
			this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
		
			this.ctx.save();
			//Titulo
			this.ctx.shadowOffsetX = 15;
			this.ctx.shadowOffsetY = 15;
			this.ctx.shadowBlur = 4;
			this.ctx.shadowColor = "rgba(0, 0, 100, 0.7)";
			this.ctx.fillStyle = "#00F";


			this.ctx.font = "100px Serif";
			this.ctx.fillStyle = color = "rgba(255, 255, 255, 1)";
			this.ctx.fillText("PARABÉNS", 110, 100);
			this.ctx.fillText("VITÓRIA", 150, 200);

			this.ctx.font = "20px Serif";
			this.ctx.fillText("FASE "+(this.game.faseCurrent - 1)+ " CONCLUÍDA  ", 270, 280);

			this.ctx.fillStyle = color = "rgba(255, 0, 0, 1)";
			this.ctx.font = "bold 30px Serif";
			this.ctx.fillText("CLIQUE PARA AVANÇAR A PRÓXIMA FASE "+this.game.faseCurrent, 40, 340);
			this.ctx.restore();

			this.jogando = false;
			//console.log("VICTORY: ", this.jogando);
			return;
		}

		//GAME OVER
		if(this.game.perdeu){
			//DESENHAR A IMAGEM
			this.ctx.drawImage(this.figureOver, 0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
			return;
		}

	},


	atualizar: function(){
		if(posX > 100 && posX < this.ctx.canvas.width - 100 && posY > 100 && posY < this.ctx.canvas.height){
			posX = 0;
			posY = 0;
			if(this.game.perdeu){
				this.game.perdeu = false;
				console.log("PERDEU CARREGADA A FASE CORRENTE: ", this.game.faseCurrent);
				this.game.carregar(this.game.faseCurrent);
				return;
			}
			if(this.game.vitoria){
				this.game.vitoria = false;
				//this.game.faseCurrent = this.game.faseCurrent + 1;    //2
				this.game.carregar(this.game.faseCurrent);
				console.log("FASE CORRENTE: ", this.game.faseCurrent);
				return;
			}
		}
	}

}




/*

47 33691665
Technicolor-TD5137-ED527632412201



DSL APAGADA/FIXO MUDO/RECUSOU A FAZER TESTES INTERNOS/
CONTATOS:  31 991460228 ou 985221408 /   




EVENTO
21 34482585

21985148616


2019-007078 Aberto - 08/02/2019 08:13:00 - RJRCAR_-EHI101 Interrompido  
Existe um evento para o terminal: 21 34482585 Evento: 20190273124 Aberto Em: 06/02/2019 21:59 Aberto Pela Matricula: E82781 Aberto Por: O M PLATAFORMAS I Tipo de Evento: EVENTO PARA LOCAL ESTACAO / EVENTO PARA LOCAL ESTACAO Promessa: 07/02/2019 23:58 Impacto no Cliente: Causa: EQUIPAMENTO EM FALHA Area: CX Observação: BA200217240 



*/



