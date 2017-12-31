const React = require('react');
const PropTypes = require('prop-types');

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer>
        <div id="footer-left">
          <div className="footer-column">
          </div>
        </div>
        <div id="footer-right">
          <div className="footer-column">
          </div>
          <div className="footer-column">
          </div>
        </div>
      </footer>
    )
  }
}
