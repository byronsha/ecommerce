var React = require('react');

var ProductList = React.createClass({
  render: function () {
    return (
      <div className="col-md-9">
        <ul className="product-list">
          {
            this.props.products.map(function (product, idx) {
              return (
                <li key={idx}>
                  <b>{product.brand} </b>{product.name}<br/>
                  ${product.price}<br/><br/>
                  {product.description}<br/>
                  <img width="150px" height="150px" src={product.image_url}></img>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
});

module.exports = ProductList;
