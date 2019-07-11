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
              <div className="jumbotron-searchWrapper">
                <input
                  id="jumbosearch"
                  name="jumbosearch"
                  placeholder="What do you want to study ?"
                />
              </div>
              <span className="button-search">
                <i class="fas fa-search" />
              </span>
            </div>
          </div>
        </div>

        <div className="section">
          <h1>
            Recommended <span>For You</span>
          </h1>
          <div className="recomendetions">
            <div className="recommended">
              <div className="recommended-top">
                <span className="recommended-count">01</span>
              </div>
              <div className="recommended-bottom">
                <h3>Coding</h3>
              </div>
            </div>
            <div className="recommended">
              <div className="recommended-top">
                <span className="recommended-count">01</span>
              </div>
              <div className="recommended-bottom">
                <h3>Coding</h3>
              </div>
            </div>
            <div className="recommended">
              <div className="recommended-top">
                <span className="recommended-count">01</span>
              </div>
              <div className="recommended-bottom">
                <h3>Coding</h3>
              </div>
            </div>
            <div className="recommended">
              <div className="recommended-top">
                <span className="recommended-count">01</span>
              </div>
              <div className="recommended-bottom">
                <h3>Coding</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <h1>
            Top <span>Category</span>
          </h1>
          <div className="categories">
            <div className="categories-category">
              <i class="fas fa-arrows-alt" />
              <h3>Development</h3>
            </div>
            <div className="categories-category">
              <i class="fas fa-arrows-alt" />
              <h3>Development</h3>
            </div>
            <div className="categories-category">
              <i class="fas fa-arrows-alt" />
              <h3>Development</h3>
            </div>
            <div className="categories-category">
              <i class="fas fa-arrows-alt" />
              <h3>Development</h3>
            </div>
            <div className="categories-category">
              <i class="fas fa-arrows-alt" />
              <h3>Development</h3>
            </div>
            <div className="categories-category">
              <i class="fas fa-arrows-alt" />
              <h3>Development</h3>
            </div>
          </div>
        </div>

        <div className="section">
          <h1>
            Trending <span>Now</span>
          </h1>
          <div className="trends">
            <div
              className="trends-trend"
              style={{
                backgroundImage:
                  "url(" + "https://i.hizliresim.com/zG5Y6j.png" + ")"
              }}
            >
              <img
                alt="trends-trend-icon"
                className="trends-trend-icon"
                src="https://i.hizliresim.com/gP8y75.png"
              />
              <h3>Law</h3>
            </div>
            <div
              className="trends-trend"
              style={{
                backgroundImage:
                  "url(" + "https://i.hizliresim.com/zG5Y6j.png" + ")"
              }}
            >
              <img
                alt="trends-trend-icon"
                className="trends-trend-icon"
                src="https://i.hizliresim.com/gP8y75.png"
              />
              <h3>Law</h3>
            </div>
            <div
              className="trends-trend"
              style={{
                backgroundImage:
                  "url(" + "https://i.hizliresim.com/zG5Y6j.png" + ")"
              }}
            >
              <img
                alt="trends-trend-icon"
                className="trends-trend-icon"
                src="https://i.hizliresim.com/gP8y75.png"
              />
              <h3>Law</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
