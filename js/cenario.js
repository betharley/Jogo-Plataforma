
//CLASSE CENARIO
function Cenario(contexto, largura, altura){
	this.figure = imgCenario;
	this.figure2 = imgCenario2;
	this.figure3 = imgCenario3;

	this.ctx = contexto;
	this.largura = largura;
	this.altura = altura;

	this.x = 0;
	this.y = 0;
}

//MÉTODO DO CENARIO
Cenario.prototype = {

	desenhar: function(){
		this.ctx.drawImage(this.figure,	this.x, this.y, this.largura, this.altura);
	},

	desenhar2: function(){
		this.ctx.drawImage(this.figure2,this.x, this.y, this.largura, this.altura);
	},

	desenhar3: function(){
		this.ctx.drawImage(this.figure3,this.x, this.y, this.largura, this.altura);
	}
}