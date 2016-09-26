# day20-21 TIL

코드 리뷰
* 가로 스크롤이 생길 경우 overflow-x:hidden; 시키면 가로 스크롤이 사라집니다! overflow-y 또한 같습니다!
* 접근성 관련 ; 포커싱을 순차대로 할 때, 메인 콘텐츠가 더 먼저 가게끔 합니다! 스킵네비게이션이 아니어도 물론!

----코드 수정사항----
* favicon을 넣어주세요 본인만의 아이덴티티가 있다면 훌륭하겠네여
* header 스크롤 이벤트를 통해 class를 줬다뺐다가 가능하게 해야댐



### 그리드 시스템
기본 해상도 사이즈는 1366이 표준이기에 그 이하에 맞춰 작업합니다.
unit과 gutter값을 설정 후 몇 단을 쓸 건지 정하면 사이즈가 짜잔~ 하고 나옵니다.

em과 rem의 비율 계산법은 다릅니다..


push,pull
: position:relative를 사용해서 영역은 그대로 둔 상태로 자리재배치 
,prefix,suffix
: margin이나 padding을 이용해서 여백을 가지고 움직이는 것. 뒤에 애들도 함꼐 영향을 받게 됩니다.


### a링크 효과
- 기본
- 색상 페이드 인/아웃
- 


### animation
	transition ; 속성 지속시간 움직임유형 지연시간
	* transition:  border-bottom-color 0.25s (linear 0.25s)
	* property (ex. color, background, fontsize....,all).
	* duration(ex. 100ms, 0.2s) timing-function(ease-in-out,ease-out-ease-back) 
	* delay;
	별도의 사용자 인터랙션이 없이 처음부터 움직임을 제어하거나, keyframe 기반으로 애니메이션 제어를 하려면 animation을 쓰세요.
	A에서 B로 B에서 A로 장면을 전환시키는 것은 transition임.
	
### currentColor - 표준으로 지정된 속성인데, 내 자신의 color값을 상속받게 되는 거예여 현재 설정되어 있는 color값을 설정하게 되어 있는 거짐 똑같이 쓰지 않고 현재값을 갖다가 써라!! 그 얘기야...
	모든 color값을 다 일일히 바꾸지 않아도 가능쓰!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


### button 이펙트
- 버튼 기본 모듈
.button /  .button
- 버튼 모양
- 버튼 효과


button의 slide를 준다
button은 a와 다르게 inline-block요소라 overflow:hidden이 가능합니다.






background-clip: content-box;
background-origin: content-box;