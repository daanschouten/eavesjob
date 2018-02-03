const React = require('react');
const PropTypes = require('prop-types');
const { RegisterForm } = require('../Forms');

// let { searchIcon } = require('../../img');

// class Home extends React.Component {
//   constructor(props) {
//     super(props);
//     this.redirectSupport = this.redirectSupport.bind(this);
//     this.redirectRegister = this.redirectRegister.bind(this);
//   }
//   redirectSupport() {
//     location.href = '/support';
//   }
//   redirectRegister() {
//     location.href = '/register';
//   }
//   render() {
//     return (
//       <div className="container-single">
//         <div className="container-center">
//           <h1 className="title">We monitor career pages,<br /> so you don't have to.</h1>
//           <p> Checking for new vacancies can be a hassle. <br/> With Eavesjob, you just select the career pages you're interested in. Whenever career opportunities appear, we'll send you an email.  </p>
//           <div id="front-buttons">
//             <button onClick= {this.redirectRegister } className="big-button">Sign Up Free</button>
//             <button onClick= {this.redirectSupport} className="big-button">Read More</button>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

class HowItWorks extends React.Component {
  render() {
    return(
      <div className="container-single">
        <div className="container-center">
          <h1> see how it works </h1>
        </div>
        <div className="container-center">

          <div className="explain-single">
            <div className="explain-text">
              <img src="../../img/one.svg"></img>
              <p> Find the career pages you want monitored. </p>
            </div>
            <img src="../../img/searchWebsite.png"/>
          </div>

          <div className="explain-single">
            <div className="explain-text">
              <img src="../../img/two.svg"></img>
              <p> Select up to five pages, or go premium. </p>
            </div>
            <img src="../../img/clickWebsite.png"/>
          </div>

          <div className="explain-single">
            <div className="explain-text">
              <img src="../../img/three.svg"></img>
              <p> Sit back, and keep an eye on your inbox. </p>
            </div>
            <img src="../../img/monitorWebsite.png"/>
          </div>

        </div>
      </div>
    )
  }
}

export default function RegisterHome(props) {
  return(
    <div className="container-single">
      <div className="container-double">
        <div className="container-left">
          <h1 className="title">We monitor career pages,<br/> so you don't have to. </h1>
          <p className="subtitle"> Checking for new vacancies can be a hassle. With Eavesjob, you just select the career pages you're interested in. When job opportunities appear, we'll send you an email.  </p>
        </div>
        <div className="container-right">
          <div className ="single">
            <div className="form-title">
              <h1> Join for Free! </h1>
            </div>
            <RegisterForm onRegister = {props.onRegister} />
          </div>
        </div>
      </div>
      <HowItWorks/>
    </div>
  )
}
