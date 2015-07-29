var Product = React.createClass({

  toggleLiked: function() {
    this.setState({
      // liked: !this.state.liked
    });
  },

  render: function() {
    return (
      <div className='product'>
        <h2>  {this.props.product.name} </h2>
        <span> {this.props.product.description} </span>
      </div>
    );
  }
});

var ProductsList = React.createClass({
  getInitialState: function() {
      return {
        products: []
      };
  },
  componentDidMount: function() {
    
    var that = this;
    jQuery(document).ready(function($) {
      $.ajax({
        url: "http://applidget.github.io/www-mobiloc/_data/products.yml",
      })
      .done(function( data ) {
        that.setState({products: jsyaml.load(data)});
      });
    });
  },
  render: function() {

    var products = this.state.products.map(function(product) {
      return <Product key={product.name} product={product} />
    });

    return (
      <div className='product-gallery'>
        {products}
      </div>
    );
  }
});

React.render(<ProductsList />, document.getElementById('Container'));