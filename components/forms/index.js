const React = require('react');
const PropTypes = require('prop-types');

class WebsiteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return(
        // <div className="form-title-vertical">
        //   <p>Fill in the name of a company, and one or more links to career pages of that company. Check the guidelines for submitting a company <a href="/support/guidelines">here</a>.</p>
        // </div>
        <div id="wrapper-single">
          <div className="single-center">
            <form method="POST" action={this.props.action} className="form-small">
              <div className="form-group">
                <input style={{marginBottom: "20px"}} type="text" placeholder="Website Name" name="name" className="big-input"/>
              </div>
              <div className="form-group">
                <input type="text" placeholder="Career Page URL (1)" name="url1" className="big-input"/>
              </div>
              <div className="form-group">
                <input type="text" placeholder="Career Page URL (2) (optional)" name="url2" className="big-input"/>
              </div>
              <div className="form-group">
                <input type="text" placeholder="Career Page URL (3) (optional)" name="url3" className="big-input"/>
              </div>
              <div className="form-group">
                <p>Once the the request comes through, we'll add the company to your subscribes automatically. Keep in mind this might take up to 24 hours.</p>
              </div>
              <div className="form-group">
                <button type="submit" className="big-button">Submit Website</button>
              </div>
            </form>
          </div>
        </div>
    )
  }
}

module.exports = {
  WebsiteForm: WebsiteForm
}
