# DAY41

## 제이쿼리

제이쿼리 ; 자바스크립트를 DOM 조작에 최적화된 라이브러리: jQuery

제이쿼리와 자바스크립트 비교
```js
//자바스크립트
(function(global){
  'use strict';
  global.html = query('html');
  if ( html.classList ) {
    // 신형 방식 IE 10+
    html.classList.remove('no-js');
    html.classList.add('js');
  } else {
    // 구형 방식
    var html_class_attr = html.getAttribute('class');
    html.setAttribute('class', html_class_attr.replace(/no-js/,'js'));
  }
}(this));


//제이쿼리
(function(global, $){
	'use strict';
	$('html').removeClass('no-js').addClass('js');
})(this, this.jQuery);
// 이렇게 하면 다른 라이브러리와 충돌이 나지 않기 때문에 즉시 실행 함수로 묶어준다.
```

var $변수이름 = 관례상 $를 넣어주면 제이쿼리에서 쓰인 객체라는 것을 명시해준다.
```js
var $container = $('container');
```
