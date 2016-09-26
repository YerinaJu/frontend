// .demo-navi를 선택한다
// 내부에서 a 요소를 모두 수집한다.
// 수집된 a요소를 사용자가 클린한다
// 클릭된 a 요소가 수집된다.
// 수집된 a요소는 당시의 인덱스 번호를 콘솔에 기록한다.


var navi = query('.demo-navi');
console.log(navi);
var navi_a = navi.getElementsByTagName('a');

for(var i=0;i<navi_a.length -1;i++){
	navi_a[i].onclick = function index(){
		console.log(i);
		return;
	}
}



