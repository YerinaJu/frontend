 # 0624 DAY9 TIL
 
 ### CSS 선택자
 
 요소 선택자 : E <br>
 전체 선택자 : * <br>
 자손 선택자 : E(P) E(C) <br>
 
 요소 + 그루핑 + 아이디 + 전체 선택자
 <!-- CSS 선택자는 여러 유형이 조합되어 사용된다. -->
 
 > * 아이디 선택자
 >    0100
 > * .클래스 선택자
 >    0010
 
 
 * 전체선택자 
 ```
 body *{
     margin:0;
 }
 ```
 
 * 그루핑 E,E,E
 ```
 body, body *{
     margin:0;
 }
 ```
 
 * 자식 선택자 E(p) > E(C) ;
 > 익스플로러 6과 7에서는 미지원되거나 버그가 있을 수도 있다.
 ```
 #shopping1 > h4 {
     color:red;
 }
 ```
 
 * 클래스 선택자 E.class-name | .class-name | .class-name1.class-name2 | .class-name1 .class-name2
     - 일반적으로 사용되는 방법; 코드 재사용 목적
     ```
     <style>
     p.notice{}
     /*p 안에 있는 notice만 적용이 된다. 디자인 컨셉[범위 제한]이 명확하지 않은 경우에는 사용을 자제.*/
     .notice{}
     .error{}
     </style>
 
     <body>
         <p>
             <span class="notice">notice</span>
         </p>
         <div class="notice">notice</div>
     </body>
     ```
     - 멀티클래스
     ```
     .class-name1.class-name2{}
     <!-- ex) 익스플로러 6버전에서는 앞 뒤 순서 바뀌는 게 적용이 되지 않습니다. -->
     .button{
         border:none;
         background-color:#000;
         color:#fff;
     }
     .buy{color:orange;}
     .cancel-buy{color:lime;}    
     /*emmet*/
     *****************
     .notice.show.me
     .notice>.show>.me
     *****************
     ```
 
 * 인접 형제 선택자 E + E
 > 해당 요소의 바로 다음 요소만 선택할 수 있다.. 이전 요소는 선택이 불가능.
 > 절대적으로 틀(프레임)이 무너지지 않아야 한다. (인접한 것만 해당이 되기 때문에 고정적인 틀에서 사용해야함.)
 ```
 #shop1tabIndex ul { 
     border:1px solid red; 
 }
 #shop1tabIndex h4 + ul {
     border:1px solid blue;
 }
 /*emmet*/
 ******************
 div+div+div
 ******************
 ```
 * 일반 형제 선택자 E ~ E
 ```
 <style>
     #shoppingGrpTab > #shopping1 + h3 {color:red;}
     #shoppingGrpTab > #shopping1 ~ h3 {color:blue;}
 </style>
 <body>
     <div id="shoppingGrpTab">
         <div id="#shopping1">
             <h3>안녕</h3>
             <h3>안녕</h3>
 ```
