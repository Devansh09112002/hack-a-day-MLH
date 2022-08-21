import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import auth from './Components/Auth'
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
      auth.isAuthenticated() ? <Route path='/' element={<Home/>} /> : <Route path='/login' element={<PhoneInput/>} />
    }
    <Route path='/' element={<Home/>} />
    <Route path='/login' element={<PhoneInput/>} />
    <Route path='/otpverify' element={<OtpVerify/>} />
    <Route path='/therapy' element={<Therapy/>} />
    <Route path='/diet' element={<Diet/>} />
    <Route path='/diary' element={<Diary/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;


