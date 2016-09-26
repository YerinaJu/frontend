# day25 

### 모바일 최적화
 - text-size-adjust:100% 안하면 아이폰에서 글씨가 커진다! 다른 제조사의 벤더 프리픽스도 넣어줘야 합니다.
 > normalize.css 에 속성이 들어가 있습니다!

### 브라우저 최적화

sub pixel rendering 버그
브라우저별로 퍼센트 소수점를 먹일 때 값이 다 다르다. ie는 소수점 올림, 오페라사파리는 내림 등등... 이것은 fluid그리드를 사용하면 벌어지는 현상!
- isolate 테크닉
요소에 float를 시킨 후 margin-left 또는 margin-right를 -100%으로 줄 경우, 시작점으로 초기화가 되어서 position을 쓴 것처럼 다른 요소에게 영향을 미치지 않으면서 자유롭게 위치 조절이 가능하다.
position과 다른 점은 float를 썼기 때문에 해제시키면 바로 다음요소에게 영향을 주게 되겠죰?

### flexbox
flexbox를 쓰면 위 아래 흐름 방향, 수직과 수평 방향을 속성 값 하나로 자유자재로 바꿀 수가 있다.
flex-container{display:flex}-> flex는 block형태/inline-flex inline-block 형태 content만큼의 width를 갖게 됩니다 마치 (float처럼!)

flex-item
어떤 요소든 간에, flex 속성을 주면 아래 있는 item요소가 독립적으로 사용이 가능하다. flex안에 flex가 들어갈 수도 있고!

flex 메인 축 ; 좌우 흐름 정렬 기본값은 row/ start, end, center, size

flex-direction의 기본 값은 row입니다 reverse는 역순으로 정렬이 가능함.
flex-wrap nowrap/wrap
justify-content start/end/center/space-between/space-around 비트윈과 어라운드는 flex-grow가 설정되지 않았을 때 사용이 가능하겠지?? ; 메인축(flex-direction)을 중심으로 정렬 가능
align-items start/end/center/stretch (스트레치는 폭/넓이가 없을 시에 가능함)위 아래 메인축의 교차축을 중심으로 정렬 가능!
> 메인 축이 바뀌면 교차축도 반대로 바뀌는 것!!!!!!!
flex에서는 width/height값이 크게 무의미 하겠죠! 


flex-basis



