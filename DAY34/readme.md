# DAY 38

## 자바스크립트 이어서

#### 반복문
- 조건이 참이면 반복하여 돈다.

**while문**
조건이 참이면 계속 무한으로 반복된다.
~하는 동안 반복수행함

- 변수 초기값을 던져주고 변수에 조건을 걸어서 true일 동안만 반복하게 한다.
```
count = 0;

while(count++>=15){
	console.log("안녕");
}
// count++을 실행문 안에 넣어도 되고, 조건문에 넣어도 된다.
// count+=2 => count = count + 2

```
--
``
var cleanWhiteSpace = (el=document) =>{
console.log(el);
}

cleanWhiteSpace();

= #document
// ES2015 버전에서 사용할 수 있는 방식
```

/\S/ = 공백임을 테스트한다.


**do ~ while문**
- 1회 우선 실행 한 다음, 조건이 참이면 이어서 반복수행함
```
do {

	//실행문

} while( 조건문 );


var boo = true, m = 10;

do { 
	console.log(boo ? '참참참!' : '짝짝짝!');
	if (m--)
	}
```

**for문**
for 블럭문은 스코프를 가지지 못하기 때문에 ()안에서 선언된 변수는 전역변수로 사용된다.
let 키워드를 쓰면 전역변수가 아닌 지역변수로 선언이 가능하다. ES2015버전임으로 크롬에서만 지원 된다.
실행흐름 - 변수 확인, 조건확인, 실행구문, 증감연산
continue - 실행구문은 점핑 시키고 그 다음 실행구문으로 넘어간다.
```
for(var i=0, boo=false; i < 10; i++){

	// if ( i === 9 ){
	// boo = !boo;
	// }

	boo = i === 9 ? !boo : boo;

	// 위 아래의 코드를 병합시키면 이렇게 코드 변경이 가능하다!
	// console.log( (i === 9 ? !boo : boo) ? '참참참!' : '짝짝짝!');

	console.log(boo ? '참참참!' : '짝짝짝!');
}
```
```
//for문 continue를 사용해보는 예제

// 미션! fruits 변수에 참조된 데이터에는 과일이 아닌 것들이 포함되어 있습니다.
// 이를 for문을 사용하여 불필요한 데이터를 뺀 실제 과일만 담은 배열을 반환하시오.

var fruits = ['바나나', false, '딸기', true, '포도', null, '수박'];
fruits.push(function(){});
fruits.push({'name':'object'});

for(var i=0, o=fruits.length, real_fruits = [], fruit;i<0;i++ ){
	fruit = fruits[i];
	if(isType(fruit)) !== 'string'){
		continue;
		// 조건이 맞지 않으면 바로 건너뛰고 실행구문을 다시 반복해라.
	}

	real_fruits.push(fruit);
}

console.log(real_fruits);
```
```
// continue 실전 예제
// <body> 요소의 자식노드 중, <script>, #text 노드가 아닌 요소노드를 찾아
// el_collection 배열에 수집하라.


// 요소노드의 이름이 동일한지 체크하는 헬퍼 함수
function isElName(node, name){
	if(isntElNode())
}


var collection = document.body.childNodes;

for ( var el_collection = [], i=collection.length -1; collection[i]; i--){
	let node = collection[i];
	if(node.nodetype === 3 || node.localName === 'script') {
	// localName을 쓰면 대문자를 소문자로 반환한다. 크로스브라우징 검증은 안됨
		continue;
	}
	el_collection.push(node);
}
console.log(el_collection);

'em rem % px vw vh vmin vmax'.split(' ');

var units = 'em rem % px vw vh vmin vmax'.split(' ');
units.length;

var units = 'em rem % px vw vh vmin vmax'.split(' ');
var unit;
var i = 0;




// 단위를 빼오는 헲퍼 함수
function getUnit(value){
	var i=0, l=getUnit.units.length, unit;
	for( ; i<l;i++){
		unit = getUnit.units[i];
		if(value.indexOf(unit)>-1){
			break;
		}
	}
	return unit;
}

// 함수 또한 객체이기 때문에 속성을 가질 수 있다.
getUnit.units = 'px rem em % vw vh vmin vmax'.split(' '); 
```

```
function removeUnit(value){
	var unit = getUnit(value);
	value.split(unit);
}


**for in문**
- 객체의 내부 속성을 순환하여 처리한다
- 배열을 탐색할 때는 오래 걸리기 때문에 쓰지 않는 것이 좋다.
'localStorage' in window
> window 전역 객체 안에 localStorage 속성이 있는가?

```
var obj = {'name':'예리나','job':'학생'};
for( var prop in obj){
	if(obj.hasOwnProperty(prop)){
		// if문에 조건을 걸어주는 이유는 for in문은 해당 속성이 있는지 조상까지 거슬러 올라가기 때문이다.
		console.log('속성:', prop);
		console.log('값:',obj[prop]);
	}
}

### 함수
- 함수는 명령문의 묶음이며 재 사용이 가능하다.
```
function 함수이름(){
	//실행문
}
```
```
// 0. 사용하지 말아야 할 방법
var fn1 = new Function('console.log("쓰지마;;;")');

fn1(); //함수 실행

// 1. 함수 선언문
function fn2(){
	console.log('실행해');
}
fn2();

// 2. 함수 표현식
var fn3 = function(){
	console.log('변수에 참조됩니다');
}

fn3();
```

**자바스크립트 호이스팅 현상**
함수 실행구문이 함수 선언구문보다 나중에 있더라도 끌어올려지기 때문에 문제가 없다. 어디에서나 사용하더라도 알아서 값을 가져옵니다 ^0^

함수 표현식을 사용할 경우 변수는 순서대로 값을 할당받기 때문에 사용하지 않는 부분에서는 변수의 값이 없어서 더 좋을 수도..? 변수를 위에 선언해두면 좋겠다... 함수 선언문을 사용하면 이리저리 남발하기 때문에 조금 힘들다.

**스코프**
웹 브라우저 환경에서 window 전역 객체에서 function을 선언할 경우 window 전역 객체의 메소드이자, 지역적 영역이다.
함수만이 영역을 가지며, 외부에서는 영역에 접근이 불가능하다.
지역 내에서 변수를 찾고, 없다면 매개변수에서 찾고 없다면 거슬러 올라가 전역변수까지 간다.
ES2015버전에선 지역변수 내에서 var를 붙이지 않으면 오류가 난다.



var king = '전역입니다';

// 호이호이호이스팅
var boo = true; //전역
if(boo){
	if(boo){
		console.log(boo);
		var boo = false;
	}
	console.log(boo);
}
console.log(boo);


var 선언이 아닌, let 키워드 선언은 호이스팅이 되지 않는다.

--- let 키워드

var boo = true; //전역변수

var inScope = function (){
	if(boo){
		if(boo){
			console.log(boo); //true
			let boo = false;
			console.log(boo);
		}
		console.log(boo); //true
	}
}
// let 키워드 선언은 호이스팅이 되지 않기 때문에 순서대로 값이 할당되며, 지역변수로만 사용이 된다. 함수 외에도 if나 for문 등에도 지역변수로 사용이 가능하다.