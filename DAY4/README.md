0617 DAY4 내용 정리
==================

### Image 

``` 
<img src="이미지 경로" alt="대체 텍스트"> 
```
* 필수 속성 src (source), alt (alternate text)
* width(가로값)값과 height(세로값)값은 사용자 환경을 위해 적어두면 좋다. (선택 속성)



### Imagemap

```
<img src="1.jpg" usemap="#imagemap" alt="대체 텍스트">
<map name="imagemap">
     <area coords="좌표" href="목적지경로" alt="대체 텍스트" title="타이틀값">
</map>
```
* 속성 값 <br>
  - target : 링크를 눌렀을 때 새 페이지를 띄울 것인지 정할 수 있다. (_blank; 새 창 띄우기)
  - shape : map 모양 rect / cir / poly <br>
  - coords : 좌표값 rect: x1,y1,x2,y2 <br> 
  - title : 마우스를 갖다대면 툴팁으로 타이틀 값을 확인할 수 있다. 모바일에서는 지원하지 않는다.
* 만약 이미지맵이 서로 겹쳐질 경우 먼저 정의된 영역이 우선시 된다. <br>
* 관련 사이트 <br>
 - [이미지 맵 코드 생성](https://github.com/summerstyle/summer)
 - [맵 좌표를 반응형으로](https://github.com/stowball/jQuery-rwdImageMaps/blob/master/jquery.rwdImageMaps.js)
 

--
 
###List
* 순차 목록 (ordered list) : ol
* 비순차 목록 (unordered list) : ul
* 목록 (list) : li
```
<ol>
	<li>1.불</li>
	<li>2.물</li>
</ol>

<ul>
	<li>신발</li>
	<li>바지</li>
	<li>모자</li>
</ul>
```
```
<ol>
  <li class="depth1>
    <ul>
  </li>
</ol>
```
* 정의 
  - 정의 목록(definition list) : dl
  - 정의 용어(definition term) : dt
  - 정의 설명(definition description) : dd
```
<dl>
  <dt>온새미로</dt>
  <dd>자연 그대로, 언제나 변함없이</dd>
  <dt>마루</dt>
  <dd>"하늘"의 순우리말</dd>
</dl>
```
> * ul과 ol 안에는 li, dl ㄴ에는 dt와 dd만 들어올 수 있다.
> ```
> <ol>
>   <li class="depth1>
>     <ul>
>       <li></li>
>     </ul>
>   </li>
> </ol>
> ```
> * li 안에 또 다른 ul이나 ol이 depth 형식으로 들어올 수 있다. 
> * dt 안에 dd는 여러 번 사용이 가능하다. 다음 dt를 만나기 전까지 dt의 용어를 설명해준다.

-
###Blockquote

```
<blockquote cite="http://naver.com">
	<p>일단 움직여라. 실수는 나중에 고쳐라.</p>
	<cite>에디슨</cite>
</blockquote>
```
* cite 속성을 이용해서 출처를 남길 수 있다.

-

###Table
```
<table>
  <caption>테이블 제목</caption>
  <thead>
    <tr>
      <th scope="row">Element</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <td colspan="2">total score</td>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <th>Base</th>
      <td>1</td>
    </tr>
  </tbody>
</table>
```
* caption : 테이블의 제목을 설정할 수 있다. 접근성을 위해 WAI-AREA 방식이나 blind를 이용해 숨겨놓는다. 
* thead, tbody, tfoot : 테이블의 구성. 생략가능하며, tbody는 선언하지 않아도 자동으로 생성된다. <br>  *tfoot의 경우 tbody보다 먼저 선언되어야한다.
* tr (table row) : 행 / th (table cell header) : 테이블 제목 / td (table cell data) : 테이블 내용 
* scope : 행이나 열의 제목임을 표시한다.
* col / row : col은 열(세로), row는 행(가로)을 의미하며 각각 colspan과 rowspan을 이용하여 행과 열을 합칠 수 있다.
* table summary : 화면에는 표시되지 않지만 접근성을 고려하여 테이블의 설명을 써넣을 수 있다.
  
  > summary 속성은 html5에서는 없어졌기 때문에 WAI-AREA 속성을 이용하여 바꿔쓴다. (접근성의 문제)<br>
  >      ex) `<p id="metadata-table-summary">본 표는 4행 3열로 구성된....</p> <table aria-describedby="">`<br>

-
###Form
```
<form action="#" method="post" enctype="multipart/form-data" name="register_form">
	<p>
		<label for="user_id">ID</label>:<input id="user_id" name="user_id" type="text">
	</p>
	<p><label for="user_pw">pw</label>:<input type="password" name="user_pw" id="user_pw"></p>
	<p><label for="user_email">email</label><input type="email" name="user_email" id="user_email"></p>
	<p>
		<button type="submit">전송</button>
		<button type="reset">리셋</button>
	</p>
</form>
```
* form의 속성 값
  - action : form을 전송하는 목적지 ex) login.php
  - method : form을 전송하는 방식 
  
    > get : 보안x / 데이터제한 <br>
    > post : 보안o / 데이터제한 없음 (중요한 개인정보를 보낼 때 사용한다.)
  - enctype : 파일 인코딩 타입. 파일을 업로드할 시에만 쓴다.
  
* label
```
  <!-- input의 암묵적 레이블 -->
	<label>ID:<input type="text"></label>
	<!-- 명시적 레이블 -->
	<label for="user_id">ID</label>:<input id="user_id" name="user_id" type="text">
```

-
###Display
* block / inline : block은 한 줄을 다 차지하는 영역 / inline은 해당 요소만큼 차지하는 영역
* chrome 개발자 도구에서 filter 검색시 각 태그별 display 확인이 가능하다.

-
#### ETC
* <abbr> 축약 요소에 마우스가 올라가면 UI 커서 모양이 도움말(?) 표시로 바뀐다. 
  ```
  abbr[title]{cursor:help}
  
  <!-- []는 속성 선택자 (Attribute Selector) -->
  ```
* emmet 속성
  - ctrl+shift+g 요소 작성=> 요소로 감싸진다.
* base <br>
  ```
  <base href="/" target="_blank">
  ```
  <br>
  head 안에 넣어서 쓰는데, base를 쓰게 되면 base에 쓰인 모든 요소에 적용이 된다.


==
#### 오늘의 참고 사이트
* [브라우저별 테스트](http://browserstack.com)
* [MDS](http://developer.mozilla.org)
* [meta 태그 속성](http://cafe.naver.com/webstandardproject/603)



