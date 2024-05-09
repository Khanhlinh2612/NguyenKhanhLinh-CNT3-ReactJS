import React, { Component } from 'react';

export default class NKLProductlist extends Component {
  render() {
    const { renderProducts } = this.props;

    const fnStatus = (param) => {
      return param === 1 ? 'Active' : 'NonActive';
    };

    const elementProduct = renderProducts.map((item, index) => (
      <tr key={index}>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{fnStatus(item.status)}</td>
      </tr>
    ));

    return (
      <div>
        <h2>Danh sách sản phẩm</h2>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{elementProduct}</tbody>
        </table>
      </div>
    );
  }
}
