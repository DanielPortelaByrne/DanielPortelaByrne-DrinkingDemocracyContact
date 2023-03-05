import logo from "./logo512.png";
import google from "./google-play-badge.png";
import apple from "./app-store-badge.png";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className="App-logo" />
        <h3>Get the App</h3>
        <div className="badges">
          <a href="https://play.google.com/store/apps/details?id=com.danielportelabyrne.drinkingdemocracy">
            <img src={google} alt="Get it on Google Play" />
          </a>
          <a href="https://apps.apple.com/us/app/your-app-name/id1234567890">
            <img src={apple} alt="Get it on the App Store" />
          </a>
        </div>
        <h2>Contact Information</h2>
        <p>
          Email:{" "}
          <a href="mailto:drinkingdemocracy@gmail.com">
            drinkingdemocracy@gmail.com
          </a>
        </p>
        {/* <p>Phone: (123) 456-7890</p> */}
        <h3>Privacy Policy</h3>
        <p>
          We take your privacy seriously and will not share your information
          with any third parties.
        </p>
      </header>
    </div>
  );
}

export default App;
