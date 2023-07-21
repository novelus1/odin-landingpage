import "./App.css";
import page from './page.png';

function App() {
  return (
    <div className="hero-section-container">
      <div className="header-logo">Header Logo</div>
      <div className="header-link-text">
        <div>header link one</div>
        <div>header link one</div>
        <div>header link one</div>
      </div>
      <div className="hero-main-text-container">
        <div>This website is awesome</div>
        <p>
          This website has some subtext that goes here under the main title.
          It's a smaller font and the color is lower contrast
        </p>
      </div>
      <button className="sign-up-button">Sign up</button>
      <img src={page} alt="Landing page" id="landing-page"/>
    </div>
  );
}

export default App;
