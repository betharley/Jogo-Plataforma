
//CLASSE DO GAME OVER
function GameOver(contexto){
	this.ctx = contexto;
	this.figureOver = imgGameOver;

	this.opcaoCurrent = -1;
	this.paused = 0;
	this.victory = 1;
	this.gameover = 2;
	
	this.countTime = 0;
	this.time = 0;
	this.timeTotal = 60;

	this.pausado = false;
	this.jogando = true;
	this.vitoria = false;
	this.over = false;


}

//MÉTODOS DO GAME OVER
GameOver.prototype = {

	desenhar: function(){

		//PAUSED
		if(this.pausado && !this.vitoria && !this.over){	 //this.opcaoCurrent == this.paused && 
			this.ctx.font = "100px Serif";
			this.ctx.fillStyle = "#F00";
			this.ctx.fillText("PAUSED", 150, 200);
			return;
		}

		//VICTORY
		if(this.vitoria){  	//this.opcaoCurrent == this.victory 
			this.ctx.fillStyle = "rgba(0,0,255,0.9)";
			this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
		
			this.ctx.font = "100px Serif";
			this.ctx.fillStyle = color = "rgba(255, 255, 255, 1)";
			this.ctx.fillText("PARABÉNS", 110, 200);
			this.ctx.fillText("VITÓRIA", 150, 300);
			this.jogando = false;
			//console.log("VICTORY: ", this.jogando);
			return;
		}
		//teclado.13

		//GAME OVER
		if(this.over){	//this.opcaoCurrent == this.gameover
			//DESENHAR A IMAGEM
			this.ctx.drawImage(this.figureOver, 0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
			return;
		}

		if(this.jogando || this.pausado){
			//DESENHA O TIMER
			this.ctx.font = "20px Arial";
			this.ctx.fillStyle = "#00F";
			this.ctx.fillText("Timer: " + this.time, 10, 20);
			return;
		}

	},

	mudarPausa: function(valor){
		if(!this.over || !this.vitoria){
			this.pausado = valor;
			this.jogando = !this.pausado;
			//console.log("PAUSADO: ", this.opcaoCurrent);
		}
	},

	countTimer: function(){
		//MOMENTO EM QUE CONTA O TEMPO
		//if(this.opcaoCurrent != this.paused && this.opcaoCurrent != this.victory && this.opcaoCurrent != this.gameover  ){
		if(this.jogando){
			//CONTA O TIMER
			this.countTime++;
			if(this.countTime > this.timeTotal){
				this.time++;
				this.countTime = 0;
			}
			//console.log("CONTANDO O TEMPO: ", this.time);
		}
		if(this.time > 2){
			//this.opcaoCurrent = this.victory;
			//this.vitoria = true; //this.over = true; //this.vitoria = true;
			//this.jogando = false;
			//return true;
		}
	},


	atualizar: function(){

	}

}




/*

47 33691665
Technicolor-TD5137-ED527632412201






*/



