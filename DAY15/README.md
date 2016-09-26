그리드 행 모듈
clearfix와 유사

.row::after{
	content:'';
	display:block;
	clear:both;
}

그리드 컬럼 모듈
.col 1행 2행 3행씩 모듈을 넣어줍니다.




col-1,col-2 등등 애들을 묶는 방법은 [class*="col-"]{float:left;margin-left:10px;margin-right:10px;height:48px} 등등 한꺼번에 묶기


column 행 계산식
(컬럼width)60*(컬럼행)*n+(20*(n-1))px



## position:absolute을 적용했을 때,
margin:auto가 적용이 안됩니다 일반 흐름을 벗어나기 때문이져
static/relative은 노말플로우대로기 때문에 적용 가능 ㅇㅋ

translate는 인터넷 익스플로러 하위버전, 9 이하에서는 호환이 안되지만 제외시키면 유지보수 측면에서는 지존 좋습니다.

float/absolute/fixed의 경우 inline->block으로 된다. 대신, float의 경우 자식 영역의 폭만큼만 적용이 됩니다 (inline-block처럼)



z-index 의 경우,  부모 A와 부모 B를 생각하세요.
자식요소끼리 아무리 z-index 값을 먹여봤자 부모 요소가 더 높지 않다면 소용이 없다! 금수저와 흙수저





<grid system 리뷰>
클래스명을 일일히 붙여주지 않아도 플러그인을 사용하여 class명을 동적으로 구현해줄 수 있어요ㅎㅎ

adobe muse (XXXXXXXXXXXXXXXXX)

header는 sectioning 요소가 아니기 때문에 header안에 nav를 넣지 않는 게 좋을 것 같아여!!
비디오 재생버튼 같은거는 css로 그릴 수 있습니다. radius로 동그랗게 만들고 before또는 after를 줘서 border로 화살표 만들고 position으로 띄우면 완성!~ 상태 디자인으로 hover시키면 모양을 바꾸거나 시각적으로 재미를 줄 수도 있겠져 그리고 cursor로 모양을 클릭하게 바꿔야함 ㅇㅅㅇ 아니면 center-box를 이용해서 transform:translate(-50%, -50%)로 가운데 고정!

