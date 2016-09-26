# DAY40
## 자바스크립트

####객체
null과 undefined를 제외하면 모든 것은 객체이다.
객체는 속성과 메소드(함수)를 포함한다.
속성은 변수, 메소드는 함수

생성자 함수 + new = 새로운 객체
```
new Array = [];
// 객체는 실체화하지 않으면 사용할 수 없다. 그래서 new 생성자를 통해 실체화 시켜야 한다.

function Coffee(name){
// 생성자 함수는 관계 상 첫글자가 대문자이다.
	this.name = name;
	//return 으로 객체를 생성하는 느낌?????????
}

var americano = new Coffee('아메리카노');
var latte = new Coffee('라떼');
var mocha = new Coffee('모카');
```
객체의 인스턴스 - 실체화된 객체

> math 객체는 new가 필요없다.

객체에는 반드시 constructor를 가지고 있다. 객체가 아닌 null과 undefined는 제외.
prototype => 원형객체

__proto__ 를 통해 객체의 속성을 파악할 수 있다.


