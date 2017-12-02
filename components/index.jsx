const React = require('react');
const PropTypes = require('prop-types');

class MyComponent extends React.Component {
  render () {
    return(
      <div className="header">
          <h1> {this.props.title} </h1>
      </div>
    );
  }
}

let Head = (props) => {
  return(
    <div className="header">
        <h1> {props.title} </h1>
    </div>
  );
}

Head.defaultProps = {
  title: "EavesJob"
};

let Header = (props) => {
  return(
    <div className="header">
        <h1> {props.title} </h1>
    </div>
  );
}

Header.defaultProps = {
  title: "Header"
};

let Application = function(props) {
  return (
    <div className="application">
      <Header title= {props.title}/>
      <div className="players">
        <div className="player">
          <div className="player-name">
          </div>
          <div className="player-score">
          </div>
        </div>
      </div>
    </div>
  );
}

Application.propTypes = {
  title: PropTypes.string,
};

Application.defaultProps = {
  title: "Scoreboard"
}

let Single = function(props) {
  return (
    <div className= "single-website">
      <div className= "single-logo">
        <p> {props.extension} </p>
      </div>
      <div className= "single-name">
        <p> {props.name} </p>
      </div>
      <div className= "single-date">
        <p> {props.date} </p>
      </div>
      <div className= "single-monitor">
      </div>
    </div>
  );
}

Single.propTypes = {
  extension: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

module.exports = {
    MyComponent: MyComponent,
    Application: Application,
    Head: Head,
    Header: Header,
    Single: Single
};
