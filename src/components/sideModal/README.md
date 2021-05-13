# SideModal Component

## props

- **direction** : "left" || "right"
  모달창이 어디서 나타날 지를 정합니다

  - left 화면의 왼쪽에서 들어옵니다.
  - right 화면의 오른쪽에서 들어옵니다.

- **on** : boolean
  모달의 열림/닫힘 상태값을 부모에게서 전달받습니다.

- **handleModalOn** : function  
  클릭 시 컴포넌트의 상태값을 바꿔주는 함수를 "handleModlaOn" prop을 통해 전달해주어야 합니다.

- children (optional)  
  `this.props.children` 사용이 가능합니다.  
  모달 컴포넌트의 자식 요소를 부모 컴포넌트에서 전달해줄 수 있습니다.

- title (optional)  
  모달창의 이름입니다.  
  실제 화면에서는 보이지 않습니다.
