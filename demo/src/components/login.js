import { GoogleLogin } from 'react-google-login';

const client_id = "1083641433679-1m22s1mpo5d1muio0aannc0kh2ofivbu.apps.googleusercontent.com";

function Login() {

  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS! Current user: ", res.profileobj);
  }

  const onFailure = (res) => {
    console.log ("LOGIN FAILED! res: ", res);
  }

  return(
    <div id="signInButton">
      <GoogleLogin
        client_id={client_id}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  )
}

export default Login;