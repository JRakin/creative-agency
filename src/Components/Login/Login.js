import React, { useContext } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Particles from 'react-particles-js';
import Swal from 'sweetalert2';
import Logo from '../../images/logos/logo.png';
import './Login.css';
import { UserContext } from '../../App';

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };

  const provider = new firebase.auth.GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email, photoURL } = result.user;
        const signedInUser = { name: displayName, email, photoURL };
        setLoggedInUser(signedInUser);
        storeAuthToken();
      })
      .catch(function (error) {
        // console.log(error.message);
        Swal.fire(
          'Sorry',
          'Something went wrong please try again later!',
          'warning'
        );
      });
  };

  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        const { displayName, email, photoURL } = firebase.auth().currentUser;
        const signedInUser = { name: displayName, email, photoURL };
        setLoggedInUser(signedInUser);
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      })
      .catch((error) => {
        Swal.fire('Ops', 'Something went bad!', 'error');
      });
  };
  return (
    <div className="login">
      <Particles
        params={{
          particles: {
            number: {
              value: 150,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: ['#BD10E0', '#B8E986', '#50E3C2', '#FFD300', '#E86363'],
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
                color: '#b6b2b2',
              },
            },
            opacity: {
              value: 0.5211089197812949,
              random: false,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 8.017060304327615,
              random: true,
              anim: {
                enable: true,
                speed: 12.181158184520175,
                size_min: 0.1,
                sync: true,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#c8c8c8',
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'bounce',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: false,
                mode: 'repulse',
              },
              onclick: {
                enable: false,
                mode: 'push',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <div className="container">
          <div className="d-flex justify-content-center align-items-center m-5">
            <Link className="text-center" to="/">
              <img className="w-50" src={Logo} alt="" />
            </Link>
          </div>
          <div className="text-center login-btn-container">
            <button onClick={handleGoogleSignIn} className="btn btn-signup">
              Continue With Google
            </button>
            <p className="mt-3">
              Don't have an account?{' '}
              <span>
                <Link to="/login">Create an account</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
