# WIKEA

> [데모 영상](https://youtu.be/I6-gSyTRVAU)  
> [자세한 코드 설명과 회고록](https://yesl-kim.github.io/posts/wikea)

<br/>

|           |                                                                           Front-end                                                                            |                                       Back-end                                       |
| :-------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------: |
|   팀원    | [김수연](https://github.com/ksy4568), [김예슬](https://github.com/yesl-kim), [노선경](https://github.com/celline1637), [안정현](https://github.com/ahnjeongh2) | [정운산](https://github.com/Action2theFuture), [최우석](https://github.com/tonic523) |
| 기술 스택 |                                                                HTML, SCSS, JavaScript, React.js                                                                |                 Python, Django web framework, Bcrypt, My SQL, pyjwt                  |

---

## 🖍 프로젝트 소개

- 국내 이케아 사이트를 참고하여 처음부터 끝까지 직접 개발한 인테리어 가구 쇼핑몰 사이트입니다.

## 🎯 프로젝트 목표

- Scrum 진행 방식을 이해하고 적용 → 협업하는 개발자가 되자!
- React의 기본 개념과 라이프사이클에 대한 이해
- REST API로 백엔드와 통신 이해
- 동적 라우팅 동작 이해

## 📌 프로젝트 진행

### 업무 관리

- Trello를 활용하여 Scrum 방식으로 업무 진행
- 매일 Daily Standup 미팅을 통해 진행상황과 blocker를 공유하고 매주 Sprint 미팅을 통해 빠른 피드백
- **1st Sprint** 전체 레이아웃, 컴포넌트화
- **2nd Sprint** 컴포넌트 별 기능 구현, 프론트-백 통신, conflict 수정 작업

### 구현 사항

- 로그인, 회원가입
- **메인 페이지**
- 리스트 페이지
- 상세 페이지

### 내가 기여한 기능 - 메인 페이지

![메인- 텝메뉴 (1).gif](<https://s3-us-west-2.amazonaws.com/secure.notion-static.com/27f4ea86-f4e9-415d-8b17-0f579c4bbedf/메인-_텝메뉴_(1).gif>)

- 객체 매핑을 활용하여 GNB 구현
- 제품 카테고리를 path parameter로 담아 동적 라우팅
- 공용 사이드 모달 컴포넌트 구현 후 [README.md](http://README.md) 파일로 문서화 (props의 타입, optional, 설명 기입)
- REST API로 서버와 통신 후 신제품, 카테고리 데이터 받아오기
- 미디어쿼리로 테블릿 사이즈의 반응형 구현
- 상단 Nav 바의 스크롤 애니메이션 구현 후 디바운싱 적용

<br/>

## 💥 Reference

- 이 프로젝트는 [이케아(IKEA)](https://www.ikea.com/kr/ko/) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
