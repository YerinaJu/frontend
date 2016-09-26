#DAY 34

### DOM 헬퍼 함수들 만들기
 **querySelectorAll() 메소드를 단축하여 사용할 수 있는 헬퍼 함수**

```
function queryAll(selector, context){
	//사용자가 올바른 데이터를 전달하였는가????를 검증해야함
	if(typeof selector !== 'string') {
		//조건이 참이 되면 오류가 발생한다.
		//selector_str의 데이터 타입이 문자열이 아닐 경우.

		throw new Error('첫번째 전달인자는 문자 유형이어야 합니다.');
	}
	// context를 지정하지 않으면 사용할 때마다 document에서부터 거슬러 올라가서 찾게 되니까 지정해줄 수 있으면 하고 아니면 그냥 document에서 찾고
	// if (typeof context === 'undefined') 

	if(!context){
		context = document;
	}
	return document.querySelectorAll(selector_str);
}

function query(selector, parent){
	return queryAll(selector, parent)[0];
}

```
- query(); querySelector와 같은 역할. 모든 선택자 애들을 찾아서 거기서 firstChild만 가지고 올때! [0]번째만 찾는다.
- queryAll(); querySelectorAll과 같은 역할. 모든 선택자 애들을 다 찾아온다.





##### 참고
> typeof 를 사용할 때의 약점, null은 object/배열은 object가 나온다.







#### 보충수업
**THIS**
어떤 값을 참조해오는 변화하는 변수, 자신이 포함한 context를 참조해온다.
실행시킨 주체를 context로 봐도 무방하다.

```
documnet.onclick = contextFn(); =>contextFn에서 this를 쓴다면, this = document이다.

window에서 this를 쓰면 this === window
```


**상태변수**
상태변수는 언제 만드나?? = 토글 toggle
상태 디자인: active, deactive, open, close, over, out ....
행동의 조건이 되는 것이 상태변수.

**throw**
throw를 던져야 error를 실행시켜 던져줄 수 있다.
