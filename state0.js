var demo = {},centerX=1500/2,centerY=1000/2,char,speed=6;
demo.state0 = function(){};
demo.state0.prototype = {
  preload:function(){
    game.load.image('char','assets/char/char.png',32,32);
    game.load.spritesheet('orc','assets/badGuysPNG/Orc/orc_regular_bald.png',32,32);

  },
  create:function(){
    game.stage.backgroundColor = "#D0DFD0";
    console.log('state0');
    addChangeStateEventListeners();
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    char=game.add.sprite(centerX,centerY,'char');
    orc=game.add.sprite(10,1000,'orc');
    char.anchor.setTo(0.5,0.5);
    orc.anchor.setTo(0.2,0.2)


  },
  update:function(){
    if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
      char.x += speed;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
      char.x -= speed;

    }
    if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
      char.y -= speed;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
      char.y += speed;
    }
  }
};
function changeState(i,stateNum){

  game.state.start('state' + stateNum);
}

function addKeyCallback(key,fn,args){
  game.input.keyboard.addKey(key).onDown.add(fn,null,null,args);
}
function addChangeStateEventListeners(){
  addKeyCallback(Phaser.Keyboard.ZERO,changeState,0);
  addKeyCallback(Phaser.Keyboard.ONE,changeState,1);
  addKeyCallback(Phaser.Keyboard.TWO,changeState,2);
  addKeyCallback(Phaser.Keyboard.THREE,changeState,3);
  addKeyCallback(Phaser.Keyboard.FOUR,changeState,4);
  addKeyCallback(Phaser.Keyboard.FIVE,changeState,5);
  addKeyCallback(Phaser.Keyboard.SIX,changeState,6);
  addKeyCallback(Phaser.Keyboard.SEVEN,changeState,7);
  addKeyCallback(Phaser.Keyboard.EIGHT,changeState,8);
  addKeyCallback(Phaser.Keyboard.NINE,changeState,9);

}
