import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import ArtistPage from './components/ArtistPage/ArtistPage';
import './stylesheets/main.css';
class App extends Component {
  render() {
    return (
      <div>
	      <Navbar />
	      <ArtistPage />
      </div>
    );
  }
}

export default App;
