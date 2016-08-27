(function(global, $){
	'use strict';

	//문서에서 .gnb 요소를 선택한 후에 내부에서 li 요소를 찾는다
	// $('.gnb').find('li')
	// $('.gnb li');

	var $gnb = $('.gnb');
	var $gnb_list = $gnb.find('li');


	// .eq(index) 
	// ---------------------------------------------------
	var $gnb_list_1st = $gnb_list.eq(0);
	var $gnb_list_2nd = $gnb_list.eq(1);
	var $gnb_list_last = $gnb_list.eq(-1);
	var $gnb_list_last_2nd
	//eq는 수집된 대상 중에 인덱스를 찾아 가져올 수 있다.
	// 음수값을 넣을 수 있다.
	// 음수값의 -1은 마지막 인자를, -2는 마지막에서 두번째 요소를 찾아올 수 있다.

	console.log($gnb_list_1st);
	console.log($gnb_list_2nd);
	console.log($gnb_list_last);


	// .not (selector || element || function )
	// ---------------------------------------------------------
	// selector 표현
	$gnb_list.not('[class]').addClass('have-not-class-attribute');

	//function 표현
	$gnb_list.not(function(index, element){
		// 홀수를 제외란 짝수 <li> 필터링 하기
		return index % 2 === 0;
		// if(index%2 === 1){
		//	console.log(index);
		//}
	}).addClass('even');
	// even은 원래 짝수를 걸러낸다. 그러나 자바스크립트에선 숫자가 0부터 시작되기 때문에 반대로 보인다!

	// 제이쿼리에서 지원하는 필터링 속성
	// === $gnb_list.not(':even').addClass('even'); .not에서 원래 지원이 되는 필터링 속성임 제이쿼리에서만!


	// .filter (selector ||) 증요한것!!!!!!!!
	// 편하게 선택자 쓰는 것이 좋다!
	// ----------------------------------------------------------
	//selector 표현식
	$gnb_list.filter('.last').addClass('last_list_elememt');

	//function 표현식
	$gnb_list.filter(function(index, element){
		console.log(index, element);
	})
	// $gnb_list.add('nav, a').filter(function(index, element){
	// 	console.log(index, element);
	// })
	// 이미 $gnb_list가 수집된 후에 .add를 이용해서 요소를 추가할 수도 있다.
	$gnb_list
		.add('nav, a')
		.addClass('navigation-component')
		.filter(function(index, element){
			var node_name = element.nodeName.toLowerCase();
			return node_name === 'a' || node_name === 'nav';
		})
		// a와 nav일 경우만 필터링 시킨다.
		.css({
			'display': 'inline-block',
			'padding':'1em'
		})

	// .is
	// 참 또는 거짓을 반환함
	// 있다면 true, 없다면 false
	// ----------------------------------------------------------
	$gnb_list
		.addClass('navigation-component')		
		// a와 nav일 경우만 필터링 시킨다.
		.css({
			'width': function(index, current_value){
				var $current_list =$gnb
			}
		})
	// .each (function(index, element){} => 콜백함수)
	// .each 는 인덱스와 요소를 순환하여 내뱉는다.
	// jQuery 객체를 돌려줌
	// ---------------------------------------------------------
	$gnb_list.each(function(idx, el){
		// idx, el은 내 맘대로 명시해 줄수 없어 왜냐면 알아서 순환되는 걸 인자로 내가 다시 내뱉어 줄 수 있어 알아서 콜백되면서 내부 순환이 되는 거기 때문에 좋다
		el.innerHTML += '<span>' + (idx * idx +1)
	})


	//.slice(start, [end]) => end는 옵션임 start 인덱스부터 end-1 한 인덱스까지만 내보낸다. start가 -음수일 경우 .eq(-)와 같이 동작한다.


	//.finding
	// filter와 find의 차이점은 filter는 이미 수집된 애들 중에서 자기들끼리 필터링해서 걸러내는 것이고, find는 자기와 자식, 자손들 다 포함한 수집된 애들 중에서 하나하나 직접 찾아 오는 것이다.
	// -------------------------------------------------------------
	$('.li').filter(':last')
	//=> <li class="last"></li>
	// li중에서 마지막 요소를 가져오는 것이고

	$('li').find(':last')
	//=> <span>1</span>, <span>2</span>, <span>3</span>, <span>4</span>
	// li에 있는 요소 중에 마지막요소를 다 가져오는 것이다.


	//.next([selector])
	// 다음 요소를 찾을 수 있다. 셀렉터를 던지게 되면 조건을 확인하게 된다.
	// selector가 맞다면 가지고 온다!
	//-------------------------------------------------------------
	var $gnb_first = $gnb.find(':first');
	console.log( $gnb_first.next().children(':last').prevAll('.first').parents('.gnb'));
	// children은 자손 요소 :last는 요소들 중에 마지막 요소!, prev는 바로 이전 요소를 찾는거고 All이 붙으면 이전 요소 전부를 찾아올 수 있다. 마찬가지로 parent는 바로 앞에 있는 부모 요소를 가져올 수 있고, parents는 이전 부모 요소 전부를 가져오며 html까지 거슬러 올라간다.
	// .nextUntil , .prevUntil
	// nextUntil에 선택자를 던지지 않는다면, nextAll처럼 작용한다. 그러나 선택자를 만난다면 그 요소 전까지 수집해 전달한다.


	//siblings([선택자])
	// 나를 제외한 모든 형제 요소
	// 선택자를 던진다면 형제들 중에 선택자를 필터링한다.
	//-----------------------------------------------------------


	// .parent(s)([선택자]),children([선택자])
	// 선택자를 던진다면 조건확인





	// -----------------------------------------------------------
	//Filter
	//.first()
	//.last()
	//.eq()
	//.filter()
	//.not()
	//.slice()

	//Find
	//.find()
	//.next()
	//.prev()
	//.parent()
	//.parents()
	//.children()
	//.prevAll()
	//.prevUntil()
	//.nextAll()
	//.nextUntil() 
	// ------------------------------------------------------------

	//content
	// 해당 요소의 모든 요소의 노트들 반환시킨다.
	//-------------------------------------------------------------


	//.closest 함수
	// 가장 가까운 부모를 가져온다
	// 선택자를 넣으면 가장 가까운 부모 안에 있는 선택자를 가져온다 부모가 가지고 있을 경우에만 가져 올 수 있다!


	//.add()
	// add()안에 요소에 요소를 추가해서 넣어준다
	// clone과 같이 쓰이면 매우 좋다.
	//--------------------------------------------------------------

	$gnb.find('li:first-child a').clone().add('<p>링크 뒤에 나오는 단락입니다.</p>').appendTo('li:first-child', $gnb)
	// li:first-child a를 그대루 두고 복사를 시킨다. 그 뒤에 p요소를 추가한 뒤 $gnb 안에 있는 li:first-child 안에 가장 끝자락에 붙인다.


	//.addBack()
	// 현재 수집된 애들과 함께 기존에 수집됐던 애들을 추가해라
	//------------------------------------------------------------
	$('li:gt(3)','.gnb')
	$('li:gt(3)','.gnb').add('li:eq(1)')
	$('li:gt(3)','.gnb').add('li:eq(1)').find('a')
	$('li:gt(3)','.gnb').add('li:eq(1)').find('a').addBack()
	$('li:gt(3)','.gnb').add('li:eq(1)').find('a').addBack('.last')

	//.end()
	// 현재 수집된 애들을 없애고 다시 바로 이전 수집됐던 애들만 가지고 온다.
	// addBack과 다르다
	// ------------------------------------------------------------
	$('div').find('p').end()
	// p를 찾았지만 end를 만나면 p를 없애고 div로 돌아간다


	// ##########################################################
	// 문서조작
	// ----------------------------------------------------------
	// jQuery 팩토리 함수는 요소를 선택하는 것 뿐 아니라 요소를 만들어 낼 수도 있다
	// $('<blockquote></blockquote>')
	// $('<blockquote>안녕</blockquote>').prependTo('body')
	// // prependTo와 prepend는 부모가 앞이냐 뒤냐의 차이가 있다.

	// $('<div>').addClass('custom-division').attr({
	// 	'id' : 'hi',
	// 	'title' : 'hey'
	// }).text('djdj').on('click', function(){
	// 	console.log(this);

	// }).appendTo('.gnb');


	$('<div>', {
		'id': 'hi',
		'class':'custom-division',
		'attr':{
			'title':'hey',
		},
		'text':'djdj',
		'on':{
			'click':function(){
				console.log(this);
			}
		}
	}).appendTo('body');
	// 위의 코드랑 똑같다


	//.text()
	//.html() html코드를 문자열로 반환한다.
	//-------------------------------------------------------------
	$('.gnb').html(function(index, oldHTML){
		return '<article>' + oldHTML + '</article>';
	});




	//.attr()
	//html 속성을 제어할 수 있다.
	// .attr('class') 하나만 쓰면 GET함수가 되며 값을 가져올 수 있다.
	// .attr('class', 'change') 값을 여러개 쓰면 SET함수가 되며 값을 설정할 수 있다.
	// .attr('class', function(){})
	//------------------------------------------------
	$('li').first().attr('class', function(){
		console.log(arguments);
	})

	$('li').first().attr('class', function(index, old_class){
		console.log(arguments);
	})


	//.removeAttr()
	//해당 속성을 제거한다
	// 아무값도 넣어주지 않으면 모든 클래스가 삭제된다.... 인 줄 알았지만 사라지지 않는다
	//-------------------------------------------------------------



	//.prop()
	// attr는 html 코드에 기존 입력된 속성이고
	// prop은 사용자가 직접 입력한 value나 동적으로 생성한 값들은 모두 property라고 볼 수 있다! 스크립트로 만든 속성들 모두! 예를 들어 form의 경우, input요소에 사용자가 값을 입력한 경우 attr에서는 찾아올 수 없지만, prop에선 가져올 수 있다. form에선 그냥 prop쓰는 게 나아
	//-------------------------------------------------------------	
	$('form').find('input').attr('value','yammo9')




	//.append | .appendTo | .prepend | .prependTo
	//-------------------------------------------------------------
	$('gnb')
	// []
	$('.gnb')
	// [<nav class=​"gnb navigation-component" style=​"display:​ inline-block;​ padding:​ 1em;​">​…​</nav>​]
	$('.gnb').prepend('<div class="prepend">prepend</div>')
	// [<nav class=​"gnb navigation-component" style=​"display:​ inline-block;​ padding:​ 1em;​">​…​</nav>​]
	$('.gnb').append('<div class="append">append</div>')
	// [<nav class=​"gnb navigation-component" style=​"display:​ inline-block;​ padding:​ 1em;​">​…​</nav>​]
	$('<div>',{
	  'attr':{'class':'prepend'},
	  'text':'prependcontent'
	}).prependTo('.gnb');
	// [<div class=​"prepend">​prependcontent​</div>​]




	// A.before(B) | A.after(B)
	// A앞에 B를 삽입하라 | A 뒤에 B를 삽입하라
	// 원래 있던 요소를 이동시키는 것도 가능하다
	//-----------------------------------------------------------
	var $h2 = $('<h2 id="demo-test-h2">domo heading 2</h2>');
	var h3 = document.createElement('h3');
	var gnb = document.querySelector('.gnb');

	$()



	// B.insertBefore(A) | B.insertAfter(A)
	// B를 A 앞에 삽입하라 | B를 A 뒤에 삽입하라
	// ----------------------------------------------------------



	//.wrap(selector) | .wrapAll() | .unwrap()
	// selector로 요소를 감싼다.(개별적으로) | 한꺼번에 요소를 감싼다 | selector로 감싸 요소를 제거해라.
	//-------------------------------------------------------------
	$.each([1,2,3,4,5].reverse(),function(index,item){
		$('<div>',{'class':'hesus' +item}).text('hesus'+item).prependTo('body');
	});
	//[5, 4, 3, 2, 1]

	$('[class*="hesus"]').wrapAll('<aside class="wraAllhesus">');


	//toggle
	//------------------------------------------------------------
	$('a:first').on('click', {'clicked': false}, function(evt){
		var clicked = evt.data.clicked;
		if(!clicked){
			console.log('toggle click');
		} else {
			console.log('toggle unclick');
		}

		evt.data.clicked = !evt.data.clicked;
	});

})(this, this.jQuery);