# DAY30 TIL

## 자바스크립트

### 기본
- 표준 명칭은 ECMAScript (자바스크립트, 액션스크립트, j스크립트)
- 문서 객체 모델(DOM)에 접근하여, 조작하고 제어할 수 있는 클라이언트 & 서버 사이드 언어이다.
- 스크립트는 css와는 다르게, 계속해서 서버요청을 받아오기 때문에 속도가 굉장히 느리다.
- 그래서 body의 하단에 불러오는 것을 권장한다.


### 변수
- 자바스크립트 변수는 변수 이름 앞에 var 키워드를 붙인다!
`var dp = window.devicePixelRatio`
> Sass는 $로 변수를 선언한다.

- 변수 이름은 카멜케이스(음절과 음절 사이를 붙일 때 뒷 음절의 첫글자가 대문자 인 것.) 표기식을 사용한다.
`calmelCase`

- 문장 끝에는 반드시 세미콜론;을 붙인다.

- 변수의 필요성? ; 사용자가 입력한 값을 기억해서 다시 재사용할 수 있다.
```script
<!-- ex -->
var name = window.prompt("당신의 이름은 무엇입니까?");
window.alert(name+"님 환영합니다");
```

### 자바스크립트의 분류
- 코어핵심 Ecmascript
- 문서 객체 모델 (Document Object Model) - DOM에 도움을 주는 라이브러리가 JQUERY다.
- 브라우저 객체 모델 (Browser Object Model) 

> 모델이란? 문서의 구조도, 가계도 를 모델이라고 할 수 있다. header 모델, footer 모델 등으로 구분될 수 있음. <br>

#####1. BOM
Browser Object Model 
- 브라우저 모델은 tree 형식으로 모델이 이루어져 있다.
```
window (전역 객체 모델, 브라우저창)
ㄴ document(문서) - DOM 관련
ㄴ event (이벤트) 
ㄴ location(주소창)
ㄴ history (기억 - 캐시) 
navigator(브라우저)
screen(화면)
```


* 웹 브라우저의 콘솔 패널에 기록을 남길 때

```script
<!-- ex1 -->
var dp = window.devicePixelRatio;

`console.log('기기의 픽셀 농도:', dp);`

if(dp == 1){
	console.log("일반 디스플레이의 픽셀 농도를 가집니다.");
} else if(dp > 1){
	console.log("고해상도 디스플레이의 픽셀 농도를 가집니다.");
} else {
	console.log("일반 디스플레이의 픽셀 농도를 가집니다.")
}

//Sass에서의 스크립트와 유사하지만 차이점을 보이는데, Sass에서는 debug를 통해 로그를 확인할 수 있다! <br>또한 조건문의 경우 Sass에서는 괄호가 필요없지만, 자바스크립트에서는 조건을 반드시 괄호안에 넣어줘야 한다.
```
``` 
<!-- ex2 -->
var window_w = window.innerWidth;
var window_h = window.innerHeight;

console.log("window_w:", window_w);
console.log("window_h:", window_h);

> innerWidth / innerHeight = css의 vw,vh와 같은 역할을 한다. vw와 vh가 없었을 땐 자바스크립트로 처리를 하였다.

```
<!-- ex3 -->
// html 문서가 `<script>`를 만나게 되면, 웹 브라우저가 해석을 잠시 중단시킨다.
// 그럼 문서가 채 완성 되지 않는 상태이기 때문에 <br> 어떤 특정 이벤트(특정 시점에 실행하게 하는 것)를 발생시켜변수를 만들지 않는 이상은 변수의 값을 가져오더라도 <br> 처음 담긴 변수의 값(여기선 아무 것도 정의 된 것이 없으므로 undefined가 된다.) 그대로 담기게 된다.
> 그래서 스크립트가 문서를 로드하기 전에 읽히지 말아야 한다라고 미리 명령할 수 있다.
> window.onload
var scroll_y; // undefined
if(window.scrollTop){
	//만약 window 객체 모델에 scrollTop라는 속성이 있을 경우(조건이 true일 경우)
	// scroll_y에는 scrollTop 속성이 담기게 한다.
	// 구형 ie에서는 scrollTop를 지원한다.
	scroll_y = window.scrollTop;
} else {
	// 그렇지 않을 경우 (위 조건이 false일 경우)
	// scroll_y에 scrollY라는 속성을 담기게 한다.
	scroll_y = window.scrollY;
}
```
> 이미 사용자가 객체의 속성이 정해져 있는 그대로 덮어쓰게 된다면, 덮어쓴 값 그대로 출력이 된다. (자바스크립트의 약점이자, 태생적인 한계) 자바스크립트 환경은 문법이 엄격하지가 않기 때문이다.


**window**
- `window.속성값 ()`으로 사용한다.
- `.속성값` 을 Dot Syntax라고 부르며, 속성값()이라는 함수를 window라는 객체가 가지면서 method라고 부른다. 
- window. 는 전역객체임으로 생략이 가능하다.
> window.document.getElementsByTagName => document.getElementsByTagName
```script
window.alert('알림창을 띄워라.')
```

** window.method()**

```script
<!-- alert -->
window.alert("다이얼로그 창을 띄움으로써 사용자에게 메시지를 보여준다.");

