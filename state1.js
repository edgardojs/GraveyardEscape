demo.state1 = function(){};

var cursors,vel=500,rocks,grass;

demo.state1.prototype = {
  preload:function(){
    game.load.tilemap('field','assets/tilemaps/field.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('grassTiles','assets/tilemaps/grassTiles.png');
    game.load.image('rockTiles','assets/tilemaps/rockTiles.png');
 },

  create:function(){
    game.stage.backgroundColor="#DFDFDF";
    addChangeStateEventListeners();

    var map = game.add.tilemap('field');
    map.addTilesetImage('grassTiles');
    map.addTilesetImage('rockTiles');

    grass = map.createLayer('grass');
    rocks = map.createLayer('rocks');

    map.setCollisionBetween(1,9,true,'rocks');
    map.setCollisionBetween(11,true,'grass');

    char = game.add.sprite(20,20,'char');
    char.scale.setTo(0.3,0.3);
    game.physics.enable(char);
    cursors = game.input.keyboard.createCursorKeys();

},
  update:function(){
    game.physics.arcade.collide(char,rocks,function(){console.log('hitting a rock!'); });
    game.physics.arcade.collide(char,grass,function(){console.log('hitting heavy grass!'); });

    if(cursors.up.isDown){
      char.body.velocity.y = -vel;
    }
    else if(cursors.down.isDown){
      char.body.velocity.y = vel;
    }
    else{
      char.body.velocity.y = 0;
    }
    if(cursors.left.isDown){
      char.body.velocity.x = -vel;
    }
    else if(cursors.right.isDown){
      char.body.velocity.x = vel;
    }
    else{
      char.body.velocity.x = 0;
    }
  }
};
