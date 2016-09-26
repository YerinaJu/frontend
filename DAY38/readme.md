# DAY42

## 제이쿼리를 배워보자

### 제이쿼리
* 제이쿼리는 팩토리 함수와 같다. 값을 던지는 즉시 알아서 처리가 되기 때문에 공장 함수의 느낌으로 사용한다. 생성자 함수가 아니라 일반 함수이다! `$('이름')`
* $로 시작되는 것은 제이쿼리의 객체임을 명시해준다.
* 반환 값이 일반 문자나 숫자 일 경우에는 굳이 명시안해도 되겠지만, 제이쿼리 객체를 바노한할 경우 변수 앞에 $을 명시해줘야 한다.


```js
// 제이쿼리 로딩이 됐는지 안됐는지 확인하기

	window.jQuery ? 
		document.write('<p>제이쿼리 로딩에 성공!</p>') : 
		document.write('<p>제이쿼리 로딩에 실패!</p>') ;
```

> 모더나이저 modernizr? 특정 환경에서 지원이 되는 지 안되는 지 알아서 감지해주는 라이브러리, 제이쿼리의 경우 바디 밑에서 불러올 수 있지만, 모더나이저는 head에 넣고, html에 class="no-js"를 넣어줘야 한다. 넣는 이유는 js가 지원되는 환경인지가 필요하니까!!! 해당 html 클래스에서 빌드가 된 기능들이 지원되는 지 안되는 지 확인 할 수 있다. no-가 붙으면 지원 안되는 환경

> Detextizr ? 모더나이저의 확장판 느낌. 기기별 브라우저별 버전이나 지원되는 환경 감지가 가능하다.


#### 제이쿼리의 환경
- 제이쿼리와 다른 라이브러리의 충돌을 방지하기 위해 여러 방법을 사용해야 한다.

#### 제이쿼리 $ vs $()
- $ ; 제이쿼리 함수
- $(); 제이쿼리 함수를 실행한 결과인 객체 = 인스턴스 객체 => 제이쿼리 객체 자체가 반환된다.
```js
typeof jQuery
// = function

typeof jQuery()
// = object
```

-.ready ; 도큐멘트 문서가 모두 해석되면 실행되는 이벤트
```js
$( document ).ready(function() {
  // Handler for .ready() called.
});
```

#### 제이쿼리 선택자
- css1~3 선택자를 모두 지원함.
```
$('html a:not(:first-child)')
E(타입 선택자)
E E(하위(자손)선택자)
E>E(자식선택자)
#id(아이디 선택자)
.class(클래스 선택자)
:nth-child
:nth-of-type
:only-child
```
#### 제이쿼리 필터
씨즐엔진을 사용한다!

[title!=] ; ~를 제외한 요소
:first 수집된 요소 중에 첫번째 애를 빼와라
```js
$('a').eq(0) = $('a:first')

//$('a:eq(0)') 이 방법은 좋지 않다 왜냐면 일일히 안에를 쪼개야 하기 때문에 춋또힘듬
```
:odd ; 원래 css는 홀수, 1부터 시작하니까! 그런데 스크립트에서는 0부터 시작이기 때문에 짝수가 된다..!


jQuery.fn.css ; 제이쿼리 프로토타입.css 사용법
- get ; $().css('font-size') 속성을 하나 쓰면 속성 값을 가져오는 get함수가 된다.
- set ; $().css('font-size','10px') 속성 값을 set할 수 있다.
- css_map ; $().css({'font-size': '+=10px', 'margin-left': '1em'})
- callback 
```js
jQuery(function($){
	$('demo-box')
		.css({'cursor': 'pointer'})
		.attr({'tabindex':'0'})
		.on('click', function(){
			$(this).css({

			})
		})
})
```

```js
$('.demo-box').eq(0)
.on('mouseenter', function(){
	var $this = $(this);
	if($this.hasClass('secondary')){
		$this.css('font-size', '+=10');
	}
	$this.addClass('primary');
})
.on('mouseleave', function(){
	var $this = $(this);
	$this.removeClass('primary');
	$this.addclass('secondary');
});
```
