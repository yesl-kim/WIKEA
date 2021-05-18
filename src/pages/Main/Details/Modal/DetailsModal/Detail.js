import React, { Component } from 'react';

class Detail extends Component {
  constructor() {
    super();
    this.state = {
      iscollapsed: false,
    };
  }

  showDetails = () => {
    const { iscollapsed } = this.state;
    this.setState({
      iscollapsed: !iscollapsed,
    });
    console.log('clicked');
  };

  render() {
    const { title } = this.props;
    const { iscollapsed } = this.state;
    return (
      <li className="accordion_item">
        <button onClick={this.showDetails} className="accordion_title">
          <h2>{title}</h2>
          <i className="ic-chevron" />
        </button>
        <div className={`accordion_contents ${iscollapsed ? 'show' : ''}`}>
          {this.props.children}
        </div>
      </li>
    );
  }
}

export default Detail;
