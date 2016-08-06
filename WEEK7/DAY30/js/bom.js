// 자바스크립트 변수는 변수 이름 앞에 var 키워드를 붙인다!
// var device_pixel_density;
// 카멜케이스 표기식?
// 음절+음절을 붙일 때 뒷 음절의 첫글자가 대문자가 되는 것! 낙타 표기법이라 한다
var dp = window.devicePixelRatio;

console.log('기기의 픽셀 농도:', dp);

// sass에서의 if문
// @if dp == 1{
// 	@debug "일반 디스플레이의 픽셀 농도를 가집니다.";
// }

// js 조건문
if(dp == 1){
	console.log("일반 디스플레이의 픽셀 농도를 가집니다.");
}

// 웹 브라우저 창의 화면 가로(세로) 폭
var window_w = window.innerWidth;
var window_h = window.innerHeight;

console.log("window_w:", window_w);
console.log("window_h:", window_h);

/*
window.scrollX;
window.pageXOffset;
window.scrollY;
window.pageYOffset;
*/

var window_scrollX = window.scrollX;
var window_scrollY = window.scrollY;

console.log("window_scrollX:", window_scrollX);
console.log("window_scrollY:", window_scrollY);

// pageYOffset와 window_scrollY의 차이점은 없고 둘 다 같아! 그러나 브라우저마다 지원하는 게 다르다...... 크롬의 경우는 둘 다 지원한다.

// 변수 선언만 하는 경우, 즉 값이 대입(할당)되지 않은 경우 = undefined를 기본으로 갖는다.
var scroll_y; // undefined
if(window.scrollTop){
	// scrollTop 속성이 window 전역 객체에 존재한다면? (조건이 true일 경우)
	// scrollY 변수에 window.scrolTop이 가리키는 값을 할당한다.
	// 구형 ie 에서는 scrollTop을 인지하는 것임(scrollTop는 구형 IE에서 지원합니다)IE에서
	scroll_y = window.scrollTop;
	// 그렇지 않다면...(위 조건이 false 인 경우)
} else {
	// = 연산자는 "할당(대입) 연산자"이다. scrollY 변수에 window.scrollY이 가리키는 값이다.
	scroll_y = window.scrollY;
}


// 이미 객체의 속성이 정해진 값을 사용자가 덮어쓰게 된다면, 덮어쓴 값이 출력된다. (자바스크립트의 약점. 태생적인 한계임) 왜냐하면 초창기 자바스크립트 환경에서는 문법이 엄격할 수가 없었느넫, 비전문가들도 사용할 수 있게끔 하기 때문임


/*window 객체의 메소드(함수)메소드
메소드???
객체가 소유하고 있는 함수를 가리킨다.*/
// window.alert("다이얼로그 창을 띄움으로써 사용자에게 메시지를 보여줍니다.");
// var is_youngman = window.confirm("당신은 학생인가여?");
// console.log("is_youngman:", is_youngman);
// // 변수에 담긴 값의 true 또는 false 값을 가져올 수 있다. console 에 처리 됩니당
// // 조건문으로 사용이 가능할 수 있겠져.

// if( is_youngman == true){
// 	window.alert("화이팅!");
// } else {
// 	window.alert("공부하세요.");
// };


// // 사용자의 입력 값을 받아왔다면 이를 기억해두기 위해서 변수가 필요하다.
// var name = window.prompt("당신의 이름은 무엇입니까?");
// window.alert(name+"님 환영합니다.");

// window.open("http://naver.com");
// 새 창으로 페이지가 팝업으로 뜬다!




// 시간을 제어하는 window 객체의 메소드
// window.setInterval()
// window.setTimeout()
/*
window.setInterval(할일(함수), 시간(밀리초)); //주기마다 계속 반복
window.setTimeout(할일(함수), 시간(밀리초)); // 1회만
*/

var count = 10;
function countDown(){
	count = count - 1;
	console.log(count);
	return count;
}

// 주기마다 수행되는 일을 처리할 경우에 아래와 같은 구문을 사용할 수 있다.
// window.setInterval(countDown, 2000);
// 이벤트란 특정 시점에 어떤 것을 처리하는 것.
// 사용자가 직접 함수를 실행할 때에는 실행 연산자가 필요하다.
// init()

// 이벤트가 함수를 처리할 때는 실행 연산자를 붙이지 않아야 한다.
// window.onload = init;
