#웹 타이포그래피

* 웹 환경에서의 기본 해상도 값은 96ppi입니다.
* 브라우저의 기본 폰트 크기는 16px.
* line-height의 경우 1.5배~2배 사이를 권장.
	고정 값인 px가 아니라 배수를 사용하는 것이 반응형에 유리하겠죠??

* 본문의 색과 본문 텍스트의 대비 차는 4.5 이상 차이가 나야합니다.
* large-text ; 24px 이상
* white-space:nowrap;

#폰트속성

#레이아웃
display:none/block/inline/inline-block/list-item(잘 안씀)
스크린리더가 읽지 못하는 경우 display:none이거나 width,height가 0일때

visibility:hidden VS display:none
전자는 눈에만 안보일뿐 공간을 차지하지만, 후자는 아예 공간이 없어짐!

overflow:hidden/visible/auto/scroll
visible 자식 요소가 부모보다 넘쳐날 때 그냥 보임
hidden 숨겨줌
auto 스크롤로 표현
