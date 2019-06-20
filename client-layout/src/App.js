import React from 'react';
import logo from './assets/logo_transparent';
import shoe from './assets/shoe.jpg';
import watch from './assets/watch.jpg';
import bike from './assets/bike.jpg';
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
            
            <ProductBox source={shoe}/>
            <ProductBox source={watch}/>
            <ProductBox source={shoe}/>
            <ProductBox source={bike}/>
            <ProductBox source={shoe}/>
            <ProductBox source={watch}/>

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
              <li>Footwear</li>
              <li>Water Fountains</li>
              <li>Garage Door Openers</li>
              <li>Smart Home Tech</li>
              <li>Beverages</li>
              <li>Education</li>
            </ul>
          </div>
  )
}

function ProductBox(props){
  return(
    <div className="product-box">

              <div className="product-wrapper">
                <img src={props.source} alt="product"></img>
                <h4 className="product-header">Title with Two Very Very Long Lines</h4>
                <p className="product-desc">And an even longer description to boot. Why bother describing something in so many words?</p>
                <button className="cta-button">BUY NOW</button>
              </div>

            </div>
  )
}

export default App;
