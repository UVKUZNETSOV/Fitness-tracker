import '../style/style.css';
import { useEffect } from 'react';
import logo from '../img/main-logo.png'
import background from '../img/background.png'


const google = window.google;

const handleCallbackResponse = (response) => {
  console.log("Encoded token: " + response.credential)
  localStorage.getItem("token", JSON.stringify(response.credential));
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
