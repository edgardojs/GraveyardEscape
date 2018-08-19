//Creates demo variable for other states
var demo = {},centerX=1618/2,centerY=1020/2,char,speed=15;
demo.state0 = function(){};
demo.state0.prototype = {
  preload:function(){
    //Load Your assets here!

    game.load.spritesheet('char','assets/spritesheets/charSheet.png',160,160);
    game.load.image('grave','assets/backgrounds/graveyardlv1.png');
    game.load.spritesheet('maskedfly','assets/spritesheets/MaskedMan/maskedfly.png',96,96);

},

  create:function(){

    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.stage.backgroundColor = "#010010";

    addChangeStateEventListeners();

    game.world.setBounds(0,0,15996,560);
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    var graveBG = game.add.sprite(0,0,'grave');

    char=game.add.sprite(20,centerY,'char');
    char.anchor.setTo(0.2,0.8);
    char.scale.setTo(0.5,0.5);

    maskedfly = game.add.sprite(2000,centerY,'maskedfly')
    maskedfly.anchor.setTo(1,1)
    maskedfly.scale.setTo(1.2,1.2)




    game.physics.enable(char);

    char.body.collideWorldBounds= true;

    char.animations.add('walk',[0,1,2,3,4,5,6,7]);

    game.camera.follow(char);






  },
  update:function(){

    if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
      char.scale.setTo(0.5,0.5);
      char.animations.play('walk',15,true);
      char.x += speed;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
      char.scale.setTo(-0.5,0.5);
      char.animations.play('walk',15,true);
      char.x -= speed;

    }
    else{
      char.animations.stop('walk');
      char.frame = 0;
    }
    /*if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
      char.y -= speed;
      if(char.y < 800){
        char.y = 800;
      }
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
      char.y += speed;
    }*/
  }
};
function changeState(i,stateNum){
  console.log('state'+ stateNum);

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
