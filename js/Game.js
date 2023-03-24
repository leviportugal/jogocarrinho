class Game {
  constructor() {}

  getState() {  // 1º verificar o estado do jogo!
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {  // escuta
      gameState = data.val(); // pega o valor do estado do jogo
    });                       // no banco de dados
  }
  update(state) {  // atualiza o valor do estado do jogo no banco de dados! 
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
    player = new Player(); // iniciar um jogador
    playerCount = player.getCount(); // identificar quantos jogadores temos
                                     // criar getCount no player!
    form = new Form();
    form.display();
    car1 = createSprite (width/2-50,height-100)
    car1.addImage (car1_img)
    car1.scale = 0.07

    car2 = createSprite (width/2+100,height-100)
    car2.addImage (car2_img)
    car2.scale = 0.07
  }

  // ATUALIZA NO BANCO DE DADOS O ESTADO DO JOGO PARA 1
  // QUANDO A QUANTIDADE DE PLAYERS FOR === 2
  handleElements() {
    form.hide(); // apaga o form
    form.titleImg.position(40, 50); // redefine o titulo
    //form.titleImg.class("gameTitleAfterEffect"); // novo estilo do titulo
  }

  play() {
    this.handleElements ()
   if (playerCount===2){
    image(track, 0, -height * 5, width, height * 6);
    drawSprites()
   }


  }
}
