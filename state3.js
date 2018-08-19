demo.state3 = function(){};
demo.state3.prototype = {
  preload:function(){},
  create:function(){
    game.stage.backgroundColor="#0F0F0A";
    
    addChangeStateEventListeners();
  },
  update:function(){}
}
