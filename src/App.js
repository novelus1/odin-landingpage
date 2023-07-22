import React from "react";
import "./App.css";

import page from "./page.jpg";
import clown from "./clown.jpg";
import mad from "./mad.jpg";
import happy from "./happy.png";
import hacker from "./hacker.jpg";

function App() {
  return (
    <div>
      <header className="hero-section">
        <div className="hero-section__header-links-container">
          <div className="hero-section__header-logo">Header Logo</div>
          <div className="hero-section__header-links">
            <div className="hero-section__header-link">header link one</div>
            <div className="hero-section__header-link">header link two</div>
            <div className="hero-section__header-link">header link three</div>
          </div>
        </div>
        <div className="hero-section__main-text">
          <div className="hero-section__main-text-wrapper">
            <h1 className="hero-section__bold-text">This website is awesome</h1>
            <p>
              This website has some subtext that goes here under the main title.
              It's a smaller font and the color is lower contrast
            </p>
            <button className="hero-section__sign-up-button">Sign up</button>
          </div>
          <img src={page} alt="Landing page" className="hero-section__landing-page" />
        </div>
      </header>

      <div className="random-information">We have a few Pepes in here!</div>

      <section className="image-section">
        <div className="image-section__image-list">
          <div className="image-section__image-and-description">
            <div
              className="image-section__image"
              style={{ backgroundImage: `url(${happy})` }}
            ></div>
            <div className="image-section__description">Happy Pepe</div>
          </div>
          <div className="image-section__image-and-description">
            <div
              className="image-section__image"
              style={{ backgroundImage: `url(${hacker})` }}
            ></div>
            <div className="image-section__description">Hacker Pepe</div>
          </div>
          <div className="image-section__image-and-description">
            <div
              className="image-section__image"
              style={{ backgroundImage: `url(${clown})` }}
            ></div>
            <div className="image-section__description">Clown Pepe</div>
          </div>
          <div className="image-section__image-and-description">
            <div
              className="image-section__image"
              style={{ backgroundImage: `url(${mad})` }}
            ></div>
            <div className="image-section__description">Mad Pepe</div>
          </div>
        </div>
      </section>

      <section className="quote-section">
        <div className="quote-section__quote-container">
          <div className="quote-section__quote">
            This is an inspiring quote, or a testimonial from a customer. Maybe
            it's just filling up space, or maybe people will actually read it.
            Who knows? All I know is that it looks nice.
          </div>
          <span className="quote-section__signature">-Thor, God of Thunder</span>
        </div>
      </section>

      <section className="call-to-action-section">
        <div className="call-to-action-section__text-container">
          <div>
            <div className="call-to-action-section__text">Call to action! It's time!</div>
            <p>
              Sign up for our product by clicking that button right over there!
            </p>
          </div>
          <button className="call-to-action-section__sign-up-button">Sign up</button>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__text">Copyright © The Odin Project 2021</div>
      </footer>
    </div>
  );
}

export default App;