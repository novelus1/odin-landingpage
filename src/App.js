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
    </div>
  );
}

export default App;
