import '../style/style.css';
import { useEffect } from 'react';
import logo from '../img/main-logo.png'
import background from '../img/background.png'
import axios from 'axios';


const google = window.google;

const handleCallbackResponse = (response) => {
  console.log("Encoded token: " + response.credential)
  localStorage.setItem("token", JSON.stringify(response.credential));

  axios.get('https://www.googleapis.com/fitness/v1/users/me/dataSources', {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("token", JSON.stringify(response.credential))}`,
    },
  })
  .then(response => {
    console.log('Данные из Google Fit:', response.data);
  })
  .catch(error => {
    console.error('Ошибка при получении данных из Google Fit:', error);
  });
}

function Homepage() {

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: "979243598839-on1vlm391a83rvo17m0nvdgtqcn46sdh.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("sign-in-div"),
      { theme: "outline", size: "large" }
    )

  }, []);

  return (
    <div className="App" style={{ backgroundImage: `url(${background})`}}>
      <main>
        <img src={logo} alt="Logo" className="app__img"/>
        <h1 className="app__header">
          Google Fit Tracker 
          <br/>
          <span>
            v1.0
          </span>
        </h1>
        <div id="sign-in-div"></div>
      </main>
    </div>
  );

}

export { Homepage }
