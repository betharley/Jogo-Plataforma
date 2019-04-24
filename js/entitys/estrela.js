
//CLASSE DA ESTRELA
function Estrela(contexto, x, y){
	this.ctx = contexto;
	this.figure = imgEstrela;

	this.x = x;
	this.y = y;
	this.width = 30;
	this.height = 30;
	this.raio = 15;
	this.color = "rgba(255,255,0,0.2)";	 //"#0F0";

	this.srcX = 0;
	this.srcY = 0;
	this.srcWidth = 40;	 // 340 X 40
	this.srcHeight = 40;	// 340 / 9 == 40  X  40

	this.visible = true;
	this.anima = 0;
	this.contador = Math.floor(Math.random() * 4) + 5;		 //5;
	this.tempAnima = this.contador * 8; 				//Math.floor( Math.random() * 20) + 40;

}
//METODO DA MOEDAS
Estrela.prototype = {

	desenhar: function(){

		if(this.visible){

			this.ctx.drawImage(
				this.figure,
				this.srcX, this.srcY, this.srcWidth, this.srcHeight,
				this.x, this.y, this.width, this.height
			);

			this.ctx.fillStyle = this.color;
			this.ctx.beginPath();
			this.ctx.arc(this.x+this.raio, this.y+this.raio, this.raio, 0, Math.PI*2);
			this.ctx.fill();
			this.ctx.closePath();


			//this.atualizar();
		}
		//console.log("MOEDAS");
	},

	atualizar: function(){
		this.animacao();	
	},

	animacao: function(){
		this.anima++;

		if(this.anima >= this.tempAnima){
			this.srcX = 0;
			this.anima = 0;
		}

		if(this.anima % this.contador == 0){
			this.srcX = this.srcX + this.srcWidth;
		}

	},
}









/*





*/