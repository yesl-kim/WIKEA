const IP = '172.30.1.23:5000';
export const API = {
  SIGN_IN: `http://${IP}/user/signin`,
  SIGN_UP: `http://${IP}/user/signup`,

  DETAILS: `http://${IP}/product`,
  // =======
  CATEGORY: '/data/Categories/Categories.json',
  // >>>>>>> origin/feature/mainNavRouting

  NEW_PRODUCT: `http://${IP}/product/newList`,
  RECOMMENDED_PRODUCT: `http://${IP}/product/recommended_product`,
  // >>>>>>> origin/feature/main

  PRODUCT_LIST: `http://${IP}/product`,
};
