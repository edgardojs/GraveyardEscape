var demo = {},centerX=1500/2,centerY=1000/2,char,speed=11;
demo.state0 = function(){};
demo.state0.prototype = {
  preload:function(){
    game.load.spritesheet('char','assets/spritesheets/charSheet.png',160,160);
    game.load.image('grave','assets/backgrounds/graveyard.png');

  },
  create:function(){

    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.stage.backgroundColor = "#D0DFD0";
    console.log('state0');
    addChangeStateEventListeners();
    game.world.setBounds(0,0,3236,1000);
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    var graveBG = game.add.sprite(0,0,'grave');
    char=game.add.sprite(centerX,900,'char');
    char.anchor.setTo(0.5,0.8);
    char.scale.setTo(0.8,0.8);
    game.physics.enable(char);
    char.body.collideWorldBounds= true;
    char.animations.add('walk',[0,1,2,3,4,5,6,7]);



    game.camera.follow(char);
    game.camera.deadzone = new Phaser.Rectangle(centerX - 300, 0,600,1000);

  },
  update:function(){
    if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
      char.scale.setTo(0.8,0.8);
      char.animations.play('walk',15,true);
      char.x += speed;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
      char.scale.setTo(-0.8,0.8);
      char.animations.play('walk',15,true);
      char.x -= speed;

    }
    else{
      char.animations.stop('walk');
      char.frame = 0;
    }
    if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
      char.y -= speed;
      if(char.y < 802){
        char.y = 802;
      }
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
