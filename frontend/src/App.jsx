import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx';
import { Routes, Route} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>chat app </div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/profile]" element={<ProfilePage/>}/>
        <Route path="/settings]" element={<SettingsPage/>}/>
      </Routes>
      <Navbar />
    </>
  )
}

export default App
