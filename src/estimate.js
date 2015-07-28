var Estimate = React.createClass({
  render: function() {
    return (
      <div>
        <h1> This is an estimate Form </h1>
        <Amandine />
      </div>
    );
  }
});

React.render(
  <Estimate/>,
  document.getElementById('estimate')
);