# day32

## DOM
##### DOM lv.0

**form**
a 요소가 네임을 가지고 있으면 anchor
a 요소가 href를 가지고 있으면 links

> 오늘날에는 네임을 사용하지 않지만, form에서는 서버에 전송할 떄 이름값이 있어야만 식별이 가능하기 때문에 name을 사용하면 좋다.
> 자바스크립트에서는 -를 지원하지 않는다. form.primary-form => form['primary-form']

`document.forms[0].onsubmit = validateform; ` => 서버단에 요청하기 전에 프론트단에서 이미 값을 validate해 줄 수 있다.!

> form요소에는 접근성을 위해 label이 무조건 있어야 한다! label과 placeholder 는 엄연히 다르기 때문에, 대체해서는 안된다.

**중급 DOM**

`document.all `
```
if(document.all){
	// IE에서 지원
	console.info('ie다!')
} else {
	// Nescape Navigator에서 지원 ('NN이다!')
}
// 옛날 legacy코드! 좋지 않음. 지금은 document.all은 모두 지원한다. 지금은 쓰지 않는다.
```
##### DOM lv.1 표준화 

DOM 표준화가 진행되어 정식으로 제정됨.
```
document.documentElement
document.getElementsByTagName()
document.getElementsByID()
// 지금도 사용함
-------------------------------------------------------------------

var root_element;
root_element = document.documentElement;//html 문서
root_element = document.getElementsByTagName('html')[0];//xml,html문서에서만 사용 가능
console.log(root_element); //<html> - 비표준 ie에서는 body를 가리키게 된다.

var head = document.head;
var body = document.body; //html에서만 사용 가능.

// xml과 html에서 쓸 수 있는 코드가 다르다!

var inputs = document.getElementsByTagName('input');
var buttons = document.getElementsByTagName('button');
console.log('inputs:', inputs);
console.log('buttons:', buttons);
```

* id 속성을 통한 접근 방법(interface: selecting)
```
var c_id = document.getElementById('c_id');
var c_mail = document.getElementById('c_mail');
console.log('c_id:'c_id);
console.log('c_mail:'c_mail);
```

##### DOM lv.2

현재 사용되는 진보된 이벤트 모델 제시.
(표준으로 제정된 lv.4에서는 커스텀할 수 있는 이벤트가 지정되었다~~~~)


##### DOM property(DOM 속성) <br>객체가 소유한 속성

**node interface**
- node가 제공하는 인터페이스를 사용한다.
`document. `으로 시작한다.
```
// html 접근하기
document.documentElement;
document.getElementsByTagName('html') -> xml에서 지원

// head와 body 접근하기
document.head;
document.body; //쉽게 접근이 가능하다.
```
```
<p>
	<strong>Hello</strong>How are you doing?
</p>

<!-- script -->
var first_para = document.getElementsByTagName('p').item(0);
var first_para_nodes = first_para.childNodes;

console.log(first_para_nodes[0].nodeType === document.ELEMENT_NODE);
// p 바로 밑에 공백은 textnode로 인식한다.
console.log(first_para_nodes[1].nodeType === document.ELEMENT_NODE);
console.log(first_para_nodes[2].nodeType === document.TEXT_NODE);

= false
= true
= true

> ELEMENT_NODE 대문자는 상수로 사용한다.
> document.ELEMENT_NODE 대신 요소 속성을 의미하는 숫자 1을 넣을 수 있다.
> document.TEXT_NODE 텍스트 속성은 3
```

**자식노드**
- parentNode
- firstChild
- lastChild
- childNodes[0,1,2....]
