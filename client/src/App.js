import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import auth from './Components/Auth'
import StepForm from './Pages/StepForm';
import PhoneInput from './Pages/phoneInput';
import OtpVerify from './Pages/otpVerify';
import Therapy from './Pages/Therapy';
import Diet from './Pages/Diet'
import Diary from './Pages/Diary';

function App() {
  // if (auth.isAuthenticated()) return <Home />;
	// else return <StepForm />;

  return (
    <BrowserRouter>
    <Routes>
    {
      auth.isAuthenticated() ? <Route path='/login' element={<StepForm/>} /> : <Route path='/' element={<Home/>} />
    }
    <Route path='/therapy' element={<Therapy/>} />
    <Route path='/diet' element={<Diet/>} />
    <Route path='/diary' element={<Diary/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;


