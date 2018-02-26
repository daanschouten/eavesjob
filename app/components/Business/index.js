import React from 'react';

import {
    Route,
    Link,
    NavLink,
    Switch
} from 'react-router-dom';

export default function Business(props) {
  return (
    <div id="two-thirds-page">
      <div className="right-sidebar">
        <div id="monitored-websites">
          <div id="sidebar-nav">
            <h2> For Businesses </h2>
            <NavLink to="/business" exact > What We Mean for You </NavLink>
            <NavLink to="/business/like"> Like What We Do? </NavLink>
            <NavLink to="/business/dislike"> Dislike What We Do? </NavLink>
          </div>
        </div>
      </div>
      <div id="two-thirds-left">
          <div id="large-list">
            <Switch>
              <Route path="/business" exact component={General} />
              <Route path="/business/like" component={Like} />
              <Route path="/business/dislike" component={Dislike} />
              <Route component = { General }/>
            </Switch>
          </div>
      </div>
    </div>
  )
}

function General() {
  return (
    <div className="paragraph">
      <p> Essentially, we publicise your career pages, and make them more easily accessible to people interested in your company. </p>
      <p><span>Either you think this is a </span><Link to='/business/like'>good thing</Link><span>.</span></p>
      <p><span>Or you think this is a </span><Link to='/business/dislike'>bad thing</Link><span>.</span></p>
    </div>
  )
}

function Like() {
  return (
    <div className="paragraph">
      <p> There is a number of reasons for why you might like what we do. </p>
      <p> First, you no longer need to pay for other websites to put up your vacancies, as having them on your own career page(s) is enough. We are working on an Eavesjob button that redirects users here so they can keep updated more easily.  </p>
      <p> Second, you are likely to receive more applications than you did before. </p>
    </div>
  )
}

function Dislike() {
  return (
    <div className="paragraph">
      <p> The one reason for disliking what we do is probably that you may be receiving more applications that you'd like. You are no longer filtering genuinely interested candidates by making them visit your website for opportunities. </p>
      <p> First, we'd like to remind you that Eavesjob is very much search-based. There is no possiblity to select an industry and just subscribe to all companies. This means that most people subscribed to your career page(s) have actually done so purposefully. </p>
      <p> If you still aren't convinced, we do respect the robots file located at the root of your folder structure. We won't scan your career page(s) if you tell us not to. </p>
      <p><span> You can also </span><Link to='/contact'> contact </Link><span> us and we will stop monitoring your pages. </span></p>
    </div>
  )
}
