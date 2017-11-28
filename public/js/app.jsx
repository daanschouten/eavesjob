let Header = function(props) {
  return(
    <div className="header">
      <h1> {props.title} </h1>
    </div>
  )
}

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
  title: window.PropTypes.string,
};

Application.defaultProps = {
  title: "Scoreboard"
}

ReactDOM.render(<Application/>, document.getElementById('container'));
