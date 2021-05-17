# SideModal Component

## props

- **on** : boolean
  모달의 열림/닫힘 상태값을 부모에게서 전달받습니다.

- **handleSideModalOn** : function  
  클릭 시 컴포넌트의 상태값을 바꿔주는 함수를 "handleSideModlaOn" prop을 통해 전달해주어야 합니다.

- **direction** : "left" || "right"
  모달창이 어디서 나타날 지를 정합니다

  - left 화면의 왼쪽에서 들어옵니다.
  - right 화면의 오른쪽에서 들어옵니다.

- children (optional)  
  `this.props.children` 사용이 가능합니다.  
  모달 컴포넌트의 자식 요소를 부모 컴포넌트에서 전달해줄 수 있습니다.
