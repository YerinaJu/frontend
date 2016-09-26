복습
text-transform uppercase
box-sizing:border-box; 박스의 width를 지정했을 때 이렇게 주면 컨텐츠의 폭이 확장되어 레이아웃이 깨지지 않습니다.
box-sizing의 padding-box는 파이어폭스에서만 지원이 가능합니다.
border까지 width가 늘어나는 것
overflow-y:scroll; => 축이 움직이는 것 때문에 축을 스크롤로 만들어두니 흠들리지 않았다....!
selection ie9이상 / firefox는 -moz-를 붙여야.
폰트 속기형 ie11 부터 지원, 
padding이나 margin같은데 %를 두면 요소의 height가 자식 요소에 상속받기 때문에 예측이 힘듭니다 ㅜ
width가 0일 경우 스크린리더가 읽지를 않습니다.
a 링크 목적지를 분명히 해줘야대 go to twitter!!!!!!!!!!!!!!!!!!!
alt값과 제목이 중복되면 alt를 없애도 댑니다

# box-sizing ; 박스의 영역을 정해준다. border-box / content-box(기본 값)
	box의 영역이 border까지 먹게 되어 padding과 border가 박스 영역에 포함된 값으로 나온다.
	width를 %로 썼을 경우 패딩을 먹여도 절대 레이아웃이 무너지지 않습니다!

#vertical rhythm ; 
헤딩 태그 1 ~ 6까지의 비율 1.618이 황금비율이나 넘나 크다

그레디언트로 가이드라인으로 쓸 수 있습니다.
background-image:linear-gradient(angle, colo-stop 0%, colo-stop 40%, colo-stop 60%, colo-stop 100%);
		}

### position
모든 요소의 기본 포지션 값은 static값이다. position값을 해제 시키고 싶을 때 position:static;으로 초기화 시킵니다.
relative / absolute / fixed / static
- static ; none 상태. 모든 요소의 기본 값은 position:static을 가지고 있다. position 값을 해제 시키고 싶다면 static값을 먹이면 된다!
- relative ; 자신의 원래 위치에 상대적이라 normalflow를 깨지 않는다. top/left/right/bottom 값으로 기준점 설정할 수 있다. 양수 는 박스 안 쪽으로, 음수는 박스 바깥쪽으로 움직이려는 속성이있다.
자기 영역은 그대로 가지고 있기 때문에 다음 요소가 밀려 올라오지 않는다.
- absolute ; static을 제외한 position값을 먹인 가장 인접한 부모에 기준점을 가진다. 부모가 없다면 거슬러 올라가 화면까지 위치이동을 한다. 자기 영역을 가지고 떠버리기 때문에 다음 요소에도 영향을 미치게 된다. 

- z-index ; 가장 나중에 선언된 요소가 먼저 뜨기 마련인데, z-index값을 높여주면 그 요소가 먼저 뜨게 됩니다.float보다 더 상위로 뜹니다!

* border로 화살표 만드는법
width:0 height:0을 만들면 보더가 동서남북 가른것처럼 생기게 됩니다. 그러면 양쪽 보더에 배경색을 transparent로 만들고 화솔표로 칠하고 싶은 부분에만 색을 채워넣으면 쨔쟌~ 하고 화살표가 생깁니다. 어차피 모양용이기 때문에 못읽어도 괜찮아 ㅇㅅㅇ
inline속성일 때 보더가 이상해지는데 이건 폰트 값을 0으로 만들면 됩니다 ㅎㅎ
background-size ;  cover:가로가 다 나오게, contain:세로가 다 나오게. =>무조건 비율에 맞춰서!!
