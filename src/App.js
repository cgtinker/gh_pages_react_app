// https://react.dev

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const user = {
  name: "Lami Salami",
  imgUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imgSize: 90,
};

const shit = {
  inj: <img
        className="App-img"
        src={user.imgUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imgSize,
          height: user.imgSize
        }}
      />
}

const products = [
  { title: 'Cheese', id: 1, isCool: false },
  { title: 'Mellow', id: 2, isCool: false},
  { title: 'Rat', id: 3, isCool: true }
]

// compiler error on unused func :))
function ImageComponent(imgPath, imgTitle) {
  return (
    <img
      src={imgPath}
      alt={imgTitle}
    / >
  );
}

const images = [
  { imgPath: 'https://i.imgur.com/yXOvdOSs.jpg', alt: "Some Name" },
]

const galleryImages = images.map(image =>
 <div>
    <img
      src={image.imgPath}
      alt={image.imgTitle}
    / >
 </div>
);

const listItems = products.map(product =>
  <li
    key={products.id}
    style={{
      color: product.isCool ? 'green' : 'white'
    }}
    >
    {product.title}
  </li>
);




function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>{user.name}</h1>
      {shit.inj}
      {shit.inj}
      {shit.inj}
      {shit.inj}
      {shit.inj}
      <Button />

      {shit.inj}
      <Button />

      {shit.inj}
      <Button />


      <ul>{listItems}</ul>
      <ul>{galleryImages}</ul>


        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


function Button() {
  // storing variable state
  const [count, setCount] = useState(0);

  function onHandleClick() {
    // setting variable
    setCount(count + 1);
    // alert('STOP!');
  }

  return (
    <button onClick={onHandleClick}>
      Cur Clicks {count}
    </button>
  );
}

export default App;
