# DAY1

## HTML 기초

#### HTML 기본 태그
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>	
</body>
</html>
```

* DOCTYPE *
```html
<!DOCTYPE html>
// HTML5 선언 태그
```
* 가장 최상위에 존재해야 하며, doctype 선언이 없다면 비표준모드로 실행된다.

> console 창에 document.compatMode 를 통해 표준인지 비표준인지 확인이 가능하다. 
> CSS1Compat 이 뜬다면 표준! BackCompat이 뜬다면 비표준!

* HTML *
```html
<html>
<head></head>
<body></body>
</html>
```
* html 문서에는 `<head>`와 `<body>`만 올 수 있다.
* html 태그에는 language 선언이 가능하며, lang 선언을 통해 주요 언어를 명시해 줄 수 있다.
```html
<html lang="ko-KR" dir="ltr">
// ko는 한국어, KR은 남한임을 명시한다. lang은 문서 중간에도 선언이 가능하다.
// dir은 문서를 읽는 방향을 제시한다. 기본은 ltr이며, rtl도 지정해 줄 수 있다.
```

* head 태그
- charset
```html
<meta charset="UTF-8">
// 언어 깨짐을 방지하기 위해 utf-8 유니코드를 사용한다.
// 문서에서 가장 먼저 처리해야 하기 때문에 title 보다 반드시 먼저 써야 한다.
```

- 브라우저 최적화
```html
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
// 
// 익스플로러 최신버전에 최적화
// 코드를 쓰지 않으면, ie가 강제로 7로 랜더링 된다.
// http-equiv 는 사용자가 요청한 값을 웹 브라우저가 먼저 확인해서 우선시 처리한다. content-type을 html로 읽어라. utf-8로 읽어라 등등..
```
