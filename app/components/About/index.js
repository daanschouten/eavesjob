import React from 'react';

export default function About(props) {
  return (
    <div id="two-thirds-page">
      <div className="right-sidebar">
        <div id="monitored-websites">
          <div id="sidebar-nav">
            <h2> About Eavesjob </h2>
          </div>
        </div>
      </div>
      <div id="two-thirds-left">
          <div id="large-list">
            <div className="paragraph">
              <p> Eavesjob is built to make it easier for you to monitor career pages. Instead of having to check whether new opportunities have become availble, we will just tell you. </p>
              <p> The absence of any filtering options (industry, company size, etc.) is intentional. There are plenty of websites already out there doing that exact thing. We cater to people who know what where they want to work, but don't want to go through the hassle of repeatedly checking particular career pages. </p>
            </div>
          </div>
      </div>
    </div>
  )
}
