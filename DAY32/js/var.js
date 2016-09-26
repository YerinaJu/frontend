// [값을 복제하는 경우]
// 변수 bytton_text에 복사되는 값은 문자 유형의 데이터이다.
var button_text = query('[type="button"]').firstChild.nodeValue;


// 값을 참조하는 경우


// 변수에 복사/참조되는 값의 유형을 확인하기 위해 실습

// 문서에서 .brand 요소를 찾아 변수 brandd에 참조되는
var brand = query('.brand');
// 문자열 리터럴 데이터
