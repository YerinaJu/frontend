# DAY49

##  Back-End 이해하기

#### 웹 구조
client - Server - business layer - data layer



** URL URN URI **
- URL ; 흔히 쓰이는 알파벳으로 구성된 주소
주소창에는 알파벳으로 쓰이지만, 실제로는 아이피 주소로 입력된다. 사람이 읽을 수 있게 구성됨
> ex) http://tistory.com/people

- URN ; id 값으로 구성된 주소
id 값을 가지고 있는 host 또는 ID인 값을 찾아 들어간다. 이것만 따로 쓰일 수는 없다! 해당 주소에서의 고유 주소.
> ex) id=29764825

- URI ; URL + URN
고유 주소를 갖게 된다. 
> ex) http://tistory.com/people?id=29764825

** 오픈소스와 라이센스 **
MIT 라이센스



REST APIㄹ를 설계할 때 주의할 점
- 응답상태 코드에 대해 정확히 명시해줘야 한다(서버)
404 ; not found
5xx ; Bad request

- 언어코드 ; 주소에 언어코드를 직접 명시하지 않아도 되게끔 한다.
- 반응형 페이지 ; 모바일과 웹 페이지를 따로 구현하지 않게 한다.



** 배포 **
http에 s를 붙이면 보안이 완벽하게! 됩니다.


** 아마존 웹 서비스 **
서버의 종류?
aws s3 / ec2 / 

** Node.js **
v8 엔진 기반


