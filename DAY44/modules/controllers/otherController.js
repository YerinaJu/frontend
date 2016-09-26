(function(global, ng){
  'use strict';

  function oCtrl(){
  	 // 컨트롤러 참조 변수
    // this가 window를 가리키기 때문에 this에 컨트롤러를 담아 사용한다. 
    var that = this;

    that.init_value = null;
    that.trigger    = trigger;
    function trigger() {
      console.log(that); //
      if ( jq.type(that.init_value) === 'null' ) {
        that.init_value = 'otherController';
      } else {
        that.init_value = 'not initialization.';
      }
    }
    global.setTimeout(trigger, 3000);
  }

  angular.module('ngApp').controller('otherCtrl', oCtrl);
  
})(this, this.angular); 