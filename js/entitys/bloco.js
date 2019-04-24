
//CLASSE DO BLOCO
function Bloco(ctx, x, y, width, height){
	this.ctx = ctx;
	this.figure = imgTijolo;

	this.srcX = 0;
	this.srcY = 0;
	this.srcWidth = 600/4;
	this.srcHeight = 340/4;

	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.color = "#000";

}

//MÉTODOS DO BLOCO
Bloco.prototype = {
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





