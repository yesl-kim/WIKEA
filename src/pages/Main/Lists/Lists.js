import React from 'react';
import ItemExplanation from './ItemExplanation/ItemExplanation';
import ListBtn from './ListBtn/ListBtn';
import Products from './Products/Products';
import Product from '../../../components/Product/Product';
import './Lists.scss';

class Lists extends React.Component {
  constructor() {
    super();

    this.state = {
      product: [
        {
          name: '멋있는 램프',
          category: '탁상스탠드',
          price: '5,000',
          isFavorite: false,
          rating: 4.5,
          img: 'https://www.ikea.com/kr/ko/images/products/arstid-…ble-lamp-brass-white__0880725_pe617347_s5.jpg?f=m',
        },
        {
          name: '멋있는 램프',
          category: '탁상스탠드',
          price: '5,000',
          isFavorite: false,
          rating: 4.5,
          img: 'https://www.ikea.com/kr/ko/images/products/arstid-…ble-lamp-brass-white__0880725_pe617347_s5.jpg?f=m',
        },
        {
          name: '멋있는 램프',
          category: '탁상스탠드',
          price: '5,000',
          isFavorite: false,
          rating: 4.5,
          img: 'https://www.ikea.com/kr/ko/images/products/arstid-…ble-lamp-brass-white__0880725_pe617347_s5.jpg?f=m',
        },
        {
          name: '멋있는 램프',
          category: '탁상스탠드',
          price: '5,000',
          isFavorite: false,
          rating: 4.5,
          img: 'https://www.ikea.com/kr/ko/images/products/arstid-…ble-lamp-brass-white__0880725_pe617347_s5.jpg?f=m',
        },
        {
          name: '멋있는 램프',
          category: '탁상스탠드',
          price: '5,000',
          isFavorite: false,
          rating: 4.5,
          img: 'https://www.ikea.com/kr/ko/images/products/arstid-…ble-lamp-brass-white__0880725_pe617347_s5.jpg?f=m',
        },
        {
          name: '멋있는 램프',
          category: '탁상스탠드',
          price: '5,000',
          isFavorite: false,
          rating: 4.5,
          img: 'https://www.ikea.com/kr/ko/images/products/arstid-…ble-lamp-brass-white__0880725_pe617347_s5.jpg?f=m',
        },
        {
          name: '멋있는 램프',
          category: '탁상스탠드',
          price: '5,000',
          isFavorite: false,
          rating: 4.5,
          img: 'https://www.ikea.com/kr/ko/images/products/arstid-…ble-lamp-brass-white__0880725_pe617347_s5.jpg?f=m',
        },
        {
          name: '멋있는 램프',
          category: '탁상스탠드',
          price: '5,000',
          isFavorite: false,
          rating: 4.5,
          img: 'https://www.ikea.com/kr/ko/images/products/arstid-…ble-lamp-brass-white__0880725_pe617347_s5.jpg?f=m',
        },
        {
          name: '멋있는 램프',
          category: '탁상스탠드',
          price: '5,000',
          isFavorite: false,
          rating: 4.5,
          img: 'https://www.ikea.com/kr/ko/images/products/arstid-…ble-lamp-brass-white__0880725_pe617347_s5.jpg?f=m',
        },
        {
          name: '멋있는 램프',
          category: '탁상스탠드',
          price: '5,000',
          isFavorite: false,
          rating: 4.5,
          img: 'https://www.ikea.com/kr/ko/images/products/arstid-…ble-lamp-brass-white__0880725_pe617347_s5.jpg?f=m',
        },
        {
          name: '멋있는 램프',
          category: '탁상스탠드',
          price: '5,000',
          isFavorite: false,
          rating: 4.5,
          img: 'https://www.ikea.com/kr/ko/images/products/arstid-…ble-lamp-brass-white__0880725_pe617347_s5.jpg?f=m',
        },
      ],
    };
  }

  componentDidMount() {
    fetch('http://10.58.1.239:5000/product/cat/table-lamps')
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res,
        });
      });
  }

  render() {
    const { product } = this.state;

    return (
      <main className="grid-container">
        <div className="row">
          <div className="col-lg-1 col-md-1"></div>
          <div className="col-lg-12 col-md-11">
            <ItemExplanation />
            <ListBtn />
            <Products>
              {/* {product.map(item => (
                <Product
                  name={item.name}
                  category={item.category}
                  price={item.price}
                  isFavorite={item.isFavorite}
                  rating={item.rating}
                  img={item.img}
                />
              ))} */}
            </Products>
          </div>
        </div>
      </main>
    );
  }
}

export default Lists;
