import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <h1>Welcome to my app</h1>
      <MyButton/>
      
      <AboutPage/>
    </div>
    <div>
      <Profile/>
    </div>
    
  </React.StrictMode>
);

function MyButton(){
  return(
    <button>
      I'm button
    </button>
  );
}

function AboutPage(){
  return(
    <>
      <h1>About</h1>
      <p>Hello there. <br/>HOw do you do</p>
    </>
  );
}

const user = {
  name: 'Jack Aakash',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile(){
  return(
    <>
      <h1>{user.name}</h1>
      <img className='avatar' 
            src={user.imageUrl}
            alt={'Photo of ' + user.name}
            style={{
              width: user.imageSize,
              height: user.imageSize,
          }}></img>
    </>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
