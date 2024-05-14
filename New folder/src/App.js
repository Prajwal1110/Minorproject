
import './App.css';
import Home from './components/mother/Home';
import Login from './components/pregenant/Login';
import {Routes,Route} from "react-router-dom"
import Discover from './components/mother/Discover';
import Cover from './components/Cover';
import Profile from './components/mother/Profile';
import SignUpForm from './components/mother/msignup';
import PSignupForm from './components/pregenant/Signup';
import WelcomeScreen from './components/pregenant/WelcomeScreen';
import StressManagementScreen from './components/pregenant/question1';
import EmotionalDevelopmentScreen from './components/pregenant/question2';
import NutritionScreen from './components/pregenant/question3';
import ActivityScreen from './components/pregenant/question4';
import PregnancyCalculator from './components/pregenant/pprofile';
import PHome from './components/pregenant/phome';
import PHealth from './components/pregenant/PHealth';
import MotherLogin from './components/mother/Login';
import Program from './components/mother/Program';
import PProgram from './components/pregenant/pprogram';
import Content from './components/Content';
import Discussion from './components/Discussion';
import Research from './components/Research';



function App() {
  return (
 
  
    <div className="App">
        <Routes>
          <Route path="/" element={<Cover/>}/>
          <Route path="/pregnancy"element={<Content/>}/>
          <Route path="/pregnant/login" element={<Login/>}/>
          <Route path="/mother/login" element={<MotherLogin/>}/>
          <Route path="/mother/home" element={<Home/>}/>
          <Route path="/mother/discover" element={<Discover/>}/>
          <Route path="/mother/program" element={<Program/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/pregenant/signup" element={<PSignupForm/>}/>
          <Route path="/pregenant/welcome" element={<WelcomeScreen/>}/>
          <Route path="/pregenant/question1" element={<StressManagementScreen/>}/>
          <Route path="/pregenant/question2" element={<EmotionalDevelopmentScreen/>}/>
          <Route path="/pregenant/question3" element={<NutritionScreen/>}/>
          <Route path="/pregenant/question4" element={<ActivityScreen/>}/>
          <Route path="/pregenant/profile" element={<PregnancyCalculator/>}/>
          <Route path="/pregenant/home" element={<PHome/>}/>
          <Route path="/pregenant/health" element={<PHealth/>}/>
          <Route path="/pregenant/program" element={<PProgram/>}/>
          <Route path="/askdoctor" element={<Discussion/>}/>
          <Route path="/research" element={<Research/>}/>
        </Routes>
    </div>
    
  );
}

export default App;
