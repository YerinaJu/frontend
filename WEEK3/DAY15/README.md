# DAY 15 TIL

### float 속성

* float ; img 요소를 좌/우로 부유시켜 텍스트가 이미지를 둘러싸도록 설정하기 위해서 고안된 기술. 오늘 날엔 그리드 시스템(멀티 컬럼 레이아웃)에 활용됨.
```
.div{
	float: left;
	float: right;
	float: none;
}
```
* img의 알 수 없는 공백은 vertical-align 속성 뿐 아니라 float를 사용해서도 없앨 수 있음.

> HTML 모든 요소는 float속성 기본 값이 none으로 설정되어 있습니다
> 이를 사용자가 필요에 따라 float 방향을 왼쪽과 오른쪽으로 설정할 수 있습니다.
> 이에 따라 float가 적용된 요소의 뒤에 마크업(구조화)된 요소는 float의 영향을 받습니다.

### float 해제

* overflow: hidden;
* clear : left / right / both / none 

현상 1. 자식 요소에게 float를 먹일 시 부모의 높이 값이 사라지는 현상
- 해결 1. 부모에게 똑같이 float를 준다. 
```
.parent{
	float:left;
	height:100px;
	margin-left:auto;
	margin-right:auto;
	border:1px solid #eceded;
	margin-bottom:2rem;
	background: #efefef;
}
.child{
	float:left;
	width:140px;
	height:100px;
	text-align:center;
	line-height:100px;
	color:#fff;
}
```
> 자식만큼 높이가 생기기 때문에 자식을 완전히 감쌀 수 있다! 
> 그러나 모든 요소를 다 float 시켜야 하기 때문에 무한 float에 빠질 수 있고 요소를 가운데 배치 시키는 것도 못하니 쓰지 말 것!

- 해결 2. 새로운 요소를 추가 후 clear를 시킨다. 
```
.parent{
	border:1px solid #eceded;
	margin-bottom:2rem;
	background:#efefef;
}
.child{
	float:left;
	width:140px;
	height:100px;
	text-align:center;
	line-height:100px;
	color:#fff;
}
.clear{
	clear:both;
}
```
> 의미는 없되, 표현을 위한 목적으로 <div>요소를 생성하여 clear를 설정한다. 
> 그러나 빈 요소를 넣는 것은 금물. 절대 쓰지 말 것!! 

- 해결 3. 부모 요소에 overflow:hidden 이나 auto 값을 설정한다. 
```
.parent{
	overflow:hidden; / overflow:auto;
	border:1px solid #eceded;
	margin-bottom:2rem;
	background:#efefef;
}
.child{
	float:left;
	width:140px;
	height:100px;
	text-align:center;
	line-height:100px;
	color:#fff;
}
```
> 해결 1번처럼 자식 요소만큼의 높이가 생긴다. 
> 그러나 hidden을 쓸 경우 부모 요소보다 클 경우에 자식 요소가 잘리는 경우가 생기거나, auto를 중 경우 스크롤이 생길 수 있다. 실무에서는 많이 사용하지만 쓰지 말하야 할 방안!!

- 해결 4. .clearfix 클래스를 설정한다. (두번째 방법을 의미적으로 사용할 수 있도록 응용한 방법)
```
 4-1
 .clearfix::after{
 	content:'pseudo element';
 	display:block;
 	clear:both;
 	visibility:hidden;
 	height:0;
 }
4-2
 .new-clearfix::after{
 	content:'';
 	display:block;
 	clear:both;
 }
4-3
 .micro-clearfix::before,
 .micro-clearfix::after{
 	content:'';
 	display:table;
 }
.micro-clearfix::after{
	clear:both;
} 
```
> .clearfix::after를 사용해 부모 요소에 밑에 clear를 주게 되면 float가 해제된다. 따로 모듈화가 가능하며 가장 올바른 방식이다. <br>권장하는 방법은 4-2번과 같은 content값을 비워두는 것이다. 
> 대신 ie6이나 ie7일 경우에는 가상요소가 먹지 않으므로 zoom:1;을 조건부 주석문을 이용해 부모 요소에 넣는 방법이 있다.

현상 2. image를 float 시킬 경우 텍스트가 이미지를 둘러싸는 현상. => 이미지 하단에 공백을 형성하여 텍스트를 옆으로 배치시키게 한다.
- 해결 1. 텍스트에 padding 좌우 값을 설정한다. 그러나 유지보수 측면에서 좋지 않다.
- 해결 2. float가 된 다음 단락 요소에 overflow:hidden을 준다.
```
.image-container.blank-bottom-img img + *,
img.blank-bottom + * {
  overflow: hidden;
}
/* 이미지의 부모요소에 class를 삽입하거나, img에 직접 멀티클래스를 삽입하거나 해서 overflow:hidden을 먹인다! */ 
```
> img의 영역이 제 값만큼 제대로 먹게 된다. 그러나 img 다음 단락이 하나일 때만 적용이 가능하다. 

### ETC
- svg 코드로 짠 그림이기 때문에 코드 상에서 이미지를 수정할 수 있고 아무리 크기를 바꿔도 절대 깨지지 않는다.!!
이미지맵처럼 좌표값을 불러옵니다!!!
- calc(100% - 300px) css함수 -> 최신브라우저에서만 사용이 가능합니다.
