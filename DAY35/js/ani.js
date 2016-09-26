// 1. 문서에서 .demo-box를 선택한다.
// 2. .demo-box 요소를 사용하자 클릭한다.
// 3. 움직이는 함수를 호출한다.
// 4. 애니메이션이 끝나면 콜백 함수를 실행한다.

//.demo-box를 선택한다
var demo_box = query('.demo-box');

demo_box.onclick = function(){
	console.log('clicked demo box.');
	console.log('clientX:', event.clientX);
	console.log('clientX:', event.clientY);
	console.log('데모박스를클릭좀')
	movingBox({
		'x': 20,
		'y': 100
	}, function(){
		console.log('모든 애니메이션이 졸요')
	}

};