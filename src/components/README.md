## Component 수정 항목

#### 수정된 js, scss

- **component**
- Footer.js.scss
- Product.js.scss
- Rate.js.scss

---

- **page-list**
- Lists.js.scss
- ListBtn.js.scss
- Sortbox.js.scss
- ItemExplanation.js.scss

---

- **page-detail**
- ImgSlider.js.scss

  (ImgSlider : const W = 600? 500?)

- ImgModal.js.scss

- Main.js.scss => DetailMain.js.scss로 변경, DetailMain.scss => height 100vh 삭제

- Detail.js => sideModal 조건부랜더링 전체에서 DetailsModal로 조건부랜더링 부여(transition이 작동 불능 관계로)

- Detail.js => state에 recommended, fetch 추가

- **page-main**
- MainNavModal.js => trello 반영
- ***

- **common**
- Routes.json(Footer추가)
- Nav.js handleMainNavModalOn 추가
