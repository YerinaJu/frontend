# DAY37

## 1. 자바스크립트 데이터 유형

### 원시형 데이터 (숫자, 문자, 논리, null, undefined)

**형번화하기**
- undefined, null

null + 숫자 = null이 0으로 변하면서, 더한 숫자 값이 나온다.
!! false / & ! true

#### 숫자아님 NaN(Not a Number)
- 연산 결과가 숫자가 아닐 경우 NaN으로 경고 처리가 된다.
- isNaN() 부정형으로, !isNaN() 긍정형으로.
```
isNaN(9) = false;
!isNaN(9) = true;

function isNumber(data){
	return typeof data === 'number';
}
```
#### 리터럴
- 그대로 정확히 해석되어야 할 값, '값' 그 자체이다.





### 자료형 데이터 (함수, 배열, 객체)

#### 함수형 Function

**함수 선언문**
```
function 함수이름(){ //함수내용 }
// 함수 블럭문 뒤에 세미콜론을 사용하면 안된다.
// 변수를 제외한 키워드 뒤에는 세미콜론을 넣으면 안된다.
```
**함수 표현식**
```
var 변수이름 = function(){};
// 함수 블럭문 뒤에 세미콜론을 사용해야 한다.
```

- 1. 익명함수 ; 함수의 리터럴 표현식. 변수에 참조
	```
	var myFn = function() {};
	```
	> 함수를 변수에 넣을 경우, 중괄호 뒤에 세미콜론을 반드시 넣어줘야 한다.
	- 객체의 프로퍼티에 function(){};를 참조 시킨다.

- 2. 생성자함수 ; 함수 생성자를 사용하여 함수를 생성한다.(쓰지마)
	```
	// 함수 구문에 console.log(); 등을 쓰면 함수 안에 해당 구문이 들어오게 된다.
	var myFn = new Function('함수구문');

	// 함수를 참조하고 있는 변수 이름을 통해서 호출한다
	myFn();	
	```

- 3. 함수 이름으로 작성
	```
	function 함수이름(){}
	// 함수 이름은 주로 카멜케이스 기법으로 표기한다.
	// 함수이름은 카멜케이스, 변수이름은 _를 사용한다. 라이브러리를 사용한 객체는 $를 사용한다.
	```

- 4. 객체 프로퍼티에 함수이름을 참조한다.
	```
	// body.onclick에 myFn을 참조시킨다.
	body.onclick = myFn;
	function myFn(){}
	
	// body. 
	body.onclick()

	body.onclick = null;
	onclick = null
	```

#### 배열형 Array

> 변수와의 차이점 
> 변수는 하나의 변수에 하나의 데이터 값만 담을 수 있다.
> 배열은 자료형이 들어오며, 하나의 변수에 배열 데이터를 집합으로 참조함으로서 다수의 데이터를 관리할 수 있다.

```
var items = ['밥','반찬','아이스크림'];
console.log(items[1]);

// new Array를 사용하여 만들 수 있다.
// 그러나 권장하지 않는다.
var items = new Array();
items[0] = '밥';
items[1] = '반찬';
items[2] = '아이스크림';
console.log(items[1]);
```

- 배열은 객체이며, property를 지정해 줄 수 있다.
```
var temp = new Array();
temp['속성'] = '값';
temp.속성 = '값';
```
- 배열 안에 배열을 넣는 것도 가능하다.
```
temp[3][3];
```
- 배열 오소 갯수 .length;
- 노드리스트는 배열과 흡사하지만, 배열이 아닌 유사배열이다.
> 유사배열은 메소드와 속성을 가질 수 없다.

new Array(배열 리스트를 넣을 수 있다.)
그런데, new Array(숫자)를 넣으면 숫자만큼의 빈 리스트가 생겨버린다! 단점.

배열 생성 시, 갯수를 지정하는 것은 사용하지 않는 것이 좋다.

#### 객체형 Object
- undefined와 null을 제외한 모든 것은 객체이다.
> NaN는 숫자 객체이다.

- new Object를 통해 생성할 수 있다.
- object.property = data;
	> object['property'] = data;
	> [] 안에는 변수 이름이 들어온다.
	> 이름에 구애받고 싶지 않다면, []와 변수를 사용할 수 있다. 변수 이름에는 -가 들어올 수 없으며, []에도 해당된다.
- 변수 = 값을 객체가 소유하게 되면 변수 속성이 된다.
```
{속성:값}
// 객체 리터럴 표현식, 프로퍼티 추가
// 각각 속성:값을 ,로 구분 지을 수 있다.
// 뒤에 ;은 사용하지 않는다.
```
> data 안에는 숫자, 문자, 불린, 배열, 함수, 객체 등의 정보를 다 넣을 수 있다.
- 객체가 소유한 함수는 메소드라고 한다.
- 객체의 프로퍼티 이름은 키워드나 예약어 사용 시 오류가 나기 때문에 ""을 사용한 문자열로 정의하면 좋다.
- 객체의 속성은 delete를 사용해서 지울 수 있지만, 전역에 선언한 것은 사용이 불가능하다.
	> 전역 변수는 어찌보면 전역 객체의 속성이라고 볼 수 있다. window.속성
	> undefined와 null을 사용해서 지울 수 없다!
	> 전역변수는 삭제할 수 없기 때문에 오염시키지 않기 위해 지역변수에 _를 사용해서 다른 저장소를 만들어 두는 등의 방식을 요한다.

