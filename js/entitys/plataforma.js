
//CLASSE DO BLOCO
function Plataforma(ctx, x, y, width, height){
	this.ctx = ctx;
	this.figure = imgPlataforma;

	this.srcX = 0;
	this.srcY = 0;
	this.srcWidth = 272;
	this.srcHeight = 129;

	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.color = "#000";

}

//MÉTODOS DO BLOCO
Plataforma.prototype = {
	desenhar: function(){
		this.ctx.fillStyle = this.color;
		this.ctx.fillRect(this.x, this.y, this.width, this.height);
		
		this.ctx.drawImage(
				this.figure,
				this.srcX, this.srcY, this.srcWidth, this.srcHeight,
				this.x, this.y, this.width, this.height
			);
	},

}





