
//CLASSE DO DEFENDER
function Player(contexto, teclas, largura, altura){
	this.ctx = contexto;

	this.teclas = teclas;
	this.largura = largura;
	this.altura = altura;	
	
	//ORIGEM DA IMAGEM
	this.figure = imgRobo; 
	this.posX = 0;
	this.posY = 0;
	this.posWidth =  37;	 //92;
	this.posHeight =  51; 	//120;
	this.anima = 0;

	//IMAGEM NO CANVAS
	this.x = 0;
	this.y = 300;
	this.width = 35;
	this.height = 40;

	this.color = "#F00";
	this.speed = 2;

	this.forcaPulo = -6;
	this.queda = 0;
	this.forcaQueda = 0.2;

	this.podeCair = true;
	this.podePular = false;
}

//METODOS DO PLAYER
Player.prototype = {
	//DESENHA O PLAYER
	desenhar: function(){
		//DESENHA O PLAYER
		this.ctx.fillStyle = this.color;
		this.ctx.fillRect(this.x, this.y, this.width, this.height);

		this.ctx.drawImage(this.figure, //IMAGEM
				this.posX, this.posY, this.posWidth, this.posHeight,		//ORIGEM
				this.x, this.y, this.width, this.height);//DESTINO
	},
	//ATUALIZAR
	atualizar: function(){
		//this.x += speed;
		this.movimentar();
		this.pular();

		//if(this.podeCair){
		this.gravidade();
		//}
		

		this.animacao();

		if(this.y + this.height > this.altura){//CHAO
			this.queda = 0;
			this.podeCair = false;
			this.podePular = true;
			this.y = this.altura - this.height;
		}
	},
	//MOVIMENTAR PERSONAGEM	
	movimentar: function(){
		if(this.teclas[37]){
			this.x = this.x - this.speed;
			this.posY = this.posHeight*3;			
		}else if(this.teclas[39]){
			this.x = this.x + this.speed;
			this.posY = this.posHeight*1;	
		}
		this.x = Math.max(0, Math.min(this.x, this.largura - this.width) );
		
		if(this.y < 0){
			this.y = 0;
			this.queda = 0;
		}
		this.y = Math.max(0, Math.min(this.y, this.altura - this.height) );
	},
	//GRAVIDADE
	gravidade: function(){
		this.queda = this.queda + this.forcaQueda;
		this.y = this.y + this.queda;
	},

	//PULO DO PERSONAGEM
	pular: function(){
		if(!this.teclas.pula && this.podePular){ // 
			this.podePular = false;
			this.queda = 0;
			this.podeCair = true;
			this.queda = this.forcaPulo;  
			teclas.pula = false;
			//console.log("TECLA OK");
		}
		//console.log("y: " + y + " ///  "+ this.forcaPulo );
	},

	//ANIMAÇÃO
	animacao: function(){
		if(this.teclas[37] || this.teclas[39]){
			this.anima++;
			
			if(this.anima % 8 == 0){
				this.posX = this.posX + this.posWidth;
			}
			//console.log("POSX: "+ this.forcaPulo );
			if(this.anima >= 64){
				this.anima = 0;
				this.posX = 0;
			}
		}
	}

}















/*









http://callcenteroi.intranet/
	this.posX = 0;
	this.posY = 0;
	this.posWidth = 92;


6533291890
Z ED527845314419


*/


