import React, { Component } from 'react'
import NKLProductlist from './components/NKLProductlist'
import NKLProductAdd from './components/NKLProductAdd'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { title: 'NguyenKhanhLinh', id: 221090035, status: 1 },
        { title: 'Cabbage', id: 1, status: 1 },
        { title: 'Garlic', id: 2, status: 0 },
        { title: 'Apple', id: 3, status: 0 },
        { title: 'Samsung', id: 4, status: 1 },
      ],
    };
  }

  nklHandleSubmit = (param) => {
    console.log("App:", param);
    // them ms vao products
    let updatedProducts = [...this.state.products, param];
    this.setState({
      products: updatedProducts,
    });
  };

  render() {
    return (
      <div className='container border mt-6'>
        <h1>Nguyen Khanh Linh - Render Data - Event Form</h1>
        <hr/>
        <NKLProductlist renderProducts={this.state.products}/>
        <hr/>
        <NKLProductAdd onSubmit={this.nklHandleSubmit}/>
      </div>
    )
  }
}
