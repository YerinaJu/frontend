스크립트
복습
<
script는 head 마지막에 하는 게 좋아요
스타일 코드는 무조건 스크립트 링크보다 먼저 선언되어야 합니다. 왜냐면 스크립트는 파일 불러오기를 직렬 방식으로 하기 때문에 다음 코드를 불러오는 데까지 시간이 오래 걸리게 됩니다.
스크립트를 재사용하는 것 ex hangul.js 은 따로 분리해두는 것이 좋습니다. 문서 전체에서 재사용은 따로! 개별적으로 사용하는 거면 html 안에 해도 ok

스크립트를 직접 삽입하는 것이 안좋은 것은 아니지만, body안에 script를 중간중간 넣으면? script가 하나씩 실행이 될 때마다 다른 html문서가 놀고 있습니다. 그래서 웬만해선 쓰지 않는 것이 좋겠져?

>


css 기본 문법? ; 선택자 {속성:값;} / 선언문장의 끝에는 반드시 세미콜론(;)을 추가합니다

object - 이미지 오디오 비디오 액션 플래시 등을 넣을 때 썼지만 요즘은 거의 쓰지 않습니다.
<object type="image/gif"><p>대체 텍스트</p></object>
parameter - param..

### 인용
- 긴 인용 `<blockquote></blockquote>`
-짧은 인용 `<q></q>

###축약
*abbr 표준 축약어 - abbreviation (ie6에서는 abbr을 쓰지 못합니다 ie6에선 acronym-비표준)
* address 이메일 주소 등 웹 상에서 연결될 경로를 넣는것 p/div 같은 block 요소는 쓰지 못합니다.
```
<address>
<a href="mailto:j35148@hanmail.net">예리나 이메일 주소</a>
</address>
```