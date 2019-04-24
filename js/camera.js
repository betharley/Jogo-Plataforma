
//CLASSE DA CAMERA
function Camera(contexto, largura, altura){
	this.ctx = contexto;
	this.largura = largura;
	this.altura = altura;

	this.x = 0;
	this.y = 0;
	this.width = this.ctx.canvas.width;
	this.height = this.ctx.canvas.height;

}

//MÉTODOS DA CAMERA
Camera.prototype = {

	limiteX: function(){
		return this.x + (this.width * 0.25);
	},

	limiteY: function(){
		return this.y + (this.height * 0.25);
	},

	limiteWidth: function(){
		return this.x + (this.width * 0.75);
	},

	limiteHeight: function(){
		return this.y + (this.height * 0.75);
	},


	//ATUALIZA A CAMERA
	atualizar: function(heroi){
		if(heroi.x < this.limiteX() ){
			this.x = heroi.x - (this.width * 0.25);
		}
		if(heroi.y < this.limiteY){
			this.y = heroi.y - (this.height * 0.25);
		}
		if(heroi.x + heroi.width > this.limiteWidth() ){
			this.x = heroi.x + heroi.width - (this.width * 0.75);
		}

		if(heroi.y + heroi.height > this.limiteHeight() ){
			this.y = heroi.y + heroi.height - (this.height * 0.75);			
		}

		//LIMITES GLOBAIS DO JOGO
		if(this.x < 0){
			this.x = 0;
		}
		if(this.y < 0){
			this.y = 0;
		}
		if(heroi.x > this.largura - this.width){
			//this.x = this.largura - this.width;
		}
		if(this.y + this.height > this.altura){
			//this.y = this.altura - this.height;
		}
		this.x = Math.max(0, Math.min(this.largura - this.width, this.x) );
		this.y = Math.max(0, Math.min(this.altura - this.height, this.y) );

		if(heroi.x + heroi.width > this.largura - this.width * 0.75){
			//this.x = this.largura - this.width;
		}
		//console.log("width: " + this.width + " LARGURA " + this.largura );
	},

}













