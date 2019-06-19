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

          <CategorySection/>

          <div className="product-area">
            
            <div className="product-box">

              <div className="product-wrapper">
                <img src="" alt="Image"></img>
                <h4 className="product-header">Title with Two Very Very Long Lines</h4>
                <p className="product-desc">And an even longer description to boot. Why bother describing something in so many words?</p>
                <button className="cta-button">BUY NOW</button>
              </div>

            </div>

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

function CategorySection(){
  return(
    <div className="category-menu">
            <ul>
              <li><a href="#">Footwear</a></li>
              <li><a>Water Fountains</a></li>
              <li><a></a>Garage Door Openers</li>
              <li><a></a>Smart Home Tech</li>
              <li><a></a>Beverages</li>
              <li><a></a>Education</li>
            </ul>
          </div>
  )
}

export default App;
