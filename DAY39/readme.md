# DAY 43

--------------------------------
this 참조 변수란?
--------------------------------
자바스크립트는 scope라는 영역을 가지는데 크게 전역 영역인 global scope와 지역 영역인 local scope로 구분된다.
if, while, for문등의 블록문에는 해당되지 않는다. 얘넨 전역 영역으로 쓰인다.
함수는 영역을 가질 수 있다.

```js
console.log(this)

if(true){
	console.log(this)
}

// => 둘 다 this는 window를 가리킨다.
```

```js
function fnc(){
	console.log(this);
}
fnc();
// 여기에서 this 또한 window를 가리킨다.
// 이유는 함수를 실행시킨 콘텍스트가 window이기 때문
// window.fnc() === this.fnc()
```

```js
function fn(){
	'use strict'
	console.log(this);
}
fn();
// this는 undefined가 출력된다.
// use strict를 사용하면 엄격한 모드가 실행되는데
// 더 이상 전역 객체를 window로 처리하기 하지 않기 때문에
// undefined로 처리가 된다.
// 그러나

window.fn(); // === this.fn(); 

// 처럼 명시적으로 window임을 선언해주면 전역 객체를 사용할 수 있다.

```

```js
function fnc(){
	console.log(this);
}

function fn(){
	'use strict'
	console.log(this);
}

document.body.onmouseenter = fnc;
// this 는 document.body를 가리킨다.
// body가 실행한 함수이기 때문!

document.body.onclick = function(){
	fnc();
}
// this 는 window 객체를 가리킨다.
// 함수를 실행시킨것이 body라고 생각할 수 있지만, 
// fnc() 앞에 아무것도 없으므로 window 객체가 생략되어 있다.
// window.fnc();

document.body.onclick = function(){
	fn();
}
// 여기서의 this는 undefined이다.
// fn함수는 엄격모드를 실행시키고 있기 때문에
// 암묵적으로 전역 객체를 가리킬 수 없다.
// fn() 앞에 window나 this 객체를 명시적으로 가리킬 경우 window를 가져올 수 있다.
```

```js
// .call() 을 사용하여, 다른 객체의 this를 빌려올 수도 있다.

document.body.onclick = function(){
	fn();
	fn.call(this);
}
```



---------------------------
jQuery 함수 내부에서의 this?
---------------------------

```js
jQuery(document).ready(function($){});
= jQuery(function($){});
// 같다!

jQuery(function($){
	'use strict';
	console.log(this); // = 여기서의 this는 document를 가리킨다. 제이쿼리 문서를 실행시킨 주체가 document이기 때문!
	$('body').on('click',function(){
		console.log(this); // 여기서의 this는 'body' 문서 객체를 가리킨다.
		console.log($(this)); // 여기서의 this는 $()인 제이쿼리 객체를 가리킨다.
	})
})
```



--------------------------
객체 합성이란?
--------------------------
```js
var obj1 = {'name':'영선', 'favorite-food':'파스타'};

var obj2 = {'name':'예리나','favorite-drink':'요구르트','age':20};
undefined

var fusion = $.extend(obj1,obj2);

// 하면 객체 두개가 합성된다
// 그런데 같은 name을 가질 경우, 밑에 있는 객체의 값이 덮어 쓰여지고, 
// 덮어 쓰여진 객체는 다시 불러와도 덮어 쓰여진 그대로 출력이 된다.
// .extend는 제이쿼리의 속성이다!
```
```js
jQuery(function($){
	'use strict';

	var $body1 = $('body');
	$body.on('mousedown', {'$this': $demo1}, function(evt){
	    // console.log(arguments);
	    // console.log('이벤트 객체의 .data.$this 참조 값:', evt.data.$this );
	    // var $this = evt.data.$this;
	    // $this.css('font-size', '+=20');
	    // console.log('this:', this); // this === .demo1 문서 객체
	    // console.log('$(this):', $(this).jquery); // jQuery 객체
	  });
})
// evt객체의 data 중에 $this를 가리킨다.
```




---------------------------------------
IIFE(즉시 실행 함수) 이해하기
---------------------------------------
함수 표현식으로 이름으로 함수를 호출하는 것을 하지 않고, 즉시 실행되는 함수
모듈 패턴에 자주 사용되고, 전역과 구분되는 지역을 형성함으로서 공개/비공개 멤버를 설정할 수 있다.
```js
var fn = function(){}; // 함수 표현식, 함수 값(literal)

//fn을 통해 함수를 실행한다

(function(global){
	console.log('1');
	console.log(global === window);
})(this);

(function($j$){
	console.log('1');
	console.log($j$ === window.jQuery);
})(jQuery);

```







-------------
$.proxy 우회 메소드
함수 영역 안에는 내부 함수 외에는 접근이 불가능하다
하지만 우회 메소드를 쓰게 되면 .call 함수를 쓰는 것처럼 함수 영역 내에 있는 변수를 가져다 사용이 가능하다.
```js
 $letters.each(function(index, item){
  	var $this = $letters.eq(index);
  	$this.on('mouseenter',$.proxy(l))
  })
  ```
