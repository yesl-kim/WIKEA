# Product Component

### state

- favoriteBTn : 위시리스트 버튼 색을 변경하기 위한 state입니다.

---

### function

- handleFavoriteBtn : 위시리스트 버튼 state를 변경하기 위한 함수입니다
- totalRating : 별점 점수에 따라 아이콘을 넣어주는 함수입니다.
  (반쪽짜리 별점 아이콘이 없어 일단 ic-cart로 대체했습니다!)

---

### props

- name : 제품 명
- category : 제품 카테고리
- price : 제품 가격
- isNew : 제품의 신상품 여부
- rating : 제품 별점
- img : 제품 url

- classGrid : product component에 그리드 속성을 부여하기 위한 className입니다

- children : <input type="checkbox">를 담기위한 children입니다
