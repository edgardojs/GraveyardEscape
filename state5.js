demo.state5 = function(){};
demo.state5.prototype = {
  preload:function(){},
  create:function(){
    game.stage.backgroundColor="#100100";
    console.log('state5');
    addChangeStateEventListeners();
  },
  update:function(){}
}