#### 정보분석
**자바스크립트 데이터 유형 체크**
- typeof() 
	* 
	```
	// 데이터 유형별 변수 선언 및 값(리터럴) 할당
	// 변수 선언
	var num, str, boo, fnc, arr, obj;

	// 선언된 변수에 각각 데이터를 리터럴 표현식으로 복사/참조
	// 원시 데이터 유형 (복사)
	num = 1203;
	str ='hey, jude';
	boo = !0;
	// 자료형 데이터 (참조)
	fnc = function(){};
	arr = [];
	obj = {};

	// var 키워드를 한 번만 사용하는 패턴
	// var singleton pattern
	typeof null; ; 'null'이 아닌 'object'
	typeof
	```




	 	arr instanceof Array = true; 
	// true :  typeof 의 설계 오류 문제점을 해결할 수 있다.
	// '악점': 원시데이터 유형의 경우는 올바른 대답을 해주지 않는다.
	'primitive' insteadof String;  = false
	new String('primitive') instanceof String;  = true;
	```
- constructor(생성자) 속성을 사용하는 방법
- 객체 유형의 데이터에서는 완벽한 결과를 반환한다.
- 단, 객체가 아닌 유형(null, undefined...)에서는 오류를 발생시킨다.
> constructor 속성은 객체만이 가지는 속성이기 때문이다.
```
true.constructor === Boolean
= true

'private'.constructor === String;
= true
(new String('private')).constructor === String;
= true
// 객체가 아닌 null이나, undefined는 문제가 많다.
```

- Object.prototype.toString
```
object.prototype.toString.call(undefined);
= "[object Undefined]"

// undefined가 object~toString을 call(빌려쓰다);

function isType(data){
	return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
	// slice는 앞에서 8번째 글자까지 자르고, - 음수는 뒤에서 1번째 글자까지 자른다.
}

```

// 생성자 함수 (객체를 생성한다)
function Tab이라는 함수가 new 객체()를 사용해서 새로운 객체를 만들 수 있다. 만들어진 객체들은 function Tab과 연결된 prototype을 서로 공유하고 있으며, prototype에 속성을 넣어주게 되면 만들어진 객체들은 같은 속성을 고융할 수 있게 된다.


#### 연산자
- 사칙 연산자 +, -, *, /
- 나머지 연산자 %
```
0 % 5 = 0
1 % 5 = 1
2 % 5 = 2
3 % 5 = 3
4 % 5 = 4
5 % 5 = 0
```
```
var doll = ['1', '2', '3', '4', '5'];

var count = 0;
doll[count++ % doll.length];

// doll[count++ % doll.length];를 실행할 때 마다 배열 순서만큼 계속 돈다. 
// -> for문으로 돌릴 수 있다.
```

**문자열접합**
**숫자+문자접합**
**증가연산**
(대상)++ 한번 돌고 +1/ (대상)-- 한 번 돌고 -1/ ++(대상)+1 상태로 한번 돌기/ --(대상) -1 상태로 한번 돌기
```
var start = 0;

while(start < 10){console.log(start); start = start+1;}
```
```
var i=0;
while(document.querySelectorAll('a')[i++]){
	//내용
}
```
- 증가(감소)연산
```
var check_fact = 100;
console.log(check_fact++);

#### 조건문
- if문
	조건이 참이면 실행하고, 아니면 동작하지 않는다.
- 비교연산자
	* 대입연산 =
	* 비교연산 ===
			!=
	* && / || / !
- 삼항식
조건 ? 참 : 거짓
> 조건이 참이면 앞에, 조건이 거짓이면 뒤에 구문이 실행된다.
```
var condition = true
condition ? 'condition is true' : 'condition is false';

= 'condition is true';
```
```
//ex 오늘은 무슨 요일일까여?
// 0,1,2,3,4,5,6

var today = 5;
var today_is = today === 0 ? '일요일' : 
				today === 1 ? '월요일' :
				today === 2 ? '화요일' :
				today === 3 ? '수요일' :
				today === 4 ? '목요일' :
				today === 5 ? '금요일' :
				today === 6 ? '토요일' : '차원의 문!';

console.log(today_is);
= 금요일
```
-switch문
	switch(조건){
		case 값: 실행 구문;
		case 값: 실행 구문;
		case 값: 실행 구문;
		case 값: 실행 구문;
		default: 위의 case가 일치하지 않으면 실행구문
	}
	```
	var today_is;
	switch(today){
	case 0: today_is = '일요일';
		break;
	case 1: today_is = '월요일';
		break;
	case 2: today_is = '화요일';
		break;
	case 3: today_is = '수요일';
		break;
	case 4: today_is = '목요일';
		break;
	case 5: today_is = '금요일';
		break;
	case 6: today_is = '토요일';
		break;
	default: today_is = false;

	}
	console.log(today_is ? '오늘은' + today_is : '차원의 문!');

	// switch case 응용
	

