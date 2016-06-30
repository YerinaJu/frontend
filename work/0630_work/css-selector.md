# CSS 선택자 정리

# CSS 선택자 정리

유형 | 선택자 | 설명
--- | --- | ---
**일반 선택자**| E | 요소 선택자
     | * | 전체 선택자
     | E(P) E(C) | 자손 선택자
**CSS 속성 선택자** | 	 | 속성 선택자는 값의 순서와 정확도가 중요!
		| [attr] | 속성이 일치하는 경우.
		| [attr="value"] | 속성과 값이 일치하는 경우.
		| [attr~="value"] | 속성 값에 공백으로 구분되는 단어가 일치하는 경우.
		| [attr^="value"] | 속성 값 처음 시작부분이 일치하는 경우.
		| [attr$="value"] | 속성 값 마지막 끝나는 부분이 일치하는 경우.
		| [lang|="en"] | 속성 값에 (-)하이픈으로 구분되는 단어가 일치하는 경우
		| [attr*="value"] | 속성 값이 들어가는 모든 경우.
**가상 클래스 선택자** |		| 		
		| E:root | E 요소의 root가 되는 요소를 찾음. (HTML)
		| E:nth-child(n) | E 요소가 속한 자식 요소들 중에 n번째를 나타냄.
		| E:nth-last-child(n) | E 요소가 속한 자식 요소들 중에 마지막에서 n번째를 나타냄.
		| E:nth-of-type(n) | 
 상태 디자인 선택자 | :hover | 마우스를 올렸을 때 나타내는 상태
 		| E:active




유형 | 선택자 | 설명
--- | --- | ---
**일반 선택자** | E | 요소 선택자
     | * | 전체 선택자
     | E(P) E(C) | 자손 선택자
     | E(P) > E(C) | 자식 선택자
     | E + E | 인접 형제 선택자
     | E ~ E | 일반 형제 선택자
**클래스 선택자**| E.class | 요소 E와 .class가 전부 일치 하는 경우.
		| .class | .class가 일치하는 경우
		| .class-name1.class-name2 | 멀티 클래스, classname1과 classname2가 모두 일치 하는 경우
		| .class-name1 .class-name2 | .class-name1 안에 .class-name2가 있는
**속성 선택자** | [attr] | 속성이 일치하는 경우.
		| [attr="value"] | 속성과 값이 일치하는 경우.
		| [attr~="value"] | 속성 값에 공백으로 구분되는 단어가 일치하는 경우.
		| [attr^="value"] | 속성 값 처음 시작부분이 일치하는 경우.
		| [attr$="value"] | 속성 값 마지막 끝나는 부분이 일치하는 경우.
		| [lang|="en"] | 속성 값에 (-)하이픈으로 구분되는 단어가 일치하는 경우
		| [attr*="value"] | 속성 값이 들어가는 모든 경우.
**가상 클래스** | 
         | E:first-child | E 요소의 상위 부모 요소의 자식 중 첫번째 요소
         | E:last-child | E 요소의 상위 부모 요소의 자식 중 마지막 요소
 		| E:nth-child(n) | E 요소가 속한 자식 요소들 중에 n번째를 나타냄.
		| E:nth-last-child(n) | E 요소가 속한 자식 요소들 중에 마지막에서 n번째를 나타냄.
         | E:only-child | E 요소의 상위 부모 요소의 자식 중 오직 하나만 있는 요소
         | E:first-of-type | E 요소의 상위 부모 요소의 자식 중 종류별 첫번째 요소
         | E:last-of-type | E 요소의 상위 부모 요소의 자식 중 종류별 마지막 요소
         | E:nth-of-type(n) | E 요소의 상위 부모 요소의 자식 중 종류별 n번째 요소
         | E:nth-last-of-type | E 요소의 상위 부모 요소의 자식 중 종류별로 끝에서 n번째 요소
         | E:only-of-type | E 요소의 상위 부모 요소의 자식 중 오직 종류별 하나만 있는 요소
         | E:not(selector) | E 요소의 상위 부모 요소의 자식 중 () 안 selector를 제외한 나머지 요소
 		| E:empty | E 요소의 상위 부모 요소의 자식 중 비어 있는 요소.
상태 디자인 클래스 | E:link | a 요소의 링크 상태.
         | E:visited | a 요소 링크에 방문했을 경우.
         | E:hover | 요소에 마우스를 올릴 경우.
         | E:active | 요소에 커서를 갖다대 눌렀을 경우.
         | E:focus | 요소에 tab을 이용해 접근했을 경우.
**가상 요소** | E::root | E 요소의 root가 되는 요소를 찾음. (HTML) 
		| E::before | E 요소의 하위 요소들 중 가장 첫번째에 입력.
		| E::after | E 요소의 하위 요소들 중 가장 마지막에 입력.
		| E::first-line | E 요소의 가장 첫번째 줄의 경우.
		| E::first-letter | E 요소의 가장 첫번째 글자의 경우.
		| E:lang(language) | 요소의 lang 속성을 찾을 경우.
        | E::target | url에 #id 값이 
        | E::enabled |
        | E::disabled |
        | E::checked |
