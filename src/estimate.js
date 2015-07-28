var Estimate = React.createClass({
  render: function() {
    return (
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Articles</th>
              <th>P.U</th>
              <th>Q</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <DeviceType />
          </tbody> 
        </table>
      </div>
    );
  }
});

React.render(
  <Estimate/>,
  document.getElementById('estimate')
);