// eslint-disable-next-line
import React, { Component } from 'react';
import Menu from './Components/Menu/Menu';
import Nav from './Components/Nav/Nav';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      menuOpen: false
    };

    this.toggleMenuOpen = this.toggleMenuOpen.bind(this);
  };

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');
    let forestInitPos = -300;


    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      forest.style.bottom =  scrollPos <= window.innerHeight && `${parseInt(forestInitPos + scrollPos / 6)}px`;

      header.style.visibility = scrollPos - 100 <= window.innerHeight ? 'visible' : 'hidden';

      scrollPos + 100 >= window.innerHeight ? navbar.classList.add('bg-active') : navbar.classList.remove('bg-active');
    };
  };



  toggleMenuOpen = () => {
    this.setState(prevState => ({menuOpen : !prevState.menuOpen}));
  };

  render() {
    return (
      <React.Fragment>
        <Menu menuOpen={this.state.menuOpen} toggleMenuOpen={this.toggleMenuOpen} />
        <Nav menuOpen={this.state.menuOpen} toggleMenuOpen={this.toggleMenuOpen} />
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </React.Fragment>
    );
  };
};

export default App;
