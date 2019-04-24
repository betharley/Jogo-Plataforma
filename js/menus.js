
//canvas.width = innerWidth;   //700
//canvas.height = innerHeight;	//400
//canvas.style.backgroundColor = "#AAA";


//CLASSE MENUS
function Menus(contexto, game){
	this.ctx = contexto;
	this.game = game;

	this.title = "My Game";
	this.figure = imgCenarioMenu;
	this.menus = [];
	this.opcoes = ["Start", "Fases", "Records", "Sounds", "Exit" ];

	this.iniciar();
}

//METODOS DO MENUS
Menus.prototype = {
	
	iniciar: function(){
		let distanciaY = 100;
		for(let linha = 0; linha < this.opcoes.length; linha++){
			distanciaY = distanciaY + this.ctx.canvas.height / 14;
			this.menus.push({
				x: 140,
				y: distanciaY ,
				width: this.ctx.canvas.width - this.ctx.canvas.width*0.4,
				height: this.ctx.canvas.height / 10,
				color: "#555",
				texto: this.opcoes[linha],
			});
			distanciaY = distanciaY + 20;
		}
	},

	desenhar: function(){


		//Desenha o fundo
		this.ctx.fillStyle = "rgba(255,255,255, 0.5)";
		this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
		this.ctx.drawImage(this.figure, 0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

		this.ctx.save();
		//Titulo
		this.ctx.shadowOffsetX = 5;
		this.ctx.shadowOffsetY = 5;
		this.ctx.shadowBlur = 4;
		this.ctx.shadowColor = "rgba(0, 0, 255, 0.7)";
		this.ctx.fillStyle = "#00F";
		this.ctx.font = "70px Arial";
		this.ctx.fillText(this.title, this.ctx.canvas.width/2 - this.ctx.measureText(this.title).width/2, this.ctx.canvas.height * 1/5 );		
		this.ctx.restore()

		//DESENHA AS OPÇÕES
		for(let i in this.menus){
			let bloco = this.menus[i];
			//this.ctx.fillStyle = "#DDD";
			//this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

			//DESENHA OS RETANGULOS
			this.ctx.save()
			//this.ctx.fillstyle = "#0F0";
			this.ctx.shadowOffsetX = 10;
			this.ctx.shadowOffsetY = 10;
			this.ctx.shadowBlur = 4;
			this.ctx.shadowColor = "rgba(200, 200, 200, 0.7)";

			this.ctx.fillStyle = bloco.color;
			this.ctx.fillRect(bloco.x, bloco.y, bloco.width, bloco.height);
			this.ctx.restore();

			this.ctx.fillStyle = "#FFF";
			this.ctx.font = "35px Arial";
			this.ctx.fillText(bloco.texto, 
						(this.ctx.canvas.width/2) - this.ctx.measureText(bloco.texto).width/2, 
							bloco.y+bloco.height*0.8);
		}
	},

	atualizar: function(){
		
		for(let i in this.menus){
			let bloco = this.menus[i];	
			if(posX > bloco.x && posX < bloco.x + bloco.width && posY > bloco.y && posY < bloco.y + bloco.height){
				bloco.color = "#000";
				posX = 0;
				posY = 0;
				setTimeout(function(){
					console.log("CLICOU " + bloco.texto);
					//MUDA A TELA CASO SEJA CLICADO
					if(bloco.texto == "Start"){
						this.game.carregar(1);
					}
				}, 200);
			}
		}
				
	}
}
/*

//var retangulo = new Menus(contexto);
//retangulo.iniciar();

73 32884390

7332884390
Rafael

73999414408



fillstyle
shadowOffsetX = 5;
shadowOffsetX = 5;
shadowBlur = 4;
shadowColor = "rgba(200, 200, 200, 0.5)";

			this.ctx.fillText(	opc, 
						this.largura/2 - this.ctx.measureText(opc).width/2,
						this.altura / 2 +  i * 40);


			this.ctx.fillText(bloco.texto, 
						bloco.x+bloco.width*0.3, 
							bloco.y+bloco.height*0.8);

86 32117921
 / 86999160111
 / 86999292114 
Perfil em Uso: 15M_ASSIA_12000_576_8:EXT_1_1 
SINCRONISMO 11999/RATEMAX 26676/SINALRUIDO 25.4/
ATENUAÇÃO 7.8 / POTENCIA 14.4/MODULAÇÃO ADSL2+ 
TESTES INTERNOS DE CABOS E FILTRO/ 7 MEGA/



*/



