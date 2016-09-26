// js 함수를 작성하는 3가지 방법

// 1. 사용하지 말아야 할 방법
var fn1 = new Function('console.log("쓰지마;;;")');

fn1(); //함수 실행

// 2. 함수 선언문
function fn2(){
	console.log('실행해');
}
fn2();

// 3. 함수 표현식
var fn3 = function(){
	console.log('변수에 참조됩니다');
}

fn3()