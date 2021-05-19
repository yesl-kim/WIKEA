const IP = '172.30.1.23:5000';
export const API = {
  SIGN_IN: `http://${IP}/users/signin`,
  SIGN_UP: `http://${IP}/user/signup`,
  // <<<<<<< HEAD
  // <<<<<<< HEAD
  DETAILS: `http://${IP}/product/detail/`,
  // =======
  CATEGORY: '/data/Categories/Categories.json',
  // >>>>>>> origin/feature/mainNavRouting
  // =======
  NEW_PRODUCT: `http://${IP}/product/newList`,
  NEW_PRODUCT_TEST: `/data/NewProducts/NewProducts.json`,
  // >>>>>>> origin/feature/main
};
