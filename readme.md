# 소개
nodejs를 이용해서<br>
서버를 생성하고 웹페이지 생성과 보안에 대한 모듈을 불러와<br>
파일 생성, 갱신, 삭제(CRUD), 보안을 실습하는 프로젝트다.
<br>
node.js는 현대적인 웹 애플리케이션을 위한 필수적인 요소이면서<br>
이를 통해 인터넷에 대한 매우 중요한 동작 원리를 알게 된다.
<br><br>
framework에서<br>
어떻게 컴포넌트를 불러오는지 이에 대한 원리<br>
보안이슈 해결방법<br>
nodejs api, npm에 대한 이해<br>
모듈에 대한 이해<br>
문법적으로는 비동기, 콜백, 객체 를 배울 수 있었다.
<br>
<br>
[생활코딩 nodejs](https://opentutorials.org/module/3549)<br>
[Jun님이 실습내용 정리해 놓은 블로그](https://blog.naver.com/dnjswns2280/221820533285)

# 실행방법
```bash
npm i
```
or
```bash
npm install -S sanitize-html
```
<br><br>
```bash
node main
```
브라우저 주소창에 localhost:3000 입력



# npm
```bash
npm init
```
을 입력하면 나의 프로젝트를 npm으로 관리하는 절차가 시작된다.
그리고 package.json 파일이 생성된다.

# 입력정보, 출력정보 에 대한 보안
url에서 query로 받는 data는 'path' 모듈로 경로를 지워준다. 이것을 통해 query로 상위 파일로 올라가는 것을 방지한다.<br>
데이터를 출력할 때 넣어서는 안되는 내용(예를 들어 script 구문)을 필터하기 위해 'sanitize html' 모듈을 사용한다.