<!-- prompt -->
var name = window.prompt("당신의 이름은 무엇입니까?");
window.alert(name + "님 환영합니다.");
// 사용자의 입력 값을 받아왔다면 이를 기억해두기 위해서 변수가 필요하다.

<!-- confirm -->
var student = window.confirm("당신은 학생입니까?");
console.log("student:", student);
// 변수의 담긴 값의 Boolean값을 가져온다. -> console창에서 확인이 가능하다.

// 조건문을 사용.
if (student == true){
	window.alert("공부하세요.");
} else {
	window.alert("잠을 자세요.");
};

<!-- open -->
window.open("http://naver.com")
// 새 창으로 페이지가 팝업으로 뜬다.

<!-- 시간을 제어하는 window 객체의 메소드 -->
window.setInterval(할일(함수), 시간(밀리초)); //주기마다 계속 반복
window.setTimeout(할일(함수), 시간(밀리초)); // 1회만

var count = 10;
function countDown(){
	count = count -1;
	console.log(count);
	return count;
}
=> window.setInterval(countDown, 2000);
// 위와 같이 주기마다 수행되는 일을 처리할 경우, setInterval 하나로 사용이 가능하다.
// Interval의 경우 멈추지 않고 계속 실행되기 때문에, `clearInterval(변수이름);`을 조건문에 사용하여 해당 조건이 충족될 시 인터벌이 멈추게 해주어야 한다.
// setInterval의 경우, 성능 저하 이슈 등의 문제가 있다. `window.requestAnimationFrame()` 을 사용하면 좀 더 유려한 애니메이션을 구현할 수 있다.
```

**location**

- 주소창을 의미하는 객체. 사용자의 포트넘버, 주소이름 등등을 알아낼 수 있다.
- href / protocol / domain / hostname / pathname /search / port / hash (#목적지 ID) / reload (새로고침) / replace(주소이름을 다르게 변경) 등등 값을 가져오고 넣어줄 수가 있다.

**history**
- 뒤로가기, 새로고침, 앞으로 가기 등등을 가진 객체. (주소창 옆)
```
history.go(1) //1페이지 앞으로 forward
history.go(-2) //2페이지 뒤로 back
```

**screen**
- 브라우저를 포함한 모니터 화면 전체
```script
screen.width //스크린의 가로 해상도 넓이 (1366)
screen.height //스크린의 세로 해상도 넓이 (768)
screen.availWidth(Height) // 스크린 상에서 사용가능한 창의 넓이
screen.orientation.angle -> 이건 모바일에서만 사용 가능하다.
```
**navigator**
```script
userAgent 브라우저 식별자 

<!-- ex -->
navigator.userAgent.indexOf('Mozila') > -1
= true
// indexOf는 해당 값이 몇번째 글자에 속해있는 지 알려준다. 0번째부터 시작하며, 해당 값이 들어 있으면 -1보다 크니 해당 값이 존재한다고 알 수 있다. 값은 true.
// 문자열 값에 iphone 등을 쓰면 사용자가 어느 기기를 사용하고 있는 지 확인이 가능하다.
// 이러한 방법은 (Browser snipping)이라 한다.

navigator.vendor // 해당 제조사를 확인 할 수 있다.
```


##### 2. DOM
Document Object Model
- document에 접근하고 제어한다. (DOM Script)
`
window.document.title`

```
document.activeElement
// 현재 포커싱이 되어있는 대상을 가져옴! 접근성 관점에서 매우 중요함!
```

##### 참고
`==`와 `===`의 차이?
> ===를 세 개 쓰는 이유는 좀 더 ===로 나뉜 요소를 엄격하게 비교할 수 있다. `==`로는 정확하지 않은 것을 `===` 를 사용하여 쓴다.
