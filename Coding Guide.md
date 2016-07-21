# Coding Guide

## 1.HTML 가이드

### 기본 환경

**DOCTYPE**
- W3C에서 권장한 HTML5 기준으로 문서를 작성한다.
- 독타입 선언 방법
```
<!DOCTYPE html>
```
> DOCTYPE은 항상 문서의 최상단에 오게 해야 하며, 주석이나 다른 코드가 올라와서는 안 된다.

### 기본 문서

```html
<!DOCTYPE html>
<html lang="ko-KR">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=Edge">
	<title></title>
</head>
<body>
</body>
</html>
```
**Lang 선언**
- 기본은 ko-KR로 하되, 다른 언어를 쓸 경우 언어 코드를 참조한다.
**인코딩**
- 인코딩 방식은 UTF-8을 기본으로 하며, `<head>` 바로 밑에 선언한다.

### 코드 작성 규칙

**주석**
```html
<div class="wrapper"></div>
<!-- /.wrapper -->
```
- 코드가 끝날 때 '/클래스명 or 아이디명'으로 작성하여 마무리한다.
- '<!--'' 와 '-->'' 양 옆 1 space 만큼의 공백을 설정한다.

**공백**
- 코딩 시에, 모든 글자와 글자 사이의 간격은 1 space로 설정한다.
- 코드를 작성할 때, 코드와 코드 사이의 빈줄은 허용하지 않는다.

**들여쓰기**
```html
<ul class="gnb_depth8">
	<li>
		<a href="#" class="on">개요</a>
	    <span class="sp"></span>
	</li>
	<li><a href="#">인사말</a></li>
	<li><a href="#">조직도</a></li>
	<li><a href="#">CI 소개</a></li>
	<li><a href="#">어린이청소년극연구소</a></li>
	<li><a href="#">경영공시</a></li>
</ul>
```
- 마크업 중첩 시, 자식요소는  반드시 1 tab으로 들여쓰며, 1 tab은 4 space만큼의 공백으로 한다.
- html의 자식 요소인 `<head>`와 `<body>` 태그는 들여쓰기를 하지 않는다.

**네이밍 규칙**
- 모든 태그는 영어 소문자로 작성해야 한다.
- 클래스명이나 아이디명의 경우, 영어 소문자로 시작해야 하며, 숫자와 '-'를 사용할 수 있다.
- 단어와 단어 사이는 '-'로 연결한다. 
**속성 값**
- 세부 속성 값의 경우, ("..") 큰 따옴표로 작성한다.
```css
background-image:url("image/img-1.jpg");
```
- 예외로, font-family의 값과 content의 값은 ''작은 따옴표로 작성한다.
```css
font-family:'Noto Sans-KR';
content:'';
```

### 문서 구조

**문서 구조**
```html
<body>
	<div id="wrapper">
		<header></header>
		<main></main>
		<footer></footer>
	</div>
</body>
```
- 최상단은 #wrapper로 감싼다.
- 상단 영역은 header, 메인 영역은 main, 하단 영역은 footer 태그로 구조화하며, 이는 div id값으로 대체가 가능하다. main을 div id값으로 대체 시킬 경우 #container로 구조화 한다. 

### FORM
```html
<form>
<fieldset>
<legend></legend>
	<input>
</fieldset>
</form>
```
- form에 인접한 fieldset, legend는 들여쓰기 하지 않는다.
- 사용자 접근성을 위해, input 요소 등에 label를 연결을 지향한다.

<br><br>

## 2.CSS 가이드

### 기본 규칙

**인코딩 선언**
- 문서 선언의 가장 최상단엔 `css @charset "UTF-8";` 인코딩 선언을 설정한다.

- 스타일시트를 불러올 때 외부 스타일시트 `<link>`를 이용하여 불러오며, `@import`는 사용하지 않는다.
- url 값은 "" 큰 따옴표를 쓰며, 폰트명의 경우 ''작은 따옴표를 사용한다.
- 선택자는 최소한으로만 사용한다.

**네이밍 규칙**
- 아이디, 클래스명은 영어 소문자와 숫자로 기입한다.
- 아이디, 클래스명에는 대문자를 넣지 않는다.

> listSearch(X)

- 단어와 단어 사이는 반드시 '-'로 구분한다.

### 속성

**속성 선언 순서**
- 속성 선언 순서는 다음을 따른다

순위 | 속성별 태그 |
---- | ---- |
**1순위** | layout 관련 속성 (display, visibility, overflow, float, clear, position, top, right, bottom, left, z-index) |
**2순위** | box 관련 속성 (width, height, margin, padding, border) |
**3순위** | background 관련 속성 (background-,) |
**4순위** | font 관련 속성 (font-, color, line-height, letter-spacing, text-align, text-decoration, text-indent, vertical-align, white-space) |
**5순위** | 기타 (content, ...) |

**속성 선언 규칙**
- border와 background의 경우, 속기형 작성법을 우선시 한다.
```css
.body{
	border:1px solid #000;
	background:url("img/image1.jpg") no-repeat center;
}
```

**z-index** 
- z-index의 값은 5 단위로 쓴다.


**핵**
- 핵의 사용은 최대한 지양하며, 필요할 경우 html 문서 상단에 ie 조건부 주석문을 사용하여 처리한다.
```
<!--[if IE 6]><html lang="ko-KR" class="ie6"><![endif]-->
<!--[if IE 7]><html lang="ko-KR" class="ie7"><![endif]-->
<!--[if IE 8]><html lang="ko-KR" class="ie8"><![endif]-->
<!--[if IE 9]><html lang="ko-KR" class="ie9"><![endif]-->
```

<br><br>
## 3. 폴더 가이드

- 폴더명은 영어 소문자와 숫자로만 이루어져 있어야 하며, 기호는 '-'만 허용이 가능하다.
- 프로젝트의 경우 프로젝트명이나, 홈페이지명으로 대폴더를 구성한다.
- 개인적인 문서는 0000 네자리의 날짜명과 -를 붙인 뒤, 문서의 제목을 기입한다.
> `0712-holzweiler`



