
//CLASSE DO BLOCO
function Lava(ctx, x, y, width, height){
	this.ctx = ctx;

	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.color = "rgba(255, 0, 0, 1)";

}

//MÉTODOS DO BLOCO
Lava.prototype = {
	desenhar: function(){
		this.ctx.fillStyle = this.color;
		this.ctx.fillRect(this.x, this.y, this.width, this.height);

		this.atualizar();
	},
	atualizar: function(){
		
	}
}





