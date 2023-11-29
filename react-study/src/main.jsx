import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/react-logo.png";
import './App.css'

function Header() {
  return (
    <nav className="nav">
      <img src={logo} alt="" />
      <ul className="nav-items">
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

function MainContent() {
  return (
    <div>
      <h1 className="name">Reasons I'm excited to learn React</h1>
      <ol>
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
    </div>
  );
}

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

function Footer() {
  return <small className="footer">© 20xx Nikita development. All rights reserved.</small>;
}

ReactDOM.createRoot(document.getElementById("root")).render(<Page />);
