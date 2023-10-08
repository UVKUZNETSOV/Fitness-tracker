import '../style/style.css';
import { useEffect } from 'react';
import logo from '../img/main-logo.png'
import background from '../img/background.png'
import axios from 'axios';

const google = window.google;

// const handleLogin = async () => {
//   try {
//     const response = await axios.get("https://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");
//     console.log(response.data.authUrl);
//     window.location.href = response.data.authUrl;
//   } catch (error) {
//     console.error("Error logging in:", error);
//   }
// };

const handleCallbackResponse = (response) => {
  console.log("Encoded token: " + response.credential)
  localStorage.setItem("token", JSON.stringify(response.credential));

  axios.get('https://www.googleapis.com/fitness/v1/users/me/dataSources', {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
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
      client_id: "1083641433679-1m22s1mpo5d1muio0aannc0kh2ofivbu.apps.googleusercontent.com",
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
