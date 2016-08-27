(function(global, XHR){
  'use strict'

  var xhr = new XHR;
  // ajax통신을 하기 위해 XHLHttpRequest 생성자 함수를 통해 만든 객체


  //통신 상태 관찰 이벤트 핸들링
  xhr.onreadystatechange = function(){
    //console.log(this); //this는 xhr를 말함
    // 200은 서버 통신이 성공한 상태
    // 4는 데이터 전송이 완료된 상태
    if(this.status === 200 && this.readyState === 4){
      // 서버 통신이 되고, 데이터 전송까지 된 상태일 때 현재 view(main)에 현재 응답받은 텍스트를 뿌려라.
      view.innerHTML = this.responseText; //HTML Code
    }
  };

  //문서객체 참조
  var view = document.querySelector('main');
  var nav_links = document.querySelectorAll('nav a');

  console.log(nav_links.length);

  // nodelist를 돌면서 이벤트를 하나하나 바인딩 시킨다.
  for(var i = nav_links.length -1; nav_links[i]; i--){
    var link = nav_links[i];

    //1. 객체.속성을 사용하는 법
    link.idx = i;
    link.onclick = viewUpdate;

    //2. 클로저 + 우회 메소드($.proxy, bind)를 사용하는 방법
    // link.onclick = (function(index){
    //   return viewUpdate.bind(link, index);
    // })(i);
    // call
  }

  // nodelist를 순환하여 이벤트
})(this, this.XMLHttpRequest || this.ActiveXObject('Microsoft.XMLHTTP'));