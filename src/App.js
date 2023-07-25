import './Css/App.css';
import EmployeeLogin from './EmployeeLogin';
import Header from './Header';
import Login from './Login';
import {BrowserRouter as Router, Routes, Route, Switch, BrowserRouter, useNavigate} from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import app from './firebase';
import { getAuth } from 'firebase/auth';
import Home from './Home';
import NewEmpLogin from './NewEmpLogin';
import SoftwareDeveloperDashboard from './SoftwareDev';
import QualityAssuranceDashboard from './QualityAssurance';
import HumanResourcesDashboard from './HumanResources';
import CustomerRelationsDashboard from './CustomerRelations';


function App() {


  const auth = getAuth(app);

  const [{}, dispatch] = useStateValue();

 

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser.email);
  
        dispatch({
          type: "REGISTERED_USER",
          email: authUser.email,
        });
  
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  
    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  
  


  return (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div className="App">
    <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/login" element={<Login/>} />
                <Route exact path="/empAuth" element={<EmployeeLogin/>} />
                <Route exact path='/NewEmp' element={<NewEmpLogin/>}/>
                <Route exact path='/swdev' element={<SoftwareDeveloperDashboard/>}/>
                <Route exact path='/quality-assurance' element={<QualityAssuranceDashboard/>}/>
                <Route exact path='/human-resources-officer' element={<HumanResourcesDashboard/>}/>
                <Route exact path='/customer-relations' element={<CustomerRelationsDashboard/>}/>
     </Routes>           
    </div>
    </BrowserRouter>
  );
}

export default App;
