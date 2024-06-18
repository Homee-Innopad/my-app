import React from 'react';
import "./App.css";
import './styles/animations.css'

import { ReactComponent as IconGithub } from './assets/icons/github.svg';

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href=".">LOGO</a>
          </div>
          <div className="social">
            <a href="https://github.com" title="GitHub" target="_blank" rel="noopener noreferrer">
              <IconGithub className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1 className="animate-fade-in">Coming Soon !!</h1>
            <p className="animate-fade-in">Please check back later to know more.</p>
          </div>
          {/* <a href="mailto:user@example.com">
            <div className="cta">Send us an email</div>
          </a> */}
        </div>
        <div className="footer">
          <span>Made by <a className="underlined" href="https://github.com" target="_blank" rel="noopener noreferrer">Homee Jadav - React Native Developer.</a></span>
        </div>
      </div>
    );
  }
}

export default App;