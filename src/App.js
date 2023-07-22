import "./App.css";
import page from "./page.jpg";
import frog from "./frog.png";

function App() {
  return (
    <div>
      <div className="hero-section-container">
        <div className="header-links-container">
          <div className="header-logo">Header Logo</div>
          <div className="header-links">
            <div>header link one</div>
            <div>header link two</div>
            <div>header link three</div>
          </div>
        </div>
        <div className="hero-main-text-container">
          <div className="hero-main-text-wrapper">
            <p className="hero-bold-text">This website is awesome</p>
            <p>
              This website has some subtext that goes here under the main title.
              It's a smaller font and the color is lower contrast
            </p>
            <button className="sign-up-button">Sign up</button>
          </div>
          <img src={page} alt="Landing page" id="landing-page" />
        </div>
      </div>
      <div className="random-information">Some random information.</div>
      <div className="image-section-container">
        <div className="image-section">
          <div className="image-and-description">
            <div
              className="image"
              style={{ backgroundImage: `url(${frog})` }}
            ></div>
            <div className="description">Pepe</div>
          </div>
          <div className="image-and-description">
            <div className="image"></div>
            <div className="description">Description 1</div>
          </div>
          <div className="image-and-description">
            <div className="image"></div>
            <div className="description">Description 2</div>
          </div>
          <div className="image-and-description">
            <div className="image"></div>
            <div className="description">Description 3</div>
          </div>
        </div>
      </div>
      <div className="quote-section-container">
        <div className="quote-container">
          <div className="quote">
            This is an inspiring quote, or a testimonial from a customer. Maybe
            it's just filling up space, or maybe people will actually read it.
            Who knows? All I know is that it looks nice.
          </div>
          <div className="signature">-Thor, God of Thunder</div>
        </div>
      </div>
      <div className="call-to-action-section-container">
        <div className="call-to-action-text-container">
          <div>
            <div className="text">Call to action! It's time!</div>
            <p>
              Sign up for our product by clicking that button right over there!
            </p>
          </div>
            <button className="sign-up-button">Sign up</button>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer">
          Copyright © The Odin Project 2021
        </div>
      </div>
    </div>
  );
}

export default App;
