const React = require('react');
const PropTypes = require('prop-types');
import {
    Redirect,
    Route,
    NavLink,
    Switch,
    withRouter
} from 'react-router-dom';

export default function Support(props) {
  return (
    <div id="two-thirds-page">
      <div className="right-sidebar">
        <div id="monitored-websites">
          <div id="sidebar-nav">
            <NavLink to="/support" exact > Getting Started </NavLink>
            <NavLink to="/support/subscribing"> Subscribe to Career Pages </NavLink>
            <NavLink to="/support/emails"> Receiving Emails </NavLink>
            <NavLink to="/support/requesting"> Request new Career Pages </NavLink>
            <NavLink to="/support/modifying"> Modify existing Career Pages </NavLink>
            <NavLink to="/support/premium"> Go Premium </NavLink>
          </div>
        </div>
      </div>
      <div id="two-thirds-left">
          <div id="large-list">
            <Switch>
              <Route path="/support" exact component={GettingStarted} />
              <Route path="/support/subscribing" component={Subscribing} />
              <Route path="/support/emails" component={Emails} />
              <Route path="/support/requesting" component={Requesting} />
              <Route path="/support/modifying" component={Modifying} />
              <Route path="/support/premium" component={Premium} />
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
      <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>
    </div>
  )
}

function Subscribing() {
  return (
    <div className="paragraph">
      <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>
    </div>
  )
}

function Emails() {
  return (
    <div className="paragraph">
      <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>
    </div>
  )
}

function Requesting() {
  return (
    <div className="paragraph">
      <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>
      <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>
    </div>
  )
}

function Modifying() {
  return (
    <div className="paragraph">
      <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>
    </div>
  )
}

function Premium() {
  return (
    <div className="paragraph">
      <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>
    </div>
  )
}
