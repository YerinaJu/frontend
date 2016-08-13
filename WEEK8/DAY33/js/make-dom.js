// dom api를 사용하여 문서 객체를 동적으로 생성하기

// 요소노드 생성하기
var maked_div = document.createElement('div');

var maked_ul = document.createElement('ul');

console.log('div:', maked_div);
console.log('ul:', maked_ul);


// 속성노드 생성하기
document.createAttribute('id')

//텍스트 노드 생성하기
var maked_div_text = document.createTextNode('메롱메롱');

var maked_li = document.createElement('li');
var maked_li_text = document.createTextNode('리스트예여');

console.log('ul > li_text:',maked_div_text);
console.log(maked_li);
console.log(maked_li_text);

// 문서 객체를 동적으로 조작해보기
// 노드 조작
// 노드 합체!
// 부모노드.appendChild(자식노드)
// 부모의 뒷부분에 붙게 된다(마치 ::after요소처럼)

 
maked_div.appendChild(maked_div_text);
console.log(maked_div);

// 동적으로 생성한 <div> 요소를 문서의 특정한 목적지에 추가(삽입)
var target_place = document.querySelector('#parent > .child:last-child');
target_place.appendChild(maked_div);


// 미션: 동적으로 생성된 <ul><li>리스트</li></ul>을 문서의 특정 요소 내부 마지막 자식으로 추가하기
maked_li.appendChild(maked_li_text);
maked_ul.appendChild(maked_li);

//무조건 앞 뒤는 노드값이 들어와야 한다

// console.log(maked_ul);

// 목적지에 해당하는 요소를 직접 생성한 다음에 문서에 붙여보자
var target_container = document.createElement('div');
target_container.appendChild(maked_ul)

document.body.appendChild(target_container);

//속성 값 추가하기 setAttribute
target_container.setAttribute('id', 'target-container');


var target = document.body.firstChild;
target.parentNode.insertBefore(target_container, target);
