demo.state7 = function(){};
demo.state7.prototype = {
  preload:function(){},
  create:function(){
    game.stage.backgroundColor="#0F0F0F";
    console.log('state7');
    addChangeStateEventListeners();
  },
  update:function(){}
}
