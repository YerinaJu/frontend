// 캐러셀 만들기~

// 자바스크립트가 지원되는 환경 임을 식별할 수 있는 모듈
(function(global){
  'use strict';

  // <html> 요소를 찾아서 class 속성에서 'no-js' 값을 'js'로 변경
  global.html = query('html');

  if ( html.classList ) {
    // 신형 방식 IE 10+
    html.classList.remove('no-js');
    html.classList.add('js');
  } else {
    // 구형 방식
    var html_class_attr = html.getAttribute('class');
    // 설정
    html.setAttribute('class', html_class_attr.replace(/no-js/,'js'));
  }

}(this));


// ---------------------------------------------------------

(function(global){
	'use strict';

// 1. [절차지향] 함수형 방식으로 진행
//   1) 컴포넌트를 분석한다.
//     - 해당 요소를 컴포넌트 화시킨다
//     - 요소의 클래스를 설정한다
//     - 버튼을 동적으로 생성한다
//     - 버튼 이벤트 핸들링을 시킨다.
//   2) 기능을 설계한다.
//   3) 기능을 구현한다.
//   4) 테스트한다..
//   5) 배포한다.

// 애플리케이션을 초기화
function init(selector){
	// 스타일 식별자 역할을 하는 class 속성 설정
	var carousel = query(selector);
	// 기존 carousel 참조 문서 객체의 class 속성 값을 메모리해야 한다
	//객체.속성 방식을 사용하여 메모리 한다
	carousel.origin_class = carousel.getAttribute('class') || '';
	carousel.setAttribute('class', (carousel.origin_class + 'ui-carousel').trim() );
	carousel.setAttribute('class','ui-carousel');
	// ARIA 설정
	carousel.setAttribute('aria-label','Demonstration UI Carousel Component');
	carousel.setAttribute('role','application');

	// 래핑 요소를 생성
    var carousel_contents_wrapper = createNode('div');
    // 래핑 요소에 클래스 속성 설정
    carousel_contents_wrapper.setAttribute('class', 'ui-carousel-content-wrapper');
    // 래핑 요소에 WAI-ARIA 속성 설정
    carousel_contents_wrapper.setAttribute('role', 'group');
    // 캐로셀 콘텐츠 래핑
    var carousel_contents = makeArray( queryAll(selector + '> *') );
    carousel_contents.forEach(function(content, index) {
    	// 자식 요소에 class 속성 설정
      content.setAttribute('class', 'ui-carousel-content');
      // 자식 요소의 내부에서 제목 요소를 찾아 class 속성 설정
      var headline = query('h2', content);
      headline.setAttribute('class', 'ui-carousel-content-headline');
      // 래핑 요소에 자식 요소로 삽입
      carousel_contents_wrapper.appendChild(content);
    });
    // 캐로셀 컴포넌트의 첫번째 자식 요소로 삽입
    prependChild(carousel, carousel_contents_wrapper);


    //---------------------------------------------------
    //버튼 그룹과 버튼 요소들을 동적으로 생성함
    var button_group = createNode('div');
    //버튼 그룹에 class 식별자 생성
    button_group.setArrtibute('class','ui-carousel-navigation-buttons');
    button_group.setAttribute('role','group')
    // 버튼 생성
    var button = createNode('button');
    button.setAttribute('type','button');
    var next_button = prev_button.cloneNode();
    console.log(prec_button, next_button);
    //각 버튼에 class 식별자를 설정
	    // prev-button.setAttribute('class','ui-carousel-navigation-prev-button');
	    // prev-button.setAttribute('aria-label', 'previous content');
	    // // 버튼에 아이콘 폰트 추가
	    // prev-button.innerHTML = '<span class="fa fa-angle-up" aria-hidden="true"></span>';
	    // next-button.setAttribute('class','ui-carousel-navigation-next-button');
	    // next-button.setAttribute('aria-label', 'next content');
	    // // 버튼에 아이콘 폰트 추가
	    // next-button.innerHTML = '<span class="fa fa-angle-up" aria-hidden="true"></span>';
	var button_group_html_code = [
		'<div class="ui-carousel-navigation-buttons" role="group">',
			'<button aria-label="previous content" type="button" class="ui-carousel-navigation-prex-button">',
				'<span class="fa fa-angle-up" aria-hidden="true"></span>',
				'</button>',
				'<button aria-label="next content" type="button" class="ui-carousel-navigation-next-button">',
					'<span class="fa fa-angle-down" aria-hidden="true"></span>',
				'</button>',
			'</div>'	
	].join('');

	carousel.innerHTML += button_group_html_code;

	//----------------------------------------
	// 버튼에 이벤트 바인딩
	
}
// 초기화 실행
init('.main-ad-area');

})(this);


// -----------------------------------------------------

(function(global){
	'use strict';

// 2. [객체지향] 커스텀 객체 형태로 변경
//   1) 객체 생성자 (ES2015버전 class를 제작한다)
//   2) 객체 생성자의 프로토타입 객체를 통해서 공유할 수 있는 기능을 정의한다.
//   3) 정의된 기능을 구현한다
//   4) 테스트
//   5) 배포한다.

})(this);

