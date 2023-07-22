import './Css/App.css';
import EmployeeLogin from './EmployeeLogin';
import Header from './Header';
import Login from './Login';
import {BrowserRouter as Router, Routes, Route, Switch, BrowserRouter} from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import app from './firebase';
import { getAuth } from 'firebase/auth';
import Home from './Home';


function App() {

  const[user,dispatch]=useStateValue();
  const auth = getAuth(app);

    useEffect(() => {
        //loads only once i.e. only when app reloads 

        auth.onAuthStateChanged((authUser) => {
            console.log(authUser.email);

                dispatch({
                    type : "REGISTERED_USER",
                    email : authUser.email
                })

                console.log();
           

            if(authUser){
                dispatch({
                    type:'SET_USER',
                    user:authUser
                })
            }
            else{
                dispatch({
                    type:'SET_USER',
                    user: null
                })
            }
        })
    },[])


  return (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div className="App">
    <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/login" element={<Login/>} />
                <Route exact path="/empAuth" element={<EmployeeLogin/>} />
     </Routes>           
    </div>
    </BrowserRouter>
  );
}

export default App;
