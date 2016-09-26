#0629 css

### CSS 박스 모델
* css box 모델 -> margin - (outline) - border - padding - content
	- margin ; 투명한 배경이며, 배경색이 적용이 안됨. 또한 - 값을 가질 수 있다.
	- border ; 테두리 영역이며, 위 아래 양 옆 다 각자 다른 색을 가질 수 있다, 또한 대각선을 기준으로 갈라집니다.
	- padding ; 내부 여백 영역/색 설정이 가능합니다.
	- outline의 경우 실제 컨텐츠에는 영향이 가지 않지만 시각적으로 표현이 됩니다
	- content ; 컨텐츠 영역


### block과 inline
* block의 width는 부모요소에, height는 자식 요소에 영향을 받습니다.
* inline은 자식 요소에 영향을 받습니다.
* block에 width를 설정하지 않고 브라우저를 줄이면 반응형처럼 자동으로 크기가 줄어들지만, inline은 밑으로 공간이 떨어지게 됩니다!! 
p태그 안에 텍스트의 경우에도 inline요소이기 때문에 글이 밑으로 떨어지는 것입니다!!! 만약 block요소라면 떨어지지 않고 스크롤이 생기겠죠??????

* width 
	- 표준에서는 컨텐츠의 값만 width이지만 비표준모드에서는 보더값까지 컨텐츠로 인식합니다. 독타입이 없어도 비표준모드로 인식이 됩니당
	- inherit : 부모에게 상속(잘 쓰지 않습니다; 상속받지 않는 input요소에 쓰이기도 합니다)
* max-width ; width의 최댓값을 설정
* min-width ; width의 최솟값을 설정
* vh = viewport height / vw = viewport width
### margin
* margin auto는 자동으로 값을 계산하는 것입니다. left만 auto를 주면 빈 공간 중 자동 계싼해서 남은 부분만 left가 가져가는 것, 양쪽에 auto를 주면 양쪽 똑같이 margin값을 나눠 가져갑니다.
* 비표준모드에서는 margin:auto가 먹질 않아서 text-align:center로 먹는 경우가 있어요
* 가운데 정렬 margin:0 auto; 음수값이 가능합니다!
* 세로 정렬 `parent{height:10em;line-height:10em};박스의 값만큼 line-height값을 주면 세로 정렬이 ok`
* li 안에 img를 두는 경우 ul 밑에 공간이 생기는데, 이럴 경우 img에 vertical-align:bottom 이나 middle을 넣으면 사라집니다. 참고로 vertical-align은 block요소에서 먹지 않습니다. inline이나 table-cell요소에만 먹습니다.
* margin요소는 위 아래로는 겹치지만 양 옆 여백은 겹치지 않습니다. 가장 큰 마진의 값이 적용이 됩니다. (margin-collapsing)
>a{margin-bottom:30px;},b{margin-top:20px;}=>margin:30px이 적용!
>a{margin-right:30px},b{margin-left:20px}=>margin:50px이 적용!
!!!!!!
* 부모에 PADDING값과 BORDER가 없을 경우, 부모 안에 있는 자식 요소에 MARGIN-TOP가 들어가면 자식이 부모를 뛰쳐나가게 됩니다. 그럴 때 다시 BORDER나 PADDING을 넣으면 원래대로 돌아옴 아니면 그냥 부모 요소에 padding값을 주는 게 더 좋을 것 같아여 
부모에 width나 height 지정이 안되면 뛰쳐나가진 않아여 ㅎ
!!!!!!

margin의 속기형
	- margin:value1 value2 value3 value4
	- margin:value1 value2 value3
	- margin:value1 value2
	- margin:value1 




### em 단위 사용의 어려움
* css 부모 요소의 상속을 받기 때문에 상위 부모를 기준으로 1em을 잡습니다.

### rem ; root em => html의 font-size를 상속받습니다.
사이즈가 다른 디바이스의 크기를 맞추기 위해 부모 요소의폰트 사이즈만 바꾸면 자동으로 모든 요소의 폰트사이즈가 바뀝니다. ie에서는 9이상부터 부분지원(속기형으로 쓸 땐 X), 11부터는 완벽지원입니다. 8이하를 위해서 px값을 같이 써줘야 합니다

###media쿼리
```
@media only screen and (max-width:600px){
	/*미디어 쿼리 안에서 em단위는 rem처럼 기본 값을 16px으로 먹고 들어갑니다.*/
	body::before{
		content:'스크린의 폭이 600px보다 작습니다.';
	}
	body{
		background-color:#000;
	}
}

@media only screen and (min-width:601px) and (max-width:1000px){
	body::before{
		content:'스크린의 폭이 600px보다 크고 1000px보다 작습니다.';
	}
	body{
		background-color:#555;
	}
}

@media only screen and (min-width:1000px){
	body::before{
		content:'스크린의 폭이 1000px보다 큽니다.';
	}
	body{
		background-color:#fff;
	}
}
```

### font 와 text
font는 글꼴 디자인
text는 문서의 정렬이나 


font 색상 - color: (키워드로 쓰는 경우도 있음 ex)red) / hex-code #ffffff; / rgb rgb(34%,23%,20%) = >이건 alpha값을 넣을 때 사용을 합니다. rgba값! / inherit 상속받는 값
font-family - 폰트이름이 띄어쓰기가 돼있는 경우, ""로 구분한다. 돋움, 고딕 같은 경우에는 안 써도댐 / 폰트 설정은 선언된 순서대로 우선권을 가지게 됩니다. 사용자의 폰트가 업을 경우 웹폰트를 적용하기도 합니다ㅣ.

* 오늘의 참고 사이트 
css-trick.com
http://www.student.oulu.fi/~laurirai/www/css/middle/ ; block 요소를 수직 정렬하는 법 =>예제 꼭 따라해보세요!! 이건 숙제 ㅎㅎ
spoqa.githun.io > 스포카 다국어 환경에 맞는 글꼴 줄이기 그거 읽어오기

