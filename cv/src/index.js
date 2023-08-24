

import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import reactImage from './react.jpeg'

function Hi() {

  return <div>Hello <strong>Hassan Nadeem</strong>
  
  <ul>
    <li>Home</li>
    <li>Gallery</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
  <div className='lastDiv'>{10 + 10}</div>

  <img src={reactImage} alt="img" with={500} />

  </div>;

   
  
}

ReactDOM.render(<Hi/>, document.querySelector('#root')); 