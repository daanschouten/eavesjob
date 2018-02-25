const React = require('react');
const PropTypes = require('prop-types');

import {
    Route,
    Link,
    NavLink,
    Switch
} from 'react-router-dom';

export default function Support(props) {
  return (
    <div id="two-thirds-page">
      <div className="right-sidebar">
        <div id="monitored-websites">
          <div id="sidebar-nav">
            <h2> Support </h2>
            <NavLink to="/support" exact > Getting Started </NavLink>
            <NavLink to="/support/verify"> Verify Email Address </NavLink>
            <NavLink to="/support/subscribing"> Subscribe to Career Pages </NavLink>
            <NavLink to="/support/emails"> Receiving Emails </NavLink>
            <NavLink to="/support/requesting"> Request new Career Pages </NavLink>
            <NavLink to="/support/modifying"> Modify existing Career Pages </NavLink>
            <NavLink to="/support/premium"> Go Premium </NavLink>
            <NavLink to="/support/robots"> Robots Prevent Monitoring </NavLink>
          </div>
        </div>
      </div>
      <div id="two-thirds-left">
          <div id="large-list">
            <Switch>
              <Route path="/support" exact component={GettingStarted} />
              <Route path="/support/verify" component={Verifying} />
              <Route path="/support/subscribing" component={Subscribing} />
              <Route path="/support/emails" component={Emails} />
              <Route path="/support/requesting" component={Requesting} />
              <Route path="/support/modifying" component={Modifying} />
              <Route path="/support/premium" component={Premium} />
              <Route path="/support/robots" component={Robots} />
              <Route component = { GettingStarted }/>
            </Switch>
          </div>
      </div>
    </div>
  )
}

function GettingStarted() {
  return (
    <div className="paragraph">
      <p> Start off by searching for the company or organisation whose career page(s) you would like to stay informed about. Once you have found the company, you can click the arrow to see the career page link(s) we have stored. </p>
      <p><span> Check out how to subscribe to a page </span><Link to='/support/subscribing'>here</Link><span>.</span></p>
      <p><span> No results? Try an alternative name or abbreviation. Otherwise, you can always add the page yourself in a few seconds. Check out our </span><Link to='/support/requesting'>section</Link><span> on requesting a new page.</span></p>
    </div>
  )
}

function Verifying() {
  return (
    <div className="paragraph">
      <p> If we need to tell you about a new career opportunity, or if you ever want to reset your password, we need to know your email address is correct. </p>
      <p> Also, make sure to add us to your contacts so that our emails don't end up in the wrong folder. </p>
    </div>
  )
}

function Subscribing() {
  return (
    <div className="paragraph">
      <p> Click the toggle on the right side of the website bar so that it turns green. The website you are subscribed to will now also appear in the top right of your screen, as well as on your profile page. </p>
      <p><span> Want to monitor more than five career pages? For the price of a cappucino, you can go </span><Link to='/support/premium'>premium</Link><span>.</span></p>
      <p><span> Facing an issue trying to subscribe to a career page? </span><Link to='/contact'>Contact</Link><span> us.</span></p>
    </div>
  )
}

function Emails() {
  return (
    <div className="paragraph">
      <p> When a new vacancy appears on a page you are subscribed to, we'll send you an email. Make sure that you add us to your contacts so that your new job opportunity does not end up in the wrong folder.</p>
      <p><span> Not receiving any emails even though you should have? </span><Link to='/contact'>Contact</Link><span> us.</span></p>
    </div>
  )
}

function Requesting() {
  return (
    <div className="paragraph">
      <p> If you want us to monitor a career page not yet in our database, you can request it in a matter of seconds. Try searching for the company first. If no results are returned, the form to request a new one will appear. Once we have added the website to the database, it will automatically appear among your subscribed websites. </p>
    </div>
  )
}

function Modifying() {
  return (
    <div className="paragraph">
      <p> Does a particular company have a career page we do not yet monitor? Click on the arrow on the website bar, and then on the button called 'add link'. </p>
    </div>
  )
}

function Premium() {
  return (
    <div className="paragraph">
      <p> Going premium will allow you to subscribe to up to a hundred pages. </p>
      <p> We would recommend going premium if there are many different companies you'd be willing to work for, and you want to save some time on having to check all of them repeatedly. </p>
      <p><span> Check our </span><Link to='/premium'>premium</Link><span> page for more information.</span></p>
    </div>
  )
}

function Robots() {
  return (
    <div className="paragraph">
      <p> Websites can indicate that they would rather not have us monitor their career pages, which we respect. </p>
      <p> We would recommend not subscribing to such a page, as we won't be able to keep you updated. </p>
    </div>
  )
}
