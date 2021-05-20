import React, { Component } from 'react';
import Label from '../Label/Label';
import './NewProduct.scss';

class NewProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLabelsOn: this.props.section.products.map((product, idx) => idx === 0),
    };
  }

  handleLabelOn = idx => {
    this.setState({
      isLabelsOn: this.state.isLabelsOn.map((el, index) => index === idx),
    });
  };

  render() {
    const { isLabelsOn } = this.state;
    const { section } = this.props;
    return (
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="new_product" onMouseLeave={() => this.handleLabelOn(0)}>
          <img alt="신제품 인테리어" src={section.url} />
          {section.products.map((product, idx) => (
            <Label
              key={product.id}
              number={section.id}
              product={product}
              idx={idx}
              on={isLabelsOn[idx]}
              handleHover={this.handleLabelOn}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default NewProduct;
