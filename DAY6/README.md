# 0622 DAY7 복습

###script
* `<script>`는 head 마지막에 부르는 것이 좋다. 스크립트는 파일 불러오는 방식이 직렬 방식이기 때문에 `<style>`요소가 더 먼저 선언되어야 함.
* object - 이미지 오디오 비디오 액션 플래시 등을 넣을 때 썼지만 요즘은 거의 쓰지 않음.
> `<object type="image/gif"><p>대체 텍스트</p></object>`
*parameter - param

### 인용
- 긴 인용 `<blockquote></blockquote>`
-짧은 인용 `<q></q>`

### 축약
*abbr 표준 축약어 - abbreviation (ie6에서는 abbr을 쓰지 못합니다 ie6에선 acronym-비표준)
* address 이메일 주소 등 웹 상에서 연결될 경로를 넣는것 p/div 같은 block 요소는 쓰지 못합니다.
```
<address>
<a href="mailto:j35148@hanmail.net">예리나 이메일 주소</a>
</address>
```

* ins insert text ; 불필요한 단어나 문장 대신에 새로운 단어랑 문장을 삽입합니다.
* del delete text ; 불필요한 단어를 삭제하는 의미입니다.

* frame / frameset / noframes : html 4.01버전에서 쓰이던 코드. 각각의 섹션..프레임을 변경하고 싶을 때 쓰였습니다. frameset에 각각 cols의 넓이를 %로 지정이 가능합니다.
* iframe

### html5
* 상위, 하위 호환이 모두 가능함.
* 독타입 선언이 간소화됨
* 문자 인코딩도 간소화됨
* type 선언을 굳이 쓰지 않아도 자동으로 지원이 됨.

* 태그요소 
	- section article aside nav main ; 섹션요소
	- header footer ; 굳이 안써도 됩니다. header나 footer 사이에 nav같은 section요소를 넣을 수는 있습니다.
	- time ; 날짜 정보를 알려줍니다.
	- datalist
	- datails & summary ; 요약과 요약에 대한 자세한 정보
	- figure &figcaption ; 이미지나 도표나 차트를 묶어줍니다. & 이미지 정보
	- canvas



* block element의 특징
	- 개별적으로 스타일설정을 하지 않았다면, 부모 요소 영역만큼 가로 크기가 커진다. (기본 값은 auto)
	- 요소의 높이 height는 부모와 상관없이 요소가 포함하는 자식 요소들의 크기에 좌우된다.
	- 별도로 가로 width 세로 height 크기 설정이 가능합니다.
	- block요소는 내부에 인라인 요소를 감쌀 수 있습니다.

* inline element의 특징
	- 자신을 포함한 부모 요소의 영역과 상관 없이 자신이 포함하는 자식 요소 또는 텍스트만큼만 가로, 세로 크기를 가진다.
	- 별도로 가로, 세로 크기 설정이 불가능하다.
	- 인라인 요소는 내부에 블록 요소를 감쌀 수 없다.(단! 예외 사항: a 요소는 블록요소를 감쌀 수 있다.)

* html5에서는 a 요소가 블록 요소를 감쌀 수 있도록 변경되었지만, 내부에 또 다른 클릭 가능한 버튼 같은 게 존재한다면 문법 오류가 생깁니다.

### css
* css 기본 문법? ; 선택자 {속성:값;} / 선언문장의 끝에는 반드시 세미콜론(;)을 추가합니다
* 1em = 16px (브라우저의 기본 렌더링 값)

* css파일을 분리시킬 때 최상단에 `@charset "utf-8";`을 선언해주어야한다. 뒤에 세미콜론이 빠지면 x

* 스타일 모듈 파일 로드
> link rel 병렬 방식과 달리 @import는 직렬 방식이기 때문에 로드 시간이 오래 걸립니다.
```
@import url("style.css");
@import url("common.css");
@import url("grid.css");
@import "layout.css";
```
* css selector
> {}모든 요소 선택 (덮어쓰기가 불가능 하기 때문에 주로 초기reset 선언을 할때 쓰입니다.)
```
h1{}
h1,h2,h3{} (grouping)
h1 p{}
```
