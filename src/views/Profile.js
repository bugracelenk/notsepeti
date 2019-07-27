import React, { Component } from "react";

export default class Profile extends Component {
  render() {
    return (
      <div className="">
        <div className="downloads">
          <h1>Downloaded Notes</h1>
          <div className="downloads-downloaded">
            <ul className="downloads-list">
              <li className="downloads-item">
                <div className="downloads-note">
                  <div className="downloads-note-header">
                    <h3>Title</h3>
                    <h4>Download Time</h4>
                  </div>
                  <div className="downloads-note-main">
                    <h4>Class</h4>
                    <h4>Author</h4>
                    <h4>Credit</h4>
                  </div>
                </div>
              </li>
              <li className="downloads-item">
                <div className="downloads-note">
                  <div className="downloads-note-header">
                    <h3>Title</h3>
                    <h4>Download Time</h4>
                  </div>
                  <div className="downloads-note-main">
                    <h4>Class</h4>
                    <h4>Author</h4>
                    <h4>Credit</h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
