import React from 'react';
import logo from './assets/logo_transparent';
import './App.scss';
//import hero from './assets/hero-splash.jpg';

function App() {
  return (
    <div className="App">

      <div className="hero-section">

        <div className="topnav">

          <div className="logo-box">
            <img src={logo} className="logo-control" alt="Logo"></img>
          </div>

          <Navbar />
        </div>

        <div className="clearfix"></div>

        <HeroText text="THIS IS A HEADLINE."/>
        </div>

        <div className="content-section">

          <div className="category-menu">

          </div>

        </div>
    </div>
  );
}

function Navbar(){
  return(
    <nav className="navbar">
      <NavItem link="#" title="Home"/>
      <NavItem link="#" title="About"/>
      <NavItem link="#" title="Products"/>
      <NavItem link="#" title="Help"/>
    </nav>
  );
}

function NavItem(props){
  return <a href={props.link}>{props.title}</a>;
}

function HeroText(props){
  return (
    <div className="textbox">
      <p className="hero-text">{props.text}</p>
    </div>
  );
}

export default App;
