#0621 DAY6 내용정리
-

### 웹 환경 이해하기
-

### form
내용 복습
```
<form name="register-form" action="서버스크립트파일의위치" method="GET/POST" enctype="">
	<input type="submit">
	<div>
		<label for="register-id">id</label>
		<input type="text" id="register-id">
	</div>
	<div>
		<label for="register-pass">password</label>
		<input type="password" id="register-pass">
	</div>
	<button type="submit">버튼</button>
</form>
```
* form 속성
	- name : 서버에 form을 전달할 때 name 값을 통해 정보를 전달하여 구분 지음.
	- action : 서버스크립트 파일의 목적지 값을 입력.
	- method : GET - 빠른 서버의 통신이 가능하나, 파일 전달이 안되고 주로 텍스트 위주로 보낼 수 있으며, 보안에 취약함. / POST - 중요한 정보를 넘기거나 복잡한 파일을 전달할 때 쓴다.
* label : input 요소와 컨텐츠를 같은 값으로 연결시켜준다. but, form 요소 안에서만 쓰인다.
> <label>ID<input type="text"></label> <!-- 암묵적인 방식 -->
> <label for="register_id">ID</label><input id="register_id" type="text"> <!-- 명시적인 방식 --><br>
 <br>
```
<form action="#" method="POST" enctype="#">
	<fieldset>
		<legend>register</legend>
		<div>
			<label for="register-id">id</label>
			<input type="text" id="register-id" name="register-id">
		</div>
		<div>
			<input id="gender-male" name="register-gender-a" type="radio" value="1"><label for="gender-male">Male</label>
			<input id="gender-female" name="register-gender-a" type="radio" value="2"><label for="gender-female">Female</label>
		</div>
		<div>
			<input type-"checkbox" value="sleep" name="register_hobby">잠자기</label>
			<input type-"checkbox" value="sleep" name="register_book">책읽기</label>
		</div>
		<div>
			<input type="file" name="uploadfile" id="upload" value="업로드">
		</div>
		<div>
			<input type="text" placeholder="j35148" maxlength="10"></div>
		<div>
			<input type="email" id="email" placeholder="j35148@email.com">
		</div>
		<textarea name="message" id="textarea" cols="30" rows"10"></textarea>
		<input type="submit" value="전송">
		<button type="submit">전송</button>
	</fieldset>
</form>
```
* fieldset : form 안에 들어가는 요소로 특정 필드를 한 그룹으로 묶는 역할을 한다.
* legend : fieldset의 제목.
* input 
	- 타입 
		+ text : 일반적인 텍스트를 넣는 역할. 
		> textarea는 여러 줄 여러 칸으로 사용이 가능함. css로 리사이즈를 막을 수 있고, contenteditabel을 true로 맞추면 편집이 가능함.
		+ password : 텍스트를 입력할 경우 텍스트가 암호화되어 나온다. 비밀번호를 사용할 때 씀.
		+ radio : 여성/남성 같이 필수로 선택해야하는 항목에 쓰임. 
		+ checkbox : 다중으로 선택이 가능함. checkbox나 radio는 각각의 인풋요소를 하나의 name값으로 연결 시켜줘야 함.
		+ file : 파일을 업로드 할 수 있게 함. form method 방식과 함께 생각하기.
		+ email 
		+ submit : button type="submit" 과도 교차 사용이 가능함. 
	- 그 외의 속성 
		+ disable : 기본 값 고정
		+ maxlength : 최대 길이 값을 고정.
		+ placeholder : 예씨를 위한 가이드 텍스트.
* select : option과 optgroup이 쓰인다.
```
<select name="job">
					<option value="">select</option>
					<!-- value 값이 없는 이유는 아무것도 선택되지 않음을 의미합니다. -->
					<option value="student" selected>student</option>
					<!-- selected의 값은 radio의 checked 값처럼 미리 선택되게 만들어 줍니다. -->
					<option value="instructor">instructor</option>
					<option value="doctor">doctor</option>
					<optgroup label="web">
						<option value="developer">developer</option>
						<option value="designer">designer</option>
						<option value="planner">planner</option>
						<option value="developer">developer</option>
					</optgroup>
					<!-- 옵션 그룹을 묶는다. -->
				</select>
```
