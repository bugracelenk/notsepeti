import React, { Component } from "react";

export default class Main extends Component {
  render() {
    return (
      <div className="overlay">
        <div className="jumbotron">
          <div className="jumbotron-left">
            <img alt="jumbo-image" />
          </div>
          <div className="jumbotron-right">
            <div className="jumbotron-title">
              <h4>Study any topic, anytime</h4>
              <h1>
                Just <span>Learn</span>
              </h1>
            </div>
            <div className="jumbotron-search">
              <div className="jumbotron-searchWrapper"><input id="jumbosearch" name="jumbosearch" placeholder="What do you want to study ?"/></div>
              <span className="button-search"><i class="fas fa-search"></i></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
