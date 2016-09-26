# DAY 39
## 자바스크립트 이어서

#### 자바스크립트 반복문
1 while
2 do ~ while
3 for
// 조건이 필요하기 때문에 속성의 length값을 알면 쓰기 편하다.
3.1 for~in [객체]
// 그게 아니라면 for~in문을 사용하나, 속성이 존재하는 지 hasOwnProperty 메소드를 이용하여 파악해야단다.
3.2 for~of [배열]
// ES2015버전
3.3 forEach [배열]
```
var movielist = [];
movielist.push('터널');
movielist.push('덕혜옹주');
movielist.push('부산행');
movielist.push('서율역');

// console.log(movielist);


//for문
for(var i=0, l=movielist.length; i<l;i+=1){
	console.log(movielist[i]);
}

//for~of문
for(var movie of movielist){
	console.log(movie);
}

//for~in문
for(var index in movielist){
	if(movielist.hasOwnProperty(index)){
		console.log(movielistp[index]);
	}
}

// forEach구문 (중요!)
// 배열 객체(Array)의 메소드: .forEach(원소, 순서, 배열)
movielist.forEach(function(item, index, arr){
	console.log('item: ', item);
	console.log('index: ', index);
	console.log('arr: ', arr);
});

//배열 객체(array)의 메소드: .map(원소, 순서, 배열);
	movielist.map(function(item, index, arr){
	console.log('item' + index + ':'_item)
	if(index === movielist.length - 1){
		console.log('arr:', arr);
	}
});

> map은 배열에 접근하여 배열을 변경된 상태로 return할 수 있다. forEach는 안된다. forEach문은 반환 값이 없다 값이 없으니 (undifined)
> map의 변환 값은 수정된 배열을 반환한다.

	
```


#### 함수
* 함수의 특징
	- 상위 영역(스코프)와 구분되는 별도의 독립적인 영역을 가진다.
	- 함수 내부에 var 키워드, function 키워드로 정의된 데이터의 값을 외부 영역에서 접근이 불가능하다.
	- 함수 내부는 독립된 공간이기에 내부에 변수와 함수는 호이스트 된다.
* 호이스트(hoist) ; 영역 최상단으로 끌어 올려짐
	- function 으로 정의된 함수는 몸체가 전부 끌어올려진다.
	- var 키워드로 정의된 변수는 변수 이름만 끌어 올려질 뿐, 할당되는 데이터는 원래 정의된 곳에서 이루어진다.

```
var movielist = [];
movielist.push('터널');
movielist.push('덕혜옹주');
movielist.push('부산행');
movielist.push('서율역');


// 함수 선언식(함수 이름으로 정의한다.)
//function scope(){...};

// 함수 표현식(함수 값(리터럴)을 변수에 할당한다.)
var scope = function(){
	console.log(this); //this = window객체
	// 외부와 단절된 독립된 공간이 형성된다.
	if(movielist){
		console.log('if 내부:', movielist);
		// ES2015 let을 사용한 변수는 호이스트 되지 않는다.
		let movielist = null;
	}
	console.log('함수 내부:', movielist);
};

//함수 실행
// 함수를 실행시킨 컨텍스트 객체 == window 객체
scope(movielist);

```
* 매개변수와 전달인자
```
// 함수 정의
// 매개변수 parameter
function 함수이름(매개변수1, 매개변수2, ... ){
	
}

//함수 호출
// 전달인자 argument
함수이름(전달인자1, 전달인자2, ... );
```

#### this
콘텍스트 내부의 this는 콘텍스트를 가리킨다.
전역 객체 window는 웹브라우저에서만 해당된다.

```
// 일반 함수(글로벌 스코프에 정의된 함수)
function showMe(){
	console.log(this);
	return this;
}

showMe() === window;

var fds = {
	'callMe': showMe
};

fds.callMe() === fds;
```
#### strict
"use strict"
엄격한 모드 발동! 생성자로 만들 때 전역 객체로 만드는 것을 방지할 수 있겠다.

```
//자바스크립트 엄격 모드
function strict(){
	// 엄격 모드 발동
	// ECMA스크립트 2015에서ㅡㄴ 기본 설정 값이 "엄격 모드"
	'use strict';
	// 변수 선언 시에 var 키워드가 없으면 오류가 발생하게 된다.
	var hi = 'hello';
	// this 컨테스트 참조하는 변수는 더 이상 window전역 객체를 가지고 오지 않고, undifined가 먹는다.
	// 전역객체를 가지고 왔다가 문제되는 경우가 많기 때문!
	// 전역에서 this를 쓰면 오류가 나나, window전역객체를 가져올 땐 window를 직접적으로 가리키면 된다.

	//엄격 모드가 아닌, 자바스크립트에서는 전역에서 함수를 호출할 경우, 그 함수의 컨텍스트를 암묵적으로 전역 객체인 윈도우를 가리켰다.
	// 반면 엄격 모드에서 명시적으로 특정 객체가 함수를 호출하게 되면 this 컨텍스트 참조 변수는 해당 객체를 참조한다.
	console.log(this, hi);
}
strict(); // this === undefined
window.strict(); // === window 객체
document.onclick = strict() // === window.document 객체
```

#### 클로저
> 함수는 일급객체이기 때문에 함수 안에 함수를 다시 전달하여 사용할 수 있다.
> 자세한 내용은 깃헙 레퍼런스를 참고하세요
```
var fn = function(callback){
	if(typeof callback === 'function'){
		// 전달받은 인자나 함수유형이면 실행해라
		callback();
	} else{
		throw new error('전달인자는 함수 데아터 유형이어야 합니당');
	}
};

// 자바스크립트 함수가 일급 객체인 이유?
//함수를 다른 함수의 인자로 전달하여 사용할 수 있다.
fn(function(){});


callback은 사용자가 정의하면 다시 call하는ㄱ 거서

*반환 함수
함수는 인자로 전달될 수도 있고 값으로 반환도 가능하다.
- 클로저 함수
	자바스크립트 함수는 일급 객체의 요건을 모두 충족하는데,
	인자로서 전달도 가능하며, 값으로서 반환도 가능하다.
	함수가 실해외어 내부에 존재하는 함수를 외부로 반환할 경우에
	클로저가 생성되며, 반환된 함수는 클로저 영역을 참조할 수 있디.
	이때 반환된 함수를 클로저 함수라 말한다.
```
function outer(){
	function inner(){
	console.log('내부객체');
	}
	return inner();
}


function closure(outer()){};
= '내부객체';

//이때 inner함수를 클로저 함수라고 한다
```
```
function countDown(number){
	if(typeof number !== '')
	//countDown 외부 함수 내부에 존재하는 함수
	var _countDown = function(){

	}
}


#### 즉시 실행 함수


### 사용자정의 객체

