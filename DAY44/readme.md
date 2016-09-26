### 앵귤러 하위버전 1.2.X

앵귤러 하위버전에서는 전역에 노출된 컨트롤러 모듈을 사용할 수 있다.
상위 버전에선 사용이 불가능!

1.2.X 버전에서는 
$scope 대신해서 as 문법이 사용 가능하다
```html
<div class="ng-template" data-ng-controller="moduleController as mCtrl">
		<h1 class="ng-template-headline"></h1>
		<button 
			data-ng-click="mCtrl.setContent()"
			type="button"
			class="fir-set-content-btn">눌러라</button>
		<p>{{mCtrl.content}}</p>
	</div>
```

### 앵귤러 상위버전 1.3.X
ng-app 에 모듈이름을 명시해주어야 한다.

팩토리는 클로저함수와 같다. 모듈 내에서 함수를 리턴 시킬 수 있고 그걸 서비스가 받아옴?