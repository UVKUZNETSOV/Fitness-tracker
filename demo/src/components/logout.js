import { GoogleLogout } from 'react-google-login';

const client_id = "1083641433679-1m22s1mpo5d1muio0aannc0kh2ofivbu.apps.googleusercontent.com";

function Logout() {

  const onSuccess = () => {
    console.log("Log out successfull!");
  }

  return(
    <div id="signOutButton">
      <GoogleLogout
        cliient_id = {client_id}
        buttonText = {"Logut"}
        onLogoutSuccess = {onSuccess}
      />
    </div>
  )
}

export default Logout;