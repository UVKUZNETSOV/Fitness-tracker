import '../style/style.css';
import { useEffect } from 'react';
import logo from '../img/main-logo.png'
import background from '../img/background.png'
import axios from 'axios';

const google = window.google;

const handleCallbackResponse = (response) => {
  // console.log("Encoded token: " + response.credential)
  const access_token = "1//0cQ4WQN-UPJ0rCgYIARAAGAwSNwF-L9Irv_TV2Q7JZvWFkB7Oy9eVwesF2ibYWNcKZn0OtZ6t8l_Ui_6w_fgwnnuVBFc_nYI9l3U";

  axios.get('https://www.googleapis.com/fitness/v1/users/me/dataSources', {
    headers: {
      Authorization: `Bearer ${access_token}`
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
      client_id: "971625646791-7735ksjot150hplhr71836ld15262f91.apps.googleusercontent.com",
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

