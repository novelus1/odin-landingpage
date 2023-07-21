import "./App.css";
import page from "./page.jpg";

function App() {
  return (
    <div className="hero-section-container">
      <div className="header-link-text-container">
        <div className="header-logo">Header Logo</div>
        <div className="header-links">
          <div>header link one</div>
          <div>header link two</div>
          <div>header link three</div>
        </div>
      </div>
      <div className="hero-main-text-container">
        <div className="hero-main-text-wrapper">
          <span>This website is awesome</span>
          <p>
            This website has some subtext that goes here under the main title.
            It's a smaller font and the color is lower contrast
          </p>
          <button className="sign-up-button">Sign up</button>
        </div>
        <img src={page} alt="Landing page" id="landing-page" />
      </div>
    </div>
  );
}

export default App;